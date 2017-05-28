import ProjectController from './controllers/project-controller';
import SetController from './controllers/set-controller';

export default class Renderer {
  constructor() {
    this.project = new ProjectController();
    this.sets = new SetController();
  }
}


window.webPanda = window.webPanda || {};
window.webPanda = new Renderer();
