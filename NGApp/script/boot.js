define([
	'require',
	'settings',
	'util',
	'angular',
	'angular-ui-bootstrap',
	'angular-cookies',
	'angular-translate',
	'angular-translate-loader-partial',
	'angular-ui-router'
],function(
	require,
	settings,
	util,
	ng
){

	var appName=settings.info.appName,
		debug=util.debug(settings.debug);

	//requirejs 错误处理
	require.onError=function(err){
		alert('Requirejs errors: '+ err.requireType+'.');
		debug.error('>>  Requirejs errors:', err.requireType, err);
	};

	//手动启动 ngapp
	require(['domReady!'], function (doc) {
		debug.info('app booting...');
		ng.bootstrap(doc,[appName]);
	});

	//声明主模块
	var app=ng.module(appName,['ui.bootstrap','ui.router','ngCookies','pascalprecht.translate']);
	
	app.debug=debug;

	return {
		app:app,
		settings:settings
	};

});
