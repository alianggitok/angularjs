define(['require','boot','ui'],function(require,boot,ui){
	var settings=boot.settings,
		app=boot.app,
		rootPath=settings.path.root,
		i18nPath=settings.path.i18n,
		langCookieKey=settings.lang.cookieKey,
		asyncLoaderServiceName='translateAsyncLoader',
//		saveTransServiceName='translateStorage',
		langs=settings.lang.langs,
		langFilePrefix=settings.lang.filePrefix,
		langFileSuffix=settings.lang.fileSuffix,
		langFileURL=function(i){
			return rootPath+i18nPath+'/'+langFilePrefix+langs[i]+langFileSuffix;
		};

	//async loader service
	app.factory(asyncLoaderServiceName,['$http','$q',function($http,$q){
		return function(options){
			var deferred=$q.defer();
			for(var i=0,n=langs.length;i<n;i++){
				if(options.key===langs[i]){
					require([langFileURL(i)],function(trans){
						deferred.resolve(trans);
						console.log('i18n file "'+langFileURL(i)+'" loaded!');
					});
				}
			}
			return deferred.promise;
		};
	}]);

	//i18n配置
	function config(translateProvider){
		translateProvider.useLoader(asyncLoaderServiceName);//注入translateAsyncLoader服务
		translateProvider.useSanitizeValueStrategy('escaped');//字符转义策略
//		translateProvider.preferredLanguage(settings.lang.default);//default
//		translateProvider.fallbackLanguage(['en']);//后备，其中的语言会依次预先加载，当首选不可用时，这里的顶上
		translateProvider.determinePreferredLanguage();//根据浏览器语言自动判断当前语言
	}

	//初始化
	function init(translate,cookieStore){
		var translateInCookies=cookieStore.get(langCookieKey);
		translate.use(translateInCookies);
	}

	//事件
	function events(scope,rootScope,translate,cookieStore){
		scope.changeLanguage=function(lang){
			console.info('switching the language to "'+lang+'"...');
			translate.use(lang);
		};

		rootScope.$on('$translateChangeSuccess',function(){
			var lang=translate.use();
			ui.translateStatus(lang);
			console.log('language "'+lang+'" switched!');
			cookieStore.put(langCookieKey,lang);
			console.log('put in cookies:',langCookieKey,lang);
		});

	}

	return {
		config:config,
		init:init,
		events:events
	};


});
