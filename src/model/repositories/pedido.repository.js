const db = require('./database');

const PedidoRepository = {
  listarTodos: (callback) => {
    db.all('SELECT * FROM pedidos', callback);
  },

  buscarPorId: (id, callback) => {
    db.get('SELECT * FROM pedidos WHERE id = ?', [id], callback);
  },

  gravar: (pedido, callback) => {
    db.get('SELECT id FROM produtos WHERE id = ?', [pedido.produtoId], (err, row) => {
      if (err) return callback(err);
      if (!row) return callback(new Error('Produto não encontrado'));

      if (pedido.id) {
        db.get('SELECT id FROM pedidos WHERE id = ?', [pedido.id], (err, row) => {
          if (row) {
            db.run(
              'UPDATE pedidos SET clienteId = ?, produtoId = ? WHERE id = ?',
              [pedido.clienteId, pedido.produtoId, pedido.id],
              callback
            );
          } else {
            db.run(
              'INSERT INTO pedidos (clienteId, produtoId) VALUES (?, ?)',
              [pedido.clienteId, pedido.produtoId],
              callback
            );
          }
        });
      } else {
        db.run(
          'INSERT INTO pedidos (clienteId, produtoId) VALUES (?, ?)',
          [pedido.clienteId, pedido.produtoId],
          callback
        );
      }
    });
  },

  remover: (id, callback) => {
    db.run('DELETE FROM pedidos WHERE id = ?', [id], callback);
  }
};

module.exports = PedidoRepository;
