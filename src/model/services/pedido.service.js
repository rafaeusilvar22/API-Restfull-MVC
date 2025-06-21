const PedidoRepository = require('../repositories/pedido.repository');

const PedidoService = {
  listarTodos: PedidoRepository.listarTodos,
  buscarPorId: PedidoRepository.buscarPorId,
  gravar: PedidoRepository.gravar,
  remover: PedidoRepository.remover
};

module.exports = PedidoService;
