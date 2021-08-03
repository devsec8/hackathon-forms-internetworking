import { Sequelize } from 'sequelize';

const postgresDB = new Sequelize('ourProject', 'postgres', 'Aa123456', {
  host: 'localhost',
  dialect: 'postgres',
});

export default postgresDB;
