import { PrismaClient } from '@prisma/client';
import { Client } from 'pg';

const prisma = new PrismaClient();

export async function up() {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    });

    await client.connect();

    try {
        // Query para criar a tabela de usuários
        const query = `
      CREATE TABLE IF NOT EXISTS "empresa" (
        CREATE TABLE empresa (
            id SERIAL PRIMARY KEY,
            nome VARCHAR(255) NOT NULL
        );
    `;

        await client.query(query);
        console.log('Tabela empresa criada com sucesso.');
    } catch (error) {
        console.error('Erro ao criar tabela empresa:', error);
    } finally {
        await client.end();
    }
}

export async function down() {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    });

    await client.connect();

    try {
        // Query para remover a tabela de usuários
        const query = `DROP TABLE IF EXISTS "empresa";`;

        await client.query(query);
        console.log('Tabela empresa removida com sucesso.');
    } catch (error) {
        console.error('Erro ao remover tabela empresa:', error);
    } finally {
        await client.end();
    }
}
