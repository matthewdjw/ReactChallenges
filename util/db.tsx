import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

export async function openDB(): Promise<
  Database<sqlite3.Database, sqlite3.Statement>
> {
  return open({
    filename: "../db/database.sqlite",
    driver: sqlite3.Database,
  });
}
