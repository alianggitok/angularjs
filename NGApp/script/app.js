define(['require','angular','angularRoute','settings','router'],
function(require,ng,ngRoute,settings,router){

	//手动启动 ngapp
	require(['domReady!'], function (doc) {
		console.warn('>>  angular booting...');
		ng.bootstrap(doc,[settings.info.appName]);
	});

	//声明app模块
	var app=ng.module(settings.info.appName,['ngRoute']);
	
	app.config(function($routeProvider,$locationProvider,$controllerProvider,$compileProvider, $filterProvider, $provide){
		//为ng支持amd而配置
		app.controller = $controllerProvider.register;
		app.directive = $compileProvider.directive;
		app.filter = $filterProvider.register;
		app.factory = $provide.factory;
		app.service = $provide.service;
		app.provider = $provide.provider;
		app.value = $provide.value;
		app.constant = $provide.constant;
		app.decorator = $provide.decorator;
		//路由配置启动
		router.route(app,$routeProvider,$locationProvider);
	});

	app.run(function($rootScope){
		$rootScope.appInfo=settings.info;
		$rootScope.menus=settings.menus;
		//路由事件
		router.events($rootScope);
	});

	return app;
});
