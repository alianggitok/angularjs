(function(require){
	
	require.config({
		baseUrl:'',
		paths: {
			//plugin
			'domReady':['lib/requirejs-2.2.0/domReady'],
			'text':['lib/requirejs-2.2.0/text'],
			//lib
			'angular':['lib/angular-1.2.29/angular'],
			'angularCookies':['lib/angular-1.2.29/angular-cookies.min'],
			'angularRoute':['lib/angular-1.2.29/angular-route.min'],
			'angularTranslate':['lib/angular-translate-2.9.0.1/angular-translate.min'],
			'jquery':['lib/jquery-1.12.1.min'],
			'semantic-ui':['lib/semantic-ui-2.1.8/semantic.min'],
			//app
			'boot':['script/boot'],
			'app':['script/app'],
			'ui':['script/ui'],
			'settings':['script/settings'],
			'router':['script/router'],
			'translater':['script/translater']
		},
		shim: {
			'jquery':{
				exports:'$'
			},
			'angular':{
				exports:'angular'
			},
			'angularCookies':{
				deps:['angular']
			},
			'angularTranslate':{
				deps:['angular']
			},
			'angularRoute':{
				deps:['angular']
			},
			'semantic-ui':{
				deps:['jquery']
			},
			'ui':{
				deps:['jquery','semantic-ui']
			}
		},
		deps:['app','ui'],
//		urlArgs: 'timestamp_'+(new Date()).getTime(),//not load cache
		waitSeconds:60//unit second
	});

}(require));
