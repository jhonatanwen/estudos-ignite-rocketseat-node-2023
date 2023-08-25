import { Database } from "./database.js";
import { generateId } from "./utils/generateId.js";
// É falado na aula que se pode usar o <randomUUID>, mas eu antes mesmo de chegar nessa aula fiz essa função no utils simples de fazer um id incremental então não vou tirar ele, porém a substituição é simples, basta fazer o import a seguir:
// import { randomUUID } from "node:crypto";
// e na parte onde tem id em newUser substituir o <generateId()> por <randomUUID()>

const database = new Database();

export const routes = [
  {
    method: "GET",
    path: "/users",
    handler: (req, res) => {
      const users = database.select("users");

      return res
        .writeHead(200, "Todos os usuários foram listados")
        .end(JSON.stringify(users));
    },
  },
  {
    method: "POST",
    path: "/users",
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
];
