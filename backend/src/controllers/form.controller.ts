import { NextFunction, Request, Response, Router } from 'express';

export default class FormController {
  private static _instance: FormController;
  router = Router();

  public static get instance() {
    if (!FormController._instance) {
      FormController._instance = new FormController();
    }
    return FormController._instance;
  }

  constructor() {
    this.router.get('/', this.read);
  }

  read = (req: Request, res: Response, _next: NextFunction) => {
    res.send('read');
  };

  write = (req: Request, res: Response, _next: NextFunction) => {
    res.send('write');
  };
}
