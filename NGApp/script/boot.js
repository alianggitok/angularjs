define([
	'require',
	'settings',
	'angular',
	'angularCookies',
	'angularTranslate',
	'angularRoute'
],function(
	require,
	settings,
	ng,
	ngCookies,
	ngTrans,
	ngRoute
){

	var appName=settings.info.appName;

	//手动启动 ngapp
	require(['domReady!'], function (doc) {
		console.info('app booting...');
		ng.bootstrap(doc,[appName]);
	});

	//requirejs 错误处理
	require.onError=function(err){
		alert('Requirejs errors: '+ err.requireType+'.');
		console.error('>>  Requirejs errors:', err.requireType, err);
	};

	//声明主模块
	var app=ng.module(appName,['ngRoute','ngCookies','pascalprecht.translate']);

	return {
		app:app,
		settings:settings
	};

});
