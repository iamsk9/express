myapp.controller('HomeController', function($scope, $mdToast, MyService, $timeout, $location) {
	$scope.goToResearcherLogin = function() {
		$location.path('/researcherLogin');
	}

	$scope.goToOrgLogin = function() {
		$location.path('/orgLogin');
	}

	$scope.goToResearcherRegistration = function() {
		$location.path('/researcherRegistration');
	}
});
