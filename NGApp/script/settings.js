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
			list:['en','zh_CN'],
			default:'zh_CN',
			filePrefix:'local-',
			fileSuffix:'.json'
		},
		menus=[
			{
				id: 0,
				text: '模块一',
				name:'one',
				url: '/one'
			}, {
				id: 1,
				text: '模块二',
				name:'two',
				url: '/two'
			}
		],
		routes=[];

	//make routes
	for(var i=0,len=menus.length;i<len;i+=1){
		routes[i]={
			id:menus[i].id,
			name:menus[i].name,
			url:menus[i].url,
			templateUrl:path.module+'/'+menus[i].name+'/view.html',
			controllerName:menus[i].name+'ID'+menus[i].id+'Controller',
			controllerFile:path.module+'/'+menus[i].name+'/controller.js'
		};
	}

	return {
		info:info,
		path:path,
		lang:lang,
		menus:menus,
		routes:routes
	};
});
