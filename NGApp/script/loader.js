(function(require){
	
	require.config({
		baseUrl:'',
		paths: {
			//plugin
			'domReady':['lib/requirejs-2.2.0/domReady'],
			'text':['lib/requirejs-2.2.0/text'],
			//lib
			'angular':['lib/angular-1.2.29/angular'],
			'angular-cookies':['lib/angular-1.2.29/angular-cookies.min'],
			'angular-translate':['lib/angular-translate-2.9.0.1/angular-translate.min'],
			'angular-ui-router':['lib/angular-ui-router-0.2.18/angular-ui-router.min'],
			'angular-ui-bootstrap':['lib/angular-ui-bootstrap-0.12.0/ui-bootstrap-tpls-0.12.0.min'],
			'jquery':['lib/jquery-1.12.4/jquery-1.12.4.min'],
			'bootstrap':['lib/bootstrap-3.3.5/js/bootstrap.min'],
			'respond':['lib/respond-1.4.2/respond.min'],
			//app
			'settings':['settings'],
			'boot':['script/boot'],
			'app':['script/app'],
			'ui':['script/ui'],
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
			'angular-cookies':{
				deps:['angular']
			},
			'angular-translate':{
				deps:['angular']
			},
			'angular-ui-router':{
				deps:['angular']
			},
			'angular-ui-bootstrap':{
				deps:['angular']
			},
			'bootstrap':{
				deps:['jquery','respond']
			},
			'ui':{
				deps:['jquery','bootstrap']
			}
		},
		deps:['app','ui'],
//		urlArgs: 'timestamp_'+(new Date()).getTime(),//not load cache
		waitSeconds:60//unit second
	});

}(require));
