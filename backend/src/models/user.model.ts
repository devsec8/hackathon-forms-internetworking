import { DataTypes } from 'sequelize';
import postgresDB from './database.model';

const User = postgresDB.define('user', {
  personalNumber: {
    type: DataTypes.TEXT,
    primaryKey: true,
  },
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  password: DataTypes.STRING,
});

export default User;
