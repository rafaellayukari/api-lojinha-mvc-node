const ClienteController = require("../controllers/cliente.controller");

module.exports = function (server) {
  server.get("/cliente", ClienteController.listarTodos);
  server.get("/cliente/:id", ClienteController.listarPorId);
  server.post("/cliente", ClienteController.inserir);
  server.put("/cliente/:id", ClienteController.atualizar);
  server.del("/cliente/:id", ClienteController.deletar);
