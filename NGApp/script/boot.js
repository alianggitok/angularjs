define([
	'require',
	'settings',
	'angular',
	'angular-ui-bootstrap',
	'angular-cookies',
	'angular-translate',
	'angular-ui-router'
],function(
	require,
	settings,
	ng
){

	var appName=settings.info.appName;

	//requirejs 错误处理
	require.onError=function(err){
		alert('Requirejs errors: '+ err.requireType+'.');
		console.error('>>  Requirejs errors:', err.requireType, err);
	};

	//手动启动 ngapp
	require(['domReady!'], function (doc) {
		console.info('app booting...');
		ng.bootstrap(doc,[appName]);
	});

	//声明主模块
	var app=ng.module(appName,['ui.bootstrap','ui.router','ngCookies','pascalprecht.translate']);

	return {
		app:app,
		settings:settings
	};

});
