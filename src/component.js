let component = {
  bindings: {
    title: '@',
    album: '<'
  },
  controller: 'GaleriaGController',
  template: `
  <h1 class="page-header" ng-bind="$ctrl.title"></h1>
  <div class="row">
    <div class="col-xs-6 col-md-3" ng-repeat="photo in $ctrl.album">
      <a href="#" class="thumbnail">
        <img class="img-responsive" ng-src="{{photo.src}}" alt="...">
      </a>
    </div>
  </div>
  `
};

export default component