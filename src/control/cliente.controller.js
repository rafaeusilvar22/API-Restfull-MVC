const Cliente = require('../model/domains/cliente.model');
const ClienteService = require('../model/services/cliente.service');

const ClienteController = {
  listarTodos: (req, res) => {
    ClienteService.listarTodos((err, rows) => {
      if (err) return res.status(500).json({ erro: err.message });
      res.json(rows);
    });
  },

  listarPorNome: (req, res) => {
    ClienteService.listarPorNome(req.params.nome, (err, rows) => {
      if (err) return res.status(500).json({ erro: err.message });
      res.json(rows);
    });
  },

  buscarPorId: (req, res) => {
    ClienteService.buscarPorId(req.params.id, (err, row) => {
      if (err) return res.status(500).json({ erro: err.message });
      row ? res.json(row) : res.status(404).json({ mensagem: 'Cliente não encontrado' });
    });
  },

  gravar: (req, res) => {
    const { id, nome, email } = req.body;
    const cliente = new Cliente(id, nome, email);
    ClienteService.gravar(cliente, function (err) {
      if (err) return res.status(500).json({ erro: err.message });
      res.status(200).json({ mensagem: 'Cliente salvo com sucesso!' });
    });
  },

  remover: (req, res) => {
    ClienteService.remover(req.params.id, function (err) {
      if (err) return res.status(500).json({ erro: err.message });
      res.status(200).json({ mensagem: 'Cliente removido com sucesso!' });
    });
  }
};

module.exports = ClienteController;
