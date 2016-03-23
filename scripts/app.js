// Defino el módulo 'moviedb'
angular.module('moviedb', ['ngRoute', 'URL']).config(
	['$routeProvider', 'paths', function($routeProvider, paths){
		
		// Url configuration
		$routeProvider.when(paths.movies, {
			templateUrl: 'views/MoviesList.html'
		}).when(paths.movieDetail, {
			templateUrl: 'views/movieDetail.html'
		}).when(paths.series, {
			templateUrl: 'views/SeriesList.html'
		}).when(paths.people, {
			templateUrl: 'views/PeopleList.html'
		}).when(paths.home, {
			redirectTo: '/movies'
		}).otherwise({
			templateUrl: 'views/404.html'
		});
	}]	
);
