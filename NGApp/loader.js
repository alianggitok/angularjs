requirejs.config({
	baseUrl:app.path.commonJS,
	paths: {
		//plugin
		'domReady':['lib/requirejs/domReady'],
		'text':['lib/requirejs/text'],
		//lib
		'angular':['lib/angular-1.2.29/angular.min'],
		'jquery':['lib/jquery-1.11.2.min'],
		'jquery.cookie':['lib/jquery.cookie.1.4.1'],
		'json2':['lib/json2'],
		'semanticUI':['lib/semantic-ui-2.1.8/semantic.min']
	},
	shim: {
		'angular':{
			exports:'angular'
		},
		'jquery':{
			deps:['angular']
		},
		'jquery.cookie':{
			deps:['jquery']
		},
		'semanticUI':{
			deps:['jquery']
		},
		'common':{
			deps:['semanticUI','json2','jquery.cookie','jquery.datetimepicker','smarttable']
		}
	},
	deps:['angular','jquery'],
	urlArgs: "bust=" +  (new Date()).getTime(),//not load cache
	waitSeconds:10//unit second
});

requirejs.onError=function(err){
	console.log('==> Requirejs errors: '+err.requireType, err);
	throw err;
};