'use strict';
const {app} = require('electron');
const browserWindow = require('./browser-window');

class App {
  constructor() {
    app.on('ready', this.ready);
  }

  ready() {
    app.setName('Jouley');
    browserWindow.createWindow('main', 'index');
  }

  quit() {
    app.quit();
  }
}

module.exports = new App();
