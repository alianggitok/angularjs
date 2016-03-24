define(['config','angular'],function(config,ng){

	var appName=config.appName,
		app=ng.module(appName,[]),
		routes=config.routes;
	
	require(['domReady!'], function (doc) {
		var appElem=ng.element(doc).find('[ng-app:'+config.appName+']');
		ng.bootstrap(appElem,[config.appName]);
	});
	
//	app.config(function($routeProvider,$locationProvider){
//
//		for(var i=0,len=routes.length;i<len;i+=1){
//			$routeProvider.when(routes[i].url,{
//				templateUrl:routes[i].tmplUrl,
//				controller:routes[i].ngController,
//				menuItemName:routes[i].name//自定义的属性
//			});
//		}
//
//		$routeProvider.when('/',{
//			templateUrl:routes[0].tmplUrl,
//			controller:routes[0].ngController,
//			menuItemName:routes[0].name
//		}).otherwise({
//			templateUrl:'tmpl/404.html'
//		});
//
//		//是否以 pushState 方式来进行路由
//		$locationProvider.html5Mode(false);
//
//	});
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
