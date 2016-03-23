angular.module('moviedb').controller('MovieDetailController', 
	['$scope', '$routeParams', '$location', 'MovieService', 'paths', 
	function($scope, $routeParams, $location, MovieService, paths){

		// Scope init
		$scope.model = {};
		$scope.uiState = 'loading';
		
		// Controller init
		MovieService.getMovie($routeParams.id).then(
			// Movie found
			function(movie) {
				$scope.model = movie;
				$scope.uiState = 'ideal';
			},
			// Movie not found
			function(error) {
				// TODO: improve error management
				$location.url(paths.notFound);
			}
		);


}]);