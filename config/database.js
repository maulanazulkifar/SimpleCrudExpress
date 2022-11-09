import {Sequelize} from "sequelize";

const db = new Sequelize('porto_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

export default db;