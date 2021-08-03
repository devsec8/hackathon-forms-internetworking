import postgresDB from '../models/database.model';
import Form from '../models/form.model';
import User from '../models/user.model';

export default class DBService {
  private static _instance: DBService;

  public static get instance() {
    if (!DBService._instance) {
      DBService._instance = new DBService();
    }
    return DBService._instance;
  }

  init = async () => {
    User.hasOne(Form, { foreignKey: 'formOwner' });
    await postgresDB.sync({ force: true });
    await User.sync({ force: true });
    await Form.sync({ force: true });
  };
}
