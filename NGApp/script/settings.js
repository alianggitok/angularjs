//settings

define('settings',function(){
	var info={
			appName:'ngapp',
			appText:'NGAPP',
			version:'0.01'
		},
		config={
			modulePath:'/module'
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
		routes=[]

	//make routes
	for(var i=0,len=menus.length;i<len;i+=1){
		routes[i]={
			id:menus[i].id,
			name:menus[i].name,
			url:menus[i].url,
			templateUrl:config.modulePath+'/'+menus[i].name+'/view.html',
			controllerName:menus[i].name+'Controller',
			controllerFile:config.modulePath+'/'+menus[i].name+'/controller.js'
		};
	}

	return {
		info:info,
		config:config,
		menus:menus,
		routes:routes
	};
});
