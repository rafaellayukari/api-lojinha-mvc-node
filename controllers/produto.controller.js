const Produto = require("../models/produto.model");
const errors = require("restify-errors");

const ProdutoController = {
  listarTodos: async (req, res, next) => {
    try {
      const dados = await Produto.listarTodos();
      res.send(dados);
    } catch (err) {
      return next(new errors.InternalServerError(err.message));
    }
  },

  listarPorId: async (req, res, next) => {
    try {
      const dado = await Produto.listarPorId(req.params.id);
      if (!dado) return next(new errors.NotFoundError("Produto não encontrado"));
      res.send(dado);
    } catch (err) {
      return next(new errors.InternalServerError(err.message));
    }
  },

  inserir: async (req, res, next) => {
    try {
      await Produto.inserir(req.body);
      res.send(201, { success: true });
    } catch (err) {
      return next(new errors.BadRequestError("Erro ao inserir"));
    }
  },

  atualizar: async (req, res, next) => {
    try {
      const resultado = await Produto.atualizar(req.params.id, req.body);
      if (!resultado) return next(new errors.NotFoundError("Produto não encontrado"));
      res.send({ success: true });
    } catch (err) {
      return next(new errors.BadRequestError("Erro ao atualizar"));
    }
  },

  deletar: async (req, res, next) => {
    try {
      const resultado = await Produto.deletar(req.params.id);
      if (!resultado) return next(new errors.NotFoundError("Produto não encontrado"));
      res.send({ success: true });
    } catch (err) {
      return next(new errors.BadRequestError("Erro ao deletar"));
    }
  }
};

module.exports = ProdutoController;
