const db = require("../db");

const Cliente = {
  listarTodos: () => db("cliente"),
  listarPorId: (id) => db("cliente").where("id", id).first(),
  inserir: (data) => db("cliente").insert(data),
  atualizar: (id, data) => db("cliente").where("id", id).update(data),
  deletar: (id) => db("cliente").where("id", id).delete(),
};

module.exports = Cliente;
