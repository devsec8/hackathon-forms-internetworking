import winston from 'winston';
import morgan, { StreamOptions } from 'morgan';
import { appConfig } from '../configurations/app.config';

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const level = () => {
  const env = appConfig.env || 'development';
  const isDevelopment = env === 'development';
  return isDevelopment ? 'debug' : 'warn';
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};
winston.addColors(colors);

const transports = [
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
      winston.format.colorize({ all: true }),
      winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
    ),
  }),
  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error',
    format: winston.format.json(),
  }),
  new winston.transports.File({ filename: 'logs/all.log', format: winston.format.json() }),
];

export const logger = winston.createLogger({
  level: level(),
  levels,
  transports,
});

const stream: StreamOptions = {
  write: (message) => logger.http(message),
};

const skip = () => {
  const env = process.env.NODE_ENV || 'development';
  return env !== 'development';
};

export const morganMiddleware = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  { stream, skip },
);
