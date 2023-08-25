import fs from "node:fs/promises";

const databasePath = new URL("../db.json", import.meta.url);
// URL é uma classe interna do node que retorna o caminho pedido de acordo com os parametros dados ao ser instanciada, ela recebe primeiro um parametro para um caminho interno a pasta do caminho dado no segundo parametro.
// Ex: Acima é dado o caminho para o arquivo db.json que deve estar dentro da pasta do caminho recebido do valor de import.meta.url que vai parecer com algo como "C:\Nome_da_Pasta_desse_Projeto\Esse_Projeto_Aqui\db.json"
// O import.meta.url é o caminho para o arquivo onde o mesmo está sendo usado

export class Database {
  #database = {};
  // { "users": [...] }

  constructor() {
    fs.readFile(databasePath, "utf-8")
      .then((data) => {
        this.#database = JSON.parse(data);
      })
      .catch(() => {
        this.#pesist();
      });
  }

  #pesist() {
    fs.writeFile(databasePath, JSON.stringify(this.#database));
  }

  select(table) {
    const data = this.#database[table] ?? [];

    return data;
  }

  insert(table, data) {
    if (Array.isArray(this.#database[table])) this.#database[table].push(data);
    else this.#database[table] = [data];

    this.#pesist();

    return data;
  }
}
