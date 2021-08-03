import { Sequelize } from 'sequelize';

const postgresDB = new Sequelize('postgres://postgres:Aa123456@127.0.0.1:5432/witcher', {
  logging: true,
});

export default postgresDB;
