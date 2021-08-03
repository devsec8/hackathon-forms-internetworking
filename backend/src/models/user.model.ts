import { DataTypes } from 'sequelize';
import { sequelize } from './database.model';

const User = sequelize.define('user', {
  personalNumber: {
    type: DataTypes.TEXT,
    primaryKey: true,
  },
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  password: DataTypes.STRING,
});

(async () => {
  await User.sync({ force: true });
  // Code here
})();
