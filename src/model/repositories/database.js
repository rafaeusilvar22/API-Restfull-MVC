const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const dbDir = path.join(__dirname, '../../../database');
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir);
}
const dbPath = path.join(dbDir, 'db.sqlite');

console.log('Banco será criado em:', dbPath);

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco:', err.message);
  } else {
    console.log('Conectado ao banco de dados SQLite!');
  }
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS produtos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      preco REAL
    )
  `, (err) => {
    if (err) {
      console.error('Erro ao criar tabela produtos:', err.message);
    } else {
      console.log('Tabela "produtos" garantida com sucesso.');
    }
  });

  db.run(`
    CREATE TABLE IF NOT EXISTS clientes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      email TEXT NOT NULL
    )
  `, (err) => {
    if (err) {
      console.error('Erro ao criar tabela clientes:', err.message);
    } else {
      console.log('Tabela "clientes" garantida com sucesso.');
    }
  });

  db.run(`
    CREATE TABLE IF NOT EXISTS pedidos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      clienteId INTEGER NOT NULL,
      produtoId INTEGER NOT NULL,
      FOREIGN KEY (clienteId) REFERENCES clientes (id),
      FOREIGN KEY (produtoId) REFERENCES produtos (id)
    )
  `, (err) => {
    if (err) {
      console.error('Erro ao criar tabela pedidos:', err.message);
    } else {
      console.log('Tabela "pedidos" garantida com sucesso.');
    }
  });
});

module.exports = db;
