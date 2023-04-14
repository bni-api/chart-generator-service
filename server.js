import path from 'path';
import { appHost, appPort, appLog } from './config/common.config.js';


import Server from 'fastify';
const app = new Server({ logger: appLog });

// register cors plugin
import cors from '@fastify/cors';
app.register(cors);

// autoload all custom plugins
import autoLoad from '@fastify/autoload';
app.register(autoLoad, {
  dir: path.join('.', 'plugins')
});

// autoload all routes
app.register(autoLoad, {
  dir: path.join('.', 'routes')
});

app.listen({ host: appHost, port: appPort }, (err, _) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
