myapp.factory('MyService', function(Restangular, $q){
	return {
		addClient : function(clientDetails) {
			var addClientDefer = $q.defer();
			console.log(clientDetails);
			var payload = {
				name : clientDetails.name,
				password : clientDetails.password,
				email : clientDetails.email
			}
			Restangular.one('/client').post('', payload).then(function(data) {
				if(data.returnCode == "SUCCESS") {
					addClientDefer.resolve();
				} else {
					addClientDefer.reject({errorCode : data.errorCode});
				}
			}, function(err) {
				addClientDefer.reject(err);
			});
			return addClientDefer.promise;
		},
		getClientsService : function(payload) {
			return Restangular.one('/clients').get(payload);
		},
		getDetails : function(){
			var dashboardDefer = $q.defer();
			Restangular.one('/getDetails').get().then(function(data) {
				if(data.returnCode == "SUCCESS") {
					dashboardDefer.resolve(data);
				} else {
					dashboardDefer.reject();
				}
			}, function(err) {
				dashboardDefer.reject(err);
			});
			return dashboardDefer.promise;
		}
  }
});
