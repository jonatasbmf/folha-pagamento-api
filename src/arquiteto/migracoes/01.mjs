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
      CREATE TABLE IF NOT EXISTS "Usuario" (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        senha VARCHAR(255) NOT NULL
      );
    `;

    await client.query(query);
    console.log('Tabela Usuario criada com sucesso.');
  } catch (error) {
    console.error('Erro ao criar tabela Usuario:', error);
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
    const query = `DROP TABLE IF EXISTS "Usuario";`;

    await client.query(query);
    console.log('Tabela Usuario removida com sucesso.');
  } catch (error) {
    console.error('Erro ao remover tabela Usuario:', error);
  } finally {
    await client.end();
  }
}
