var homepath = "/../templates";

var myapp = angular.module('myapp', ['ngMaterial', 'ngRoute', 'restangular', 'ngMessages',
	'md.data.table', 'mdPickers']);

  myapp.config(function($mdThemingProvider, $locationProvider, RestangularProvider, $routeProvider){
    RestangularProvider.setBaseUrl('/api/');
		RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
        if(response.status == 403) {
            window.location.reload();
            return;
        }
        return data;
    });
  	$routeProvider
			.when('/', {
					templateUrl: homepath + '/_home.html',
					controller: 'HomeController'
			})
			.when('/researcherLogin', {
					templateUrl: homepath + '/_researcherLogin.html',
					controller: 'ResearcherLoginController'
			})
  });

	myapp.run(function($rootScope, $mdToast, $location, MyService, $mdSidenav,$mdDialog){

	});
