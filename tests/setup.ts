import express from 'express';
import config from '../src/config/index';
import Logger from '../src/lib/logger';
import * as libs from '../src/lib';

const app: express.Application = express();




const server = app.listen(config.port, () => {
  Logger.info(`
    ⚡️-------------------------------------------------------⚡️
    ⚡️|  Running Node Server for testing                   |⚡️
    ⚡️|  Environment: ${process.env.NODE_ENV}                |⚡️
    ⚡️|  Version: ${process.env.VERSION}                      |⚡️
    ⚡️|  Author: ${process.env.AUTHOR}                        |⚡️
    ⚡️|  Test Server ready on port: ${config.port}            |⚡️
    ⚡️-------------------------------------------------------⚡️
  `);
});

// import tests
import './unit/products.test';



export { app, server };
