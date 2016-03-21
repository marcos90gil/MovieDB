// En el módulo moviedb, defino el controlador
angular.module("moviedb").controller("MenuController",
	["$scope", function($scope){
		
		// Scope init
		$scope.model = {
			selectedItem: "movies"
		};

		// Scope methods
		$scope.setSelectedItem = function(item){
			$scope.model.selectedItem = item;
		};
		$scope.getClassForItem = function(item){
			if ($scope.model.selectedItem == item) {
				return "active";
			} else {
				return "";
			}
		};

		// Scope Watchers
		$scope.$watch("model.selectedItem", function(newValue, oldValue){
			// Emitimos un evento para que se entere AppController 
			// de que ha cambiado la opción del menú seleccionado
			$scope.$emit("OnMenuChange", newValue);
		});

	}]
);
