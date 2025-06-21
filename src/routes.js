const express = require('express');
const router = express.Router();
const ProdutoController = require('./control/produto.controller');
const ClienteController = require('./control/cliente.controller');
const PedidoController = require('./control/pedido.controller');


router.get('/v1/produto', ProdutoController.listarTodos);
router.get('/v1/produto/nome/:nome_do_produto', ProdutoController.listarPorNome);
router.get('/v1/produto/:id', ProdutoController.buscarPorId);
router.post('/v1/produto', ProdutoController.gravar);
router.delete('/v1/produto/:id', ProdutoController.remover);
router.get('/v1/produto-contar', ProdutoController.contar);

router.get('/v1/cliente', ClienteController.listarTodos);
router.get('/v1/cliente/nome/:nome', ClienteController.listarPorNome);
router.get('/v1/cliente/:id', ClienteController.buscarPorId);
router.post('/v1/cliente', ClienteController.gravar);
router.delete('/v1/cliente/:id', ClienteController.remover);

router.get('/v1/pedido', PedidoController.listarTodos);
router.get('/v1/pedido/:id', PedidoController.buscarPorId);
router.post('/v1/pedido', PedidoController.gravar);
router.delete('/v1/pedido/:id', PedidoController.remover);

module.exports = router;
