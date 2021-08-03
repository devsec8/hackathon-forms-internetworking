import { NextFunction, Router } from 'express';

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

  const read = (req: Request, res: Response, next: NextFunction) => {
    res.send()
  }
}
