import { DataTypes } from 'sequelize';
import { sequelize } from './database.model';

const User = sequelize.define('inputType', {
  inputID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  inputName: DataTypes.STRING
});

(async () => {
  await User.sync({ force: true });
  // Code here
})();
