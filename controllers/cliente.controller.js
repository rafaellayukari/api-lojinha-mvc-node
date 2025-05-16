const Cliente = require("../models/cliente.model");
const errors = require("restify-errors");

const ClienteController = {
  listarTodos: async (req, res, next) => {
    try {
      const dados = await Cliente.listarTodos();
      res.send(dados);
    } catch (err) {
      return next(new errors.InternalServerError(err.message));
    }
  },

  listarPorId: async (req, res, next) => {
    try {
      const dado = await Cliente.listarPorId(req.params.id);
      if (!dado) return next(new errors.NotFoundError("Cliente não encontrado"));
      res.send(dado);
    } catch (err) {
      return next(new errors.InternalServerError(err.message));
    }
  },

  inserir: async (req, res, next) => {
    try {
      await Cliente.inserir(req.body);
      res.send(201, { success: true });
    } catch (err) {
      return next(new errors.BadRequestError("Erro ao inserir"));
    }
  },

  atualizar: async (req, res, next) => {
    try {
      const resultado = await Cliente.atualizar(req.params.id, req.body);
      if (!resultado) return next(new errors.NotFoundError("Cliente não encontrado"));
      res.send({ success: true });
    } catch (err) {
      return next(new errors.BadRequestError("Erro ao atualizar"));
    }
  },

  deletar: async (req, res, next) => {
    try {
      const resultado = await Cliente.deletar(req.params.id);
      if (!resultado) return next(new errors.NotFoundError("Cliente não encontrado"));
      res.send({ success: true });
    } catch (err) {
      return next(new errors.BadRequestError("Erro ao deletar"));
    }
  }
};

module.exports = ClienteController;
