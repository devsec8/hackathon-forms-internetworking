import { DataTypes } from 'sequelize';
import postgresDB from './database.model';

const FormInput = postgresDB.define('formInpute', {
  formInputID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
});

export default FormInput;
