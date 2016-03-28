angular.module('moviedb').controller('SerieDetailController', 
	['$scope', '$routeParams', '$location', 'APIClient', 'paths', 
	function($scope, $routeParams, $location, APIClient, paths){

		// Scope init
		$scope.model = {};
		$scope.uiState = 'loading';
		
		// Controller init
		$scope.$emit('ChangeTitle', 'Loading...');
		APIClient.getSerie($routeParams.id).then(
			// Serie found
			function(serie) {
				$scope.model = serie;
				$scope.uiState = 'ideal';
				$scope.$emit('ChangeTitle', $scope.model.title);
			},
			// Movie not found
			function(error) {
				// TODO: improve error management
				$location.url(paths.notFound);
			}
		);

}]);
