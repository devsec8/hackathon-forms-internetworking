import { Sequelize } from 'sequelize';
import { dbConfig } from '../configurations/app.config';

const postgresDB = new Sequelize(dbConfig.db, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: 'postgres',
});

export default postgresDB;
