import express, { Express } from 'express';
import compression from 'compression';
import { appConfig } from './configurations/app.config';
import APIController from './controllers/api.controller';

require('./models/user.model');

export default class App {
  private static _instance: App;
  app: Express;

  public static get instance() {
    if (!App._instance) {
      App._instance = new App();
    }
    return App._instance;
  }

  private constructor() {
    this.app = express();
  }

  init = () => {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(compression());

    this.app.use('/api/v1', APIController.instance.router);

    this.app.listen(appConfig.port, () => {
      console.log(`Application started on port ${appConfig.port}!`);
    });
  };
}
