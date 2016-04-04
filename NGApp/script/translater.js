define(['require','boot','ui'],function(require,boot,ui){
	var settings=boot.settings,
		app=boot.app,
		i18nPath=settings.path.i18n,
		asyncLoaderServiceName='translateAsyncLoader',
		saveTransServiceName='translateStorage',
		langs=settings.lang.langs,
		langFilePrefix=settings.lang.filePrefix,
		langFileSuffix=settings.lang.fileSuffix,
		langFileURL=function(i){
			return i18nPath+'/'+langFilePrefix+langs[i]+langFileSuffix;
		};

	//async loader service
	app.factory(asyncLoaderServiceName,function($http,$q){
		function load(path,deferred){
			$http.get(path).success(function(res){
				deferred.resolve(res);
				console.log('i18n file "'+path+'" loaded!');
			});
		}
		return function(options){
			var deferred=$q.defer();
			for(var i=0,n=langs.length;i<n;i++){
				if(options.key===langs[i]){
					load(langFileURL(i),deferred);
				}
			}
			return deferred.promise;
		};
	});

	//current language storage
	app.factory(saveTransServiceName,function($cookieStore){
		return {
			put:function(name,value){
				console.log('put in cookies:',name,value);
				$cookieStore.put(name,value);
			},
			get:function(name){
				$cookieStore.get(name);
			}
		};
	});

	//i18n配置
	function config(translateProvider){
		translateProvider.useLoader(asyncLoaderServiceName);//注入translateAsyncLoader服务
		translateProvider.useStorage(saveTransServiceName);
		translateProvider.useSanitizeValueStrategy('escaped');//字符转义策略
//		translateProvider.preferredLanguage(settings.lang.default);//default
//		translateProvider.fallbackLanguage(['en']);//后备，其中的语言会依次预先加载，当首选不可用时，这里的顶上
		translateProvider.determinePreferredLanguage();//根据浏览器语言自动判断当前语言
	}

	//初始化
	function init(translate,cookieStore){
		var translateInCookies=cookieStore.get('NG_TRANSLATE_LANG_KEY');
		translate.use(translateInCookies);
	}

	//事件
	function events(scope,rootScope,translate){
		scope.changeLanguage=function(lang){
			console.info('switching the language to "'+lang+'"...');
			translate.use(lang);
		};

		rootScope.$on('$translateChangeSuccess',function(){
			var lang=translate.use();
			ui.translateStatus(lang);
			console.log('language "'+lang+'" switched!');
		});

	}

	return {
		config:config,
		init:init,
		events:events
	};


});
