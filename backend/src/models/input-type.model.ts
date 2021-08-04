import { DataTypes } from 'sequelize';
import postgresDB from './database.model';

const InputType = postgresDB.define('inputType', {
  inputID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  inputName: DataTypes.STRING,
});

export default InputType;
