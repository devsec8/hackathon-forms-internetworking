export const appConfig = {
  port: +process.env.port || 3000,
};

export const dbConfig = {
  host: process.env.DB_HOST,
  db: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
};
