define(['require','settings','angular','angularCookies','angularTranslate','angularRoute'],
function(require,settings,ng,ngCookies,ngTrans,ngRoute){

	var appName=settings.info.appName;

	//手动启动 ngapp
	require(['domReady!'], function (doc) {
		console.info('app booting...');
		ng.bootstrap(doc,[appName]);
	});

	//声明主模块
	var app=ng.module(appName,['ngRoute','ngCookies','pascalprecht.translate']);

	return {
		app:app,
		settings:settings
	};

});
