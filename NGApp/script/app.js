define(['require','angular','angularRoute','config','router'],
function(require,ng,ngRoute,config,router){

	//手动启动 ngapp
	require(['domReady!'], function (doc) {
		ng.bootstrap(doc,[config.appName]);
	});

	//声明app模块
	var app=ng.module(config.appName,['ngRoute']);
	
	app.config(function($routeProvider,$locationProvider){
		//配置路由
		router.route($routeProvider,$locationProvider);
	});

	app.run(function($rootScope){
		//路由事件
		router.events($rootScope)
	});

	app.controller('mainController',function($scope){
		$scope.words='Hello world!';
	});
	
	return app;
});
