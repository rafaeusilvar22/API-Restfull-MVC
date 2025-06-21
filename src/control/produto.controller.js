const Produto = require('../model/domains/produto.model');
const ProdutoService = require('../model/services/produto.service');

const ProdutoController = {
  listarTodos: (req, res) => {
    ProdutoService.listarTodos((err, rows) => {
      if (err) return res.status(500).json({ erro: err.message });
      res.json(rows);
    });
  },

  listarPorNome: (req, res) => {
    ProdutoService.listarPorNome(req.params.nome, (err, rows) => {
      if (err) return res.status(500).json({ erro: err.message });
      res.json(rows);
    });
  },

  buscarPorId: (req, res) => {
    ProdutoService.buscarPorId(req.params.id, (err, row) => {
      if (err) return res.status(500).json({ erro: err.message });
      row ? res.json(row) : res.status(404).json({ mensagem: 'Produto não encontrado' });
    });
  },

  contar: (req, res) => {
    ProdutoService.contar((err, row) => {
      if (err) return res.status(500).json({ erro: err.message });
      res.json({ total: row.total });
      console.log(`Total de produtos: ${row.total}`);
    });
  },

  gravar: (req, res) => {
    const { id, nome, preco } = req.body;
    const produto = new Produto(id, nome, preco);
    ProdutoService.gravar(produto, function (err) {
      if (err) return res.status(500).json({ erro: err.message });
      res.status(200).json({ mensagem: 'Produto salvo com sucesso!' });
    });
  },

  remover: (req, res) => {
    ProdutoService.remover(req.params.id, function (err) {
      if (err) return res.status(500).json({ erro: err.message });
      res.status(200).json({ mensagem: 'Produto removido com sucesso!' });
    });
  }
};

module.exports = ProdutoController;
