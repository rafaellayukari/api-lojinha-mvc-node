const db = require("../db");

const Produto = {
  listarTodos: () => db("produto"),
  listarPorId: (id) => db("produto").where("id", id).first(),
  inserir: (data) => db("produto").insert(data),
  atualizar: (id, data) => db("produto").where("id", id).update(data),
  deletar: (id) => db("produto").where("id", id).delete(),
};

module.exports = Produto;
