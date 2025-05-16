const ProdutoController = require("../controllers/produto.controller");

module.exports = function (server) {
  server.get("/produto", ProdutoController.listarTodos);
  server.get("/produto/:id", ProdutoController.listarPorId);
  server.post("/produto", ProdutoController.inserir);
  server.put("/produto/:id", ProdutoController.atualizar);
  server.del("/produto/:id", ProdutoController.deletar);
