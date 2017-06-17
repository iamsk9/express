angular.module('orgLoginController', []).controller('MainController', function($scope, $mdToast, MyService) {
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
