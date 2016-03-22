angular.module("moviedb").controller("MoviesListController", 
	["$scope", "MovieService", function($scope, MovieService){
		
		// Scope model init
		$scope.uiState = 'blank';
		$scope.model = [];

        // Scope watchers
        $scope.$watch("model", function(newValue, oldValue){
        	if (newValue.length === 0) {
        		$scope.uiState = "blank";
        	} else {
        		$scope.uiState = "ideal";
        	}
        });

        // Controller start
        $scope.model = MovieService.getMovies();

	}]

);