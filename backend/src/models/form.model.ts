import { DataTypes } from 'sequelize';
import postgresDB from './database.model';

const Form = postgresDB.define('form', {
  fromId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  formName: DataTypes.STRING,
});

export default Form;
