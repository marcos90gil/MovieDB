angular.module('moviedb').controller('SeriesListController',
	['$scope', '$log', 'APIClient', 'URL', 'paths',
    function($scope, $log, APIClient, URL, paths){
		
		// Scope model init
		$scope.model = [];
        $scope.uiState = 'loading';
        $scope.url = URL.resolve;

        // Scope methods
        $scope.getSerieDetailURL = function(serie) {
            return URL.resolve(paths.serieDetail, { id: serie.id });
        };

        // Controller start
        APIClient.getSeries().then(
        	//resolved promise
        	function(data) {        	
        		$scope.model = data;
        		if ($scope.model.length === 0) {
        			$scope.uiState = 'blank';
        		} else {
        			$scope.uiState = 'ideal';
        		}
        	},
        	//rejected promise
        	function() {
        		$scope.uiState = 'error';
        	}
    	);

	}]
);