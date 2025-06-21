const Pedido = require('../model/domains/pedido.model');
const PedidoService = require('../model/services/pedido.service');

const PedidoController = {
  listarTodos: (req, res) => {
    PedidoService.listarTodos((err, rows) => {
      if (err) return res.status(500).json({ erro: err.message });
      res.json(rows);
    });
  },

  buscarPorId: (req, res) => {
    PedidoService.buscarPorId(req.params.id, (err, row) => {
      if (err) return res.status(500).json({ erro: err.message });
      row ? res.json(row) : res.status(404).json({ mensagem: 'Pedido não encontrado' });
    });
  },

  gravar: (req, res) => {
    const { id, clienteId, produtoId } = req.body;
    const pedido = new Pedido(id, clienteId, produtoId);
    PedidoService.gravar(pedido, function (err) {
      if (err) return res.status(500).json({ erro: err.message });
      res.status(200).json({ mensagem: 'Pedido salvo com sucesso!' });
    });
  },

  remover: (req, res) => {
    PedidoService.remover(req.params.id, function (err) {
      if (err) return res.status(500).json({ erro: err.message });
      res.status(200).json({ mensagem: 'Pedido removido com sucesso!' });
    });
  }
};

module.exports = PedidoController;
