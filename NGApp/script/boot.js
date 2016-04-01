define(['require','angular','angularCookies','angularTranslate','angularRoute','settings'],
function(require,ng,ngCookies,ngTrans,ngRoute,settings){

	var appName=settings.info.appName;

	//手动启动 ngapp
	require(['domReady!'], function (doc) {
		console.info('angular booting...');
		ng.bootstrap(doc,[appName]);
	});

	//声明主模块
	var app=ng.module(appName,['ngRoute','ngCookies','pascalprecht.translate']);

	return {
		app:app,
		settings:settings
	};

});
