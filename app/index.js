'use strict';
const app = require('./scripts/app');
const squirelStartupHandler = require('./scripts/squirrel-startup-handler');

squirelStartupHandler.on('quit-app', () => {
  app.quit();
});
