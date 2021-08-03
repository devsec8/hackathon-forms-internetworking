import express, { Express } from 'express';
import compression from 'compression';
import { appConfig } from './configurations/app.config';
import APIController from './controllers/api.controller';
import { logger, morganMiddleware } from './utils/logger.util';

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
    this.app.use(morganMiddleware);

    this.app.use('/api/v1', APIController.instance.router);

    this.app.listen(appConfig.port, () => {
      logger.info(`Application started on port ${appConfig.port}!`);
    });
  };
}
