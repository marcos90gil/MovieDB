angular.module("moviedb").controller("MoviesListController", 
	["$scope", "$log", "MovieService", function($scope, $log, MovieService){
		
		// Scope model init
		$scope.uiState = 'loading';
		$scope.model = [];

        // Controller start
        MovieService.getMovies().then(
        	//resolved promise
        	function(data) {        	
        		$scope.model = data;
        		if ($scope.model.length === 0) {
        			$scope.uiState = "blank";
        		} else {
        			$scope.uiState = "ideal";
        		}
        	},
        	//rejected promise
        	function(data) {
        		$scope.uiState = 'error';
        	}
    	);

	}]

);