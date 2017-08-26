myapp.controller('HomeController', function($scope, $mdToast, MyService, $timeout, $location) {
	MyService.getDetails().then(function(data){
		var dat = JSON.parse(data.data);
		console.log(dat[0].title);
		$scope.data = dat[0].title;
	},function(err){
		console.log("error");
	});
});
