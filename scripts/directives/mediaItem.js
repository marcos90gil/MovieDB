angular.module('moviedb').directive('mediaItem', function() {
	return {
		restrict: 'AE',
		templateUrl: 'views/MediaItem.html',
		scope: {
			model: '=item'
		}
	};
});