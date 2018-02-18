describe('geoCtrl', function() {

  // Load ui.router and our app
  beforeEach(angular.mock.module('ui.router'));
  beforeEach(angular.mock.module('GeoBlinkApp'));

  var $controller, scope;

  // Inject the $controller service to create instances of the controller
  beforeEach(inject(function(_$controller_, $rootScope) {
    $controller = _$controller_;
    scope = $rootScope.$new();
    console.log('scope1', scope);
    $controller = $controller('geoCtrl', {
      $scope:scope
    });
  }));

  // Verify our controller exists and scope is defined
  describe('General check', function(){
    it('$scope should be defined', function() {
      expect(scope).toBeDefined();
    });
    it('Controller', function() {
      expect($controller).toBeDefined();
    });
  });

});