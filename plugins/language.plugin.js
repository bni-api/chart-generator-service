import fp from 'fastify-plugin';
import language from '../config/language.config.js';

function plugin(app, options, done) {
  // init language
  app.decorate('lang', (string, lang) => {
    if (!lang) lang = 'en-US';
    return language[lang][string];
  });

  done();
}

export default fp(plugin);