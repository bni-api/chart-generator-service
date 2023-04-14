import dotenv from 'dotenv';
dotenv.config();

export const appHost = process.env.APP_HOST;
export const appPort = process.env.APP_PORT;
export const appLog = process.env.APP_LOG;