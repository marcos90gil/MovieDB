// En el módulo moviedb, defino el controlador
angular.module("moviedb").controller("MenuController",
	["$scope", "$location", function($scope, $location){
		
		// Scope init
		$scope.model = {
			selectedItem: "movies"
		};

		// Scope methods
		$scope.getClassForItem = function(item){
			if ($scope.model.selectedItem == item) {
				return "active";
			} else {
				return "";
			}
		};

		// Scope event listeners
	    $scope.$on("$locationChangeSuccess", function(evt, currentRoute) {
	        $scope.model.selectedItem = $location.path();
	    });

	}]
);
