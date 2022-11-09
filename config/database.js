import {Sequelize} from "sequelize";

const db = new Sequelize('sql12555418', 'sql12555418', 'jYzCsRPmnL', {
  host: 'sql12.freemysqlhosting.net',
  dialect: 'mysql'
});

export default db;