define(['config'],function(config){
	var routes=config.routes;
	
	function init($routeProvider,$locationProvider){
		for(var i=0,len=routes.length;i<len;i+=1){
			$routeProvider.when(routes[i].url,{
				templateUrl:routes[i].tmplUrl,
				controller:routes[i].ngController,
				menuItemName:routes[i].name//自定义的属性
			});
		}

		$routeProvider.when('/',{
			templateUrl:routes[0].tmplUrl,
			controller:routes[0].ngController,
			menuItemName:routes[0].name
		}).otherwise({
			templateUrl:'tmpl/404.html'
		});

		//是否以 pushState 方式来进行路由
		$locationProvider.html5Mode(false);
	}
	
	return {
		init:init
	};

	
});
