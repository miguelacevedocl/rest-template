import express, { Application } from 'express';
import actuator from 'express-actuator';
import path from 'path';
import bodyParser from 'body-parser';
import http from 'http';
import os from 'os';
import cookieParser from 'cookie-parser';
import logger from './logger';
import morgan from 'morgan';
import installValidator from './swagger';


const app = express();
const exit = process.exit;

export default class server {
  private routes: (app: Application) => void;
  constructor() {
    const root = path.normalize(__dirname + '/../..');
    app.set('appPath', root + 'client');
    app.use(bodyParser.json({ limit: process.env.REQUEST_LIMIT || '100kb' }));
    app.use(bodyParser.urlencoded({ extended: true, limit: process.env.REQUEST_LIMIT || '100kb' }));
    app.use(bodyParser.text({ limit: process.env.REQUEST_LIMIT || '100kb' }));
    app.use(cookieParser(process.env.SESSION_SECRET));
    app.use(actuator());
    app.use(express.static(`${root}/public`));
    
    if (process.env.NODE_ENV != 'test') {
      app.use(morgan('combined'));
    }
  }

  router(routes: (app: Application) => void): server {
    this.routes = routes;
    return this;
  }
  
  listen(port: number): Application {
    const welcome = (p: number) => () =>
      logger.info(
        `up and running in ${process.env.NODE_ENV ||
        'development'} @: ${os.hostname()} on port: ${p}}`
      );

    installValidator(app, this.routes).then(() => {
      http.createServer(app).listen(port, welcome(port));
    }).catch(e => {
      logger.error(e);
      exit(1)
    });

    return app;
  }
}