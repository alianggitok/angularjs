//settings
define(function(){
	var info={
			appName:'ngapp',
			appText:'NGAPP',
			version:'0.01'
		},
		path={
            root:'',
			view:'/view',
			i18n:'/i18n'
		},
		lang={
			cookieKey:'i18n',
			langs:['zh_CN','en'],
			defaultLang:'zh_CN',
			filePrefix:'',
			fileSuffix:'.js'
		},
		navi=[
			{
				id: 0,
				i18nID:'navi.one',
				name:'one',
				url: '/one'
			}, {
				id: 1,
				i18nID:'navi.two',
				name:'two',
				url: '/two'
			}
		];

	//make routes
	function makeRoutes(){
		var routes=[];
		for(var i=0,len=navi.length;i<len;i+=1){
			routes[i]={
				id:navi[i].id,
				name:navi[i].name,
				url:navi[i].url,
				templateUrl:path.root+path.view+'/'+navi[i].name+'/view.html',
				controllerName:navi[i].name+'ID'+navi[i].id+'Controller',
				controllerFile:path.root+path.view+'/'+navi[i].name+'/controller.js'
			};
		}
		return routes;
	}

	return {
		info:info,
		path:path,
		lang:lang,
		navi:navi,
		routes:makeRoutes()
	};
});
