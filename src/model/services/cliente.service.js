const ClienteRepository = require('../repositories/cliente.repository');

const ClienteService = {
  listarTodos: ClienteRepository.listarTodos,
  listarPorNome: ClienteRepository.listarPorNome,
  buscarPorId: ClienteRepository.buscarPorId,
  gravar: ClienteRepository.gravar,
  remover: ClienteRepository.remover
};

module.exports = ClienteService;
