define(['jquery'],function($){
	return {
		naviStatus:function(id){
			$('.menu .item').siblings().removeClass('active');
			$('.menu .item[data-navi-id='+id+']').addClass('active');
		},

		translateStatus:function(lang){
			$('.ui.button[data-trans-lang="'+lang+'"]').addClass('primary').siblings().removeClass('primary');
		},

		loader:function(){
			var loader=$('body>.ui.dimmer:has(.loader)');
			function show(){
				loader.fadeIn();
			}
			function hide(){
				loader.fadeOut();
			}

			return {
				show:show,
				hide:hide
			};
		}
	};
});
