import http from "node:http";
import { jsonParser } from "./middlewares/jsonParser.js";
import { routes } from "./routes.js";

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await jsonParser(req, res);
  // Middlewares

  const route = routes.find(
    (route) => route.method === method && route.path === url
  );

  if (route) return route.handler(req, res);

  res.writeHead(404, "Rota não encontrada").end();
});

server.listen(3333);
