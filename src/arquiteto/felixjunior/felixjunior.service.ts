import { Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { Client } from 'pg';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FelixjuniorService {
    private readonly logger = new Logger(FelixjuniorService.name);
    private readonly migrationsDir = path.join(__dirname, '..', 'migracoes');
    private readonly createSchemaMigrationTableQuery = `
                    CREATE TABLE IF NOT EXISTS "schema_migracao" (
                        id SERIAL PRIMARY KEY,
                        nome_migracao VARCHAR(255) NOT NULL UNIQUE,
                        data_executada TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    );
                    `;

    constructor(private prisma: PrismaService) { }

    async runMigrations() {
        const migrationFiles = fs.readdirSync(this.migrationsDir);

        await criarTabelaMigracaoSeNecessario();

        for (const file of migrationFiles) {
            if (!(await hasMigrationRun(file))) {
                console.log(file)
                const migration = await import(path.join(this.migrationsDir, file));
                if (typeof migration.up === 'function') {
                    this.logger.log(`Executando migração: ${file}`);
                    await migration.up();
                    await markMigrationAsExecuted(file);
                }
            } else {
                this.logger.log(`Migração já executada: ${file}`);
            }
        }

        this.logger.log(`Todas as migrações foram executadas`);
    }


}


async function criarTabelaMigracaoSeNecessario() {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    });

    await client.connect();

    const query = `
        CREATE TABLE IF NOT EXISTS "schema_migracao"(
            id SERIAL PRIMARY KEY,
            nome_migracao VARCHAR(255) NOT NULL UNIQUE,
            data_executada TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        `;

    await client.query(query);
    await client.end();
}

async function markMigrationAsExecuted(fileName: string) {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    });

    await client.connect();

    const query = `
        INSERT INTO "schema_migracao" (nome_migracao) VALUES ($1)
        ON CONFLICT (nome_migracao) DO NOTHING;
    `;

    await client.query(query, [fileName]);
    await client.end();
}

async function hasMigrationRun(fileName: string): Promise<boolean> {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    });

    await client.connect();

    const query = `
        SELECT COUNT(*) 
        FROM "schema_migracao" 
        WHERE nome_migracao = $1;
    `;

    const result = await client.query(query, [fileName]);
    await client.end();

    return parseInt(result.rows[0].count, 10) > 0;
}
