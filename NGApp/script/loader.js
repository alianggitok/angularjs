(function(reqjs,require){
	var timestamp=(new Date()).getTime();
	
	reqjs.config({
		baseUrl:'',
		paths: {
			//plugin
			'domReady':['lib/requirejs-2.2.0/domReady'],
			//lib
			'angular':['lib/angular-1.2.29/angular'],
			'angularRoute':['lib/angular-1.2.29/angular-route'],
			'jquery':['lib/jquery-1.12.1.min'],
			'semantic-ui':['lib/semantic-ui-2.1.8/semantic.min'],
			//app
			'app':['script/app'],
			'settings':['script/settings'],
			'router':['script/router']
		},
		shim: {
			'jquery':{
				exports:'$',
			},
			'angular':{
				exports:'angular'
			},
			'angularRoute':{
				deps:['angular']
			},
			'semantic-ui':{
				deps:['jquery']
			}
		},
		deps:['app','semantic-ui'],
//		urlArgs: 'timestamp_'+timestamp,//not load cache
		waitSeconds:60//unit second
	});

//	reqjs.onError=function(err){
//		console.error('==> Requirejs errors:', err.requireType, err);
//	};

}(requirejs,require));
