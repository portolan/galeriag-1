function GaleriaGController() {
  let ctrl = this;

  ctrl.addd = function() {
    ctrl.ref.push('4')
  }
  ctrl.$postLink = () => {
    console.log(ctrl.ref)
  }
  ctrl.$onInit = () => {
  }
}

export default GaleriaGController