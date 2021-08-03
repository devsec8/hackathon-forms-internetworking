const Sequelize = require('sequelize');

export const sequelize = new Sequelize('ourProject', 'postgres', 'Aa123456', {
  host: 'localhost',
  dialect: 'postgres',
});

const authenticateDb = async () => {
  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

authenticateDb();
