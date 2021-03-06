import { Router } from 'express';

export default class APIController {
  private static _instance: APIController;
  router = Router();

  public static get instance() {
    if (!APIController._instance) {
      APIController._instance = new APIController();
    }
    return APIController._instance;
  }

  constructor() {
    this.router.get('/', (req, res, _next) => {
      res.send('hello world!');
    });
  }
}
