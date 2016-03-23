angular.module('moviedb').service('MovieService',
	['$q', '$timeout', function($q, $timeout) {
		
		var movies = [			
	            {
	                "title": "Deadpool",
	                "poster_url": "https://image.tmdb.org/t/p/w185/inVq3FRqcYIRl2la8iZikYYxFNR.jpg",
	                "rating": 7.2,
	                "release_date": "2016-02-19"
	            },
	            {
	                "title": "The Hunger Games: Mockingjay - Part 2",
	                "poster_url": "https://image.tmdb.org/t/p/w185/nN4cEJMHJHbJBsp3vvvhtNWLGqg.jpg",
	                "rating": 6.8,
	                "release_date": "2015-11-27"
	            },
	            {
	                "title": "Batman v Superman: Dawn of Justice",
	                "poster_url": "https://image.tmdb.org/t/p/w185/6bCplVkhowCjTHXWv49UjRPn0eK.jpg",
	                "rating": 5.1,
	                "release_date": "2016-03-23"
	            },
	            {
	                "title": "Mad Max: Fury Road",
	                "poster_url": "https://image.tmdb.org/t/p/w185/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
	                "rating": 7.4,
	                "release_date": "2015-05-15"
	            },
	            {
	                "title": "Zootopia",
	                "poster_url": "https://image.tmdb.org/t/p/w185/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg",
	                "rating": 7.4,
	                "release_date": "2016-02-12"
	            }
        	];

		this.getMovies = function() {

			// object deferred creation
			var deferred = $q.defer();
			
			// async
			$timeout(function() {
				if (Math.round(Math.random() * 10) % 2 === 0) {
					// promise resolve
					deferred.resolve(movies);
				} else {
					// promise reject
					deferred.reject({ error: "Forbidden" });
				}
			}, 500);

			// return of the deferred object in for of promise
			return deferred.promise;

		};

	}]
);