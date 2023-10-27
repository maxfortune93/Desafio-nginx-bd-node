import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

interface Query {
    sql: string;
    values?: any[];
  }

dotenv.config()

export async function dbQueries<T extends mysql.RowDataPacket>(query: Query): Promise<T[]> {
   const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });
  
  try {
    const [rows] = await connection.execute<T[]>(query.sql, query.values);
    return rows;
  } catch (error) {
    console.error('Erro ao criar a tabela ou inserir dados:', error);
    return [];
  } finally {
    connection.end();
  }
}
