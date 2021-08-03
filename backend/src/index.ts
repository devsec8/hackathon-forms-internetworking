import { config } from 'dotenv';
import App from './app';

config();

(async () => {
  App.instance.init();
})();
