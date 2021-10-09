import config from "./knex.config"
import knex from "knex"

const db = knex(config as knex.Config)
export default db
