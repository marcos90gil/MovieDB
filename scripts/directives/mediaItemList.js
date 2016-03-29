angular.module('moviedb').directive('mediaItemList', function() {
	return {
		restrict: 'AE',
		scope: {
			model: '=items',
			getDetailUrl: '&',
			dateMode: '@'
		},
		templateUrl: 'views/mediaItemList.html'
	};
});
