import { randomUUID as generateId } from "node:crypto";
import { Database } from "./database.js";
import { buildRoutePath } from "./utils/build-route-path.js";

const database = new Database();

export const routes = [
  {
    method: "GET",
    path: buildRoutePath("/users"),
    handler: (req, res) => {
      const { search } = req.query;

      const users = database.select(
        "users",
        search
          ? {
              name: search,
              email: search,
              ocupation: search,
            }
          : null
      );

      return res
        .writeHead(200, "Todos os usuários foram listados")
        .end(JSON.stringify(users));
    },
  },
  {
    method: "POST",
    path: buildRoutePath("/users"),
    handler: (req, res) => {
      const { name, email, age, ocupation } = req.body;

      const newUser = {
        id: generateId(),
        name: name,
        email: email,
        age: age,
        ocupation: ocupation,
      };

      database.insert("users", newUser);

      return res
        .writeHead(201, "Usuário criado com sucesso")
        .end(JSON.stringify(newUser));
    },
  },
  {
    method: "PUT",
    path: buildRoutePath("/users/:id"),
    handler: (req, res) => {
      const { id } = req.params;
      const { name, email, age, ocupation } = req.body;
      const updatedUser = { name, email, age, ocupation };

      database.update("users", id, updatedUser);

      return res.writeHead(200, "Usuário atualizado com sucesso").end();
    },
  },
  {
    method: "DELETE",
    path: buildRoutePath("/users/:id"),
    handler: (req, res) => {
      const { id } = req.params;

      database.delete("users", id);

      return res.writeHead(204, "Usuário deletado com sucesso").end();
    },
  },
];
