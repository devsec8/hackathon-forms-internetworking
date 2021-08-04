import { DataTypes } from 'sequelize';
import { sequelize } from './database.model';

const User = sequelize.define('formInputes', {
  formInputID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  
});

(async () => {
  await User.sync({ force: true });
  // Code here
})();