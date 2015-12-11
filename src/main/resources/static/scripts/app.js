angular.module('aplikasiProject', ['ngRoute'])
	.config(function($routeProvider){
		$routeProvider
			.when('/',{
				'templateUrl': 'views/home.html',
				'controller': 'projectController'
			});
	});
