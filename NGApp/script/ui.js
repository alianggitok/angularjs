define(['require','jquery'],function(require,$){
	return {
		naviStatus:function(id){
			$('.menu .item').siblings().removeClass('active');
			$('.menu .item[data-navi-id='+id+']').addClass('active');
		},
		translateStatus:function(lang){
			$('.ui.button[data-trans-lang="'+lang+'"]').addClass('primary').siblings().removeClass('primary');
		}
	}
});
