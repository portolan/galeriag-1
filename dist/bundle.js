(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var component={bindings:{title:"@",album:"<"},controller:"GaleriaGController",template:'\n  <h1 class="page-header" ng-bind="$ctrl.title"></h1>\n  <div class="row">\n    <div class="col-xs-6 col-md-3" ng-repeat="photo in $ctrl.album">\n      <a href="#" class="thumbnail">\n        <img class="img-responsive" ng-src="{{photo.src}}" alt="...">\n      </a>\n    </div>\n  </div>\n  '};exports.default=component;

},{}],2:[function(require,module,exports){
"use strict";function GaleriaGController(){var ctrl=this;ctrl.addd=function(){ctrl.ref.push("4")},ctrl.$postLink=function(){console.log(ctrl.ref)},ctrl.$onInit=function(){}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=GaleriaGController;

},{}],3:[function(require,module,exports){
"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _controller=require("./controller.js"),_controller2=_interopRequireDefault(_controller),_component=require("./component.js"),_component2=_interopRequireDefault(_component);exports.default=angular.module("galeriag",[]).controller("GaleriaGController",_controller2.default).component("galeria",_component2.default);

},{"./component.js":1,"./controller.js":2}]},{},[3]);
