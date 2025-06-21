const db = require('./database');

const ClienteRepository = {
  listarTodos: (callback) => {
    db.all('SELECT * FROM clientes', callback);
  },

  listarPorNome: (nome, callback) => {
    db.all('SELECT * FROM clientes WHERE nome LIKE ?', [`%${nome}%`], callback);
  },

  buscarPorId: (id, callback) => {
    db.get('SELECT * FROM clientes WHERE id = ?', [id], callback);
  },

  gravar: (cliente, callback) => {
    if (cliente.id) {
      db.get('SELECT id FROM clientes WHERE id = ?', [cliente.id], (err, row) => {
        if (row) {
          db.run('UPDATE clientes SET nome = ?, email = ? WHERE id = ?', [cliente.nome, cliente.email, cliente.id], callback);
        } else {
          db.run('INSERT INTO clientes (nome, email) VALUES (?, ?)', [cliente.nome, cliente.email], callback);
        }
      });
    } else {
      db.run('INSERT INTO clientes (nome, email) VALUES (?, ?)', [cliente.nome, cliente.email], callback);
    }
  },

  remover: (id, callback) => {
    db.run('DELETE FROM clientes WHERE id = ?', [id], callback);
  }
};

module.exports = ClienteRepository;
