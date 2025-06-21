const ProdutoRepository = require('../repositories/produto.repository');

const ProdutoService = {
  listarTodos: ProdutoRepository.listarTodos,
  listarPorNome: ProdutoRepository.listarPorNome,
  buscarPorId: ProdutoRepository.buscarPorId,
  contar: ProdutoRepository.contar,
  gravar: ProdutoRepository.gravar,
  remover: ProdutoRepository.remover
};

module.exports = ProdutoService;
