define(['config'],function(config){
	var routes=config.routes;
	
	//路由配置
	function route($routeProvider,$locationProvider){
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
	
	//路由事件
	function events($scope){
		$scope.$on('$routeChangeStart',function(event,next,current){
//			$('#content').addClass('loading');
//			$('.menu .item').siblings().removeClass('active');
//			$('.menu .item[data-name='+next.menuItemName+']').addClass('active');
			console.log('>> '+next.templateUrl+' is loading...');
		});
		$scope.$on('$routeChangeSuccess',function(event,current,previous){
//			$('#content').removeClass('loading');
			console.log('   '+current.loadedTemplateUrl+' loaded!');
		});
	}

	return {
		route:route,
		events:events
	};

	
});
