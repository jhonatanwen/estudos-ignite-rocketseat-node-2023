import { Database } from "../database.js";

const database = new Database();

export function generateId() {
  const lastId = database.select("users").length;
  return lastId + 1;
}
