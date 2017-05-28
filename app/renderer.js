'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var PropertyController = function () {
  function PropertyController() {
    classCallCheck(this, PropertyController);

    console.log('ready');
  }

  createClass(PropertyController, [{
    key: 'addProperty',
    value: function addProperty(host, prop) {
      console.log(host.querySelector('new-property-box'));
    }
  }]);
  return PropertyController;
}();

var ElementController = function (_PropertyController) {
  inherits(ElementController, _PropertyController);

  function ElementController() {
    classCallCheck(this, ElementController);
    return possibleConstructorReturn(this, (ElementController.__proto__ || Object.getPrototypeOf(ElementController)).call(this));
  }

  return ElementController;
}(PropertyController);

var ProjectController = function (_ElementController) {
  inherits(ProjectController, _ElementController);

  function ProjectController() {
    classCallCheck(this, ProjectController);
    return possibleConstructorReturn(this, (ProjectController.__proto__ || Object.getPrototypeOf(ProjectController)).call(this));
  }

  return ProjectController;
}(ElementController);

var packages = [{ "name": "iron-elements", "title": "Iron Elements", "color": "#81c784", "symbol": "Fe", "tagline": "Polymer core elements" }, { "name": "paper-elements", "title": "Paper Elements", "color": "#ffffff", "symbol": "Md", "tagline": "Material design elements" }, { "name": "google-web-components", "title": "Google Web Components", "color": "#64B5F6", "symbol": "Go", "tagline": "Components for Google's APIs and services" }, { "name": "gold-elements", "color": "#ffb74d", "title": "Gold Elements", "symbol": "Au", "tagline": "Ecommerce Elements" }, { "name": "neon-elements", "title": "Neon Elements", "color": "#a7ffeb", "symbol": "Ne", "tagline": "Animation and Special Effects" }, { "name": "platinum-elements", "title": "Platinum Elements", "color": "#cfd8dc", "symbol": "Pt", "tagline": "Offline, push, and more" }, { "name": "molecules", "title": "Molecules", "color": "#ffab91", "symbol": "Mo", "tagline": "Wrappers for third-party libraries" }, { "name": "carbon-elements", "title": "Carbon Elements", "color": "#adadad", "symbol": "C", "tagline": "App-level elements" }];

var packages$1 = [{ "name": "iron-elements", "title": "Iron Elements", "color": "#81c784", "symbol": "Fe", "tagline": "Polymer core elements" }, { "name": "paper-elements", "title": "Paper Elements", "color": "#ffffff", "symbol": "Md", "tagline": "Material design elements" }, { "name": "google-web-components", "title": "Google Web Components", "color": "#64B5F6", "symbol": "Go", "tagline": "Components for Google's APIs and services" }, { "name": "gold-elements", "color": "#ffb74d", "title": "Gold Elements", "symbol": "Au", "tagline": "Ecommerce Elements" }, { "name": "neon-elements", "title": "Neon Elements", "color": "#a7ffeb", "symbol": "Ne", "tagline": "Animation and Special Effects" }, { "name": "platinum-elements", "title": "Platinum Elements", "color": "#cfd8dc", "symbol": "Pt", "tagline": "Offline, push, and more" }, { "name": "molecules", "title": "Molecules", "color": "#ffab91", "symbol": "Mo", "tagline": "Wrappers for third-party libraries" }, { "name": "carbon-elements", "title": "Carbon Elements", "color": "#adadad", "symbol": "C", "tagline": "App-level elements" }];

var SetController = function SetController() {
  classCallCheck(this, SetController);

  this.polymerPackages = packages;
  this.webPandaPackages = packages$1;
};

var Renderer = function Renderer() {
  classCallCheck(this, Renderer);

  this.project = new ProjectController();
  this.sets = new SetController();
};

window.webPanda = window.webPanda || {};
window.webPanda = new Renderer();

module.exports = Renderer;