define(['jquery'],function($){
	return {
		naviStatus:function(id){
			$('.navbar .nav li').siblings().removeClass('active');
			$('.navbar .nav li[data-navi-id='+id+']').addClass('active');
		},

		translateStatus:function(lang){
			$('.btn[data-trans-lang="'+lang+'"]').addClass('btn-primary').siblings().removeClass('btn-primary');
		},

		loader:function(){
			var loader=$('body>.masker');
			function show(){
				loader.stop().fadeIn();
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
