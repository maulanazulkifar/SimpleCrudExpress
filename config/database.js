import {Sequelize} from "sequelize";

const db = new Sequelize('porto_db', 'maul', '', {
  host: '34.72.87.37',
  dialect: 'mysql'
});

export default db;