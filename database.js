import sqlite3 from 'sqlite3';

// Criação ou abertura do banco de dados
const db = new sqlite3.Database('./financas.db', (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  } else {
    console.log('Conectado ao banco de dados.');
  }
});

// Criação da tabela de despesas/entradas
db.run(`
  CREATE TABLE IF NOT EXISTS despesas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    categoria TEXT NOT NULL,
    orcamento_estimado REAL NOT NULL,
    despesas_reais REAL NOT NULL
  )
`);

export { db };
