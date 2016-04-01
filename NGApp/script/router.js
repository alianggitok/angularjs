define(['require','boot','jquery'],function(require,boot,$){
	var app=boot.app,
		routes=boot.settings.routes;
	
	//路由配置
	function route($routeProvider,$locationProvider){
		var resolve = {
				controller: function (controllerFile, controllerName) {
					return function ($q, $rootScope) {
						var deferred = $q.defer();
						require([controllerFile], function (controller) {
							app.controller(controllerName, controller);
							$rootScope.$apply(deferred.resolve);
							console.log(controllerName+' registed!');
						});
						return deferred.promise;
					};
				}
			};

		for(var i=0,len=routes.length;i<len;i+=1){
			$routeProvider.when(routes[i].url,{
				templateUrl:routes[i].templateUrl,
				controller:routes[i].controllerName,
				id:routes[i].id,//自定义的属性
				name:routes[i].name,//自定义的属性
				resolve:{
					controller:resolve.controller(routes[i].controllerFile,routes[i].controllerName)
				}
			});
		}

		//配置默认页、404、其他
		$routeProvider.when('/',{
			templateUrl:routes[0].templateUrl,
			controller:routes[0].controllerName,
			id:routes[0].id,//自定义的属性
			name:routes[0].name,
			resolve:{
				controller:resolve.controller(routes[0].controllerFile,routes[0].controllerName)
			}
		}).otherwise({
			name:'404',
			templateUrl:'/module/404.html'
		});

		//是否以 pushState 方式来进行路由
		$locationProvider.html5Mode(false);
	}
	
	//路由事件
	function events(rootScope){
		rootScope.$on('$routeChangeStart',function(event,next,current){
			console.info('module '+next.name+' is loading...');
//			$('#content').addClass('loading');
			$('.menu .item').siblings().removeClass('active');
			$('.menu .item[data-menu-id='+next.id+']').addClass('active');
		});
		rootScope.$on('$routeChangeSuccess',function(event,current,previous){
			console.log('module '+current.name+' load success!');
		});
//		rootScope.$on('routeChangeError',function(){
//			console.log('module load failed!');
//		});
		rootScope.$on('$viewContentLoaded',function(event){
			console.log('ng-view loaded!');
		});
	}

	return {
		route:route,
		events:events
	};

	
});
