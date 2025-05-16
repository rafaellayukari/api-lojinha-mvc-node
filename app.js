const restify = require("restify");
const produtoRoutes = require("./routes/produto.routes");
const clienteRoutes = require("./routes/cliente.routes");

const server = restify.createServer({ name: "Lojinha", version: "1.0.0" });

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

produtoRoutes(server);
clienteRoutes(server);

server.get("/", (req, res, next) => {
  res.send({ mensagem: "Sejam bem-vindos à nossa Lojinha" });
});

server.listen(8001, () => {
  console.log("%s executando em: %s", server.name, server.url);
});
