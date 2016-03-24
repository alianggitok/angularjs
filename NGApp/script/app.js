define(['require','angular','angularRoute','config','router'],function(require,ng,ngRoute,config,router){

	require(['domReady!'], function (doc) {
		ng.bootstrap(doc,[config.appName]);
	});

	var app=ng.module(config.appName,['ngRoute']);
	
	app.config(function($routeProvider,$locationProvider){

		router.init($routeProvider,$locationProvider);

	});

	app.controller('mainController',function($scope){
		$scope.words='Hello world!';
	});
//	
//	app.run(function($rootScope){
//
//		$rootScope.$on('$routeChangeStart',function(event,next,current){
////			$('#content').addClass('loading');
////			$('.menu .item').siblings().removeClass('active');
////			$('.menu .item[data-name='+next.menuItemName+']').addClass('active');
////			console.log('>> '+next.templateUrl+' is loading...');
//		});
//		$rootScope.$on('$routeChangeSuccess',function(event,current,previous){
////			$('#content').removeClass('loading');
//			console.log('   '+current.loadedTemplateUrl+' loaded!');
//		});
//
//	});
	
	return app;
});
