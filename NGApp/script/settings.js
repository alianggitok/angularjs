//settings

define(function(){
	var info={
			appName:'ngapp',
			appText:'NGAPP',
			version:'0.01'
		},
		path={
			module:'/module',
			i18n:'/i18n'
		},
		lang={
			langs:['en','zh_CN'],
			default:'zh_CN',
			filePrefix:'',
			fileSuffix:'.json'
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
		],
		routes=[];

	//make routes
	for(var i=0,len=navi.length;i<len;i+=1){
		routes[i]={
			id:navi[i].id,
			name:navi[i].name,
			url:navi[i].url,
			templateUrl:path.module+'/'+navi[i].name+'/view.html',
			controllerName:navi[i].name+'ID'+navi[i].id+'Controller',
			controllerFile:path.module+'/'+navi[i].name+'/controller.js'
		};
	}

	return {
		info:info,
		path:path,
		lang:lang,
		navi:navi,
		routes:routes
	};
});
