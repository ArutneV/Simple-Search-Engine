var myApp = angular.module('myApp', [
  'ngRoute',
  'artistControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'html-templates/list.html',
    controller: 'ListController'
  }).
  when('/details/:itemId', {
    templateUrl: 'html-templates/details.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);
