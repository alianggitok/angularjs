require([
	'angular',
	'angular-cookies',
	'angular-translate',
	'angular-ui-router',
	'boot',
	'router',
	'translater'
],function(
	ng,
	ngCookies,
	ngTrans,
	ngUIRouter,
	boot,
	router,
	translater
){
	var app=boot.app,
		settings=boot.settings;
	
	app.config([
		'$stateProvider',
		'$urlRouterProvider',
		'$controllerProvider',
		'$compileProvider',
		'$filterProvider',
		'$provide',
		'$translateProvider',
		function(
			$stateProvider,
			$urlRouterProvider,
			$controllerProvider,
			$compileProvider,
			$filterProvider,
			$provide,
			$translateProvider
		){
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
			router.route($stateProvider,$urlRouterProvider);
			//i18n
			translater.config($translateProvider);

		}
	]);

	app.run(['$rootScope',function($rootScope){

	}]);

	//主控制器
	app.controller('mainController',[
		'$scope','$rootScope','$cookieStore','$translate',
		function($scope,$rootScope,$cookieStore,$translate){

			$scope.appInfo=settings.info;
			$scope.navi=settings.navi;

			//路由事件
			router.events($rootScope);
			//i18n
			translater.init($translate,$cookieStore);
			translater.events($scope,$rootScope,$translate,$cookieStore);

		}
	]);

	return app;
});
