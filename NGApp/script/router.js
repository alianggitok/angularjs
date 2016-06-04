define(['require','boot','ui'],function(require,boot,ui){
	var app=boot.app;
	
	//路由配置
	function route(stateProvider,urlRouterProvider,locationProvider){
		//是否以 pushState 方式来进行路由
		locationProvider.html5Mode(false);

		var resolve = {
			controller: function (controllerFile, controllerName,transPartName) {
				if(!controllerFile){
					return;
				}
				return ['$q','$rootScope','$state','$translate','$translatePartialLoader',function ($q, $rootScope,$state,$translate,$translatePartialLoader) {
					var deferred = $q.defer();
					require([controllerFile], function (controller) {
						app.controller(controllerName, controller);
						$rootScope.$apply(deferred.resolve);
						app.debug.log('[ROUTER] '+controllerName+' registed!');
						
						$translatePartialLoader.addPart(transPartName);
						
						ui.naviStatus($state.current.name);
						app.debug.log('[UI] navigation state change');
					});
					return deferred.promise;
				}];
			}
		};
		
		//routes
		stateProvider.state('index',{
			url:'/index',
			views:{
				'header':{
					templateUrl:'/view/partial/header/view.html',
					controller:'headerController',
					resolve:{
						controller:resolve.controller('/view/partial/header/controller.js','headerController','partial/header')
					}
				},
				'body':{
					templateUrl:'/view/partial/body/view.html'
				},
				'footer':{
					templateUrl:'/view/partial/footer/view.html'
				}
			}
		}).state('index.one',{
			url:'/one',
			views:{
				'content@index':{
					templateUrl:'/view/one/view.html',
					controller:'oneController',
					resolve:{
						controller:resolve.controller('/view/one/controller.js','oneController','one')
					}
				}
			}
		}).state('index.two',{
			url:'/two',
			views:{
				'content@index':{
					templateUrl:'/view/two/view.html',
					controller:'twoController',
					resolve:{
						controller:resolve.controller('/view/two/controller.js','twoController','two')
					}
				}
			}
		});
		

		//其他跳转
		urlRouterProvider.otherwise('/index/one');


	}
	
	//路由事件
	function events(rootScope,loader){
		rootScope.$on('$stateChangeStart',function(event,toState,toParams,fromState,fromParams){
			loader.show();
			app.debug.info('[ROUTER] route to "'+toState.name+'"...');
		});
		rootScope.$on('$stateChangeSuccess',function(event,toState,toParams,fromState,fromParams){
			app.debug.log('[ROUTER] route to "'+toState.name+'" success!');
		});
		rootScope.$on('$stateChangeError',function(){
			app.debug.error('route failed!');
		});
		rootScope.$on('$viewContentLoaded',function(event,viewName){
			loader.hide();
			app.debug.log('[ROUTER] view "'+viewName+'" loaded!');
		});
	}

	return {
		route:route,
		events:events
	};

	
});
