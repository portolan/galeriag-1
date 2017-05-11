import controller from './controller.js'
import component from './component.js'

export default angular
  .module('galeriag', [])
  .controller('GaleriaGController', controller)
  .component('galeria', component);