'use strict';
import {packages as polymerPackages} from './../catalog.json';
import {packages as webPandaPackages} from './../wp-catalog.json';

export default class SetController {
  constructor() {
    this.polymerPackages = polymerPackages;
    this.webPandaPackages = webPandaPackages;
  }
}
