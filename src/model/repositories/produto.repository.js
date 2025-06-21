const db = require('../../database/db.sqlite'); // Adjusted path to match the likely correct location

const ProdutoRepository = {
  listarTodos: (callback) => {
    db.all('SELECT * FROM produtos', callback);
  },

  listarPorNome: (nome, callback) => {
    db.all('SELECT * FROM produtos WHERE nome LIKE ?', [`%${nome}%`], callback);
  },

  buscarPorId: (id, callback) => {
    db.get('SELECT * FROM produtos WHERE id = ?', [id], callback);
  },

  contar: (callback) => {
    db.get('SELECT COUNT(*) as total FROM produtos', callback);
  },

  gravar: (produto, callback) => {
    if (produto.id) {
      db.get('SELECT id FROM produtos WHERE id = ?', [produto.id], (err, row) => {
        if (row) {
          db.run('UPDATE produtos SET nome = ?, preco = ? WHERE id = ?', [produto.nome, produto.preco, produto.id], callback);
        } else {
          db.run('INSERT INTO produtos (nome, preco) VALUES (?, ?)', [produto.nome, produto.preco], callback);
        }
      });
    } else {
      db.run('INSERT INTO produtos (nome, preco) VALUES (?, ?)', [produto.nome, produto.preco], callback);
    }
  },

  remover: (id, callback) => {
    db.run('DELETE FROM produtos WHERE id = ?', [id], callback);
  }
};

module.exports = ProdutoRepository;
