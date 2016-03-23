angular.module('moviedb').service('MovieService',
	['$http', '$q', function($http, $q) {
	
			this.getMovies = function() {

				// deferred object creation
				var deferred = $q.defer();

				// async work
				$http.get('api/movies/')
					.then(
						// ok request
						function(response) {
							// promise resolve
							deferred.resolve(response.data);
						},
						// KO request
						function(response) {
							// promise reject
							deferred.reject(response.data);
						}
					);

				// return promise
				return deferred.promise;

			};

	}]
);