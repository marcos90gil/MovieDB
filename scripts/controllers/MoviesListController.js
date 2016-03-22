angular.module("moviedb").controller("MoviesListController", 
	["$scope", "$log", "MovieService", function($scope, $log, MovieService){
		
		// Scope model init
		$scope.model = [];
		$scope.uiState = 'loading';

        // Controller start
        MovieService.getMovies().then(
        	//resolved promise
        	function(response) {        	
        		$scope.model = response.data;
        		if ($scope.model.length === 0) {
        			$scope.uiState = "blank";
        		} else {
        			$scope.uiState = "ideal";
        		}
        	},
        	//rejected promise
        	function(response) {
        		$scope.uiState = 'error';
        	}
    	);

	}]

);