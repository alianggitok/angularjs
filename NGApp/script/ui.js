define(['jquery'],function($){
	return {
		naviStatus:function(tag){
			var items=$('.navbar .nav li'),
				activeItem=items.has('a[ui-sref="'+tag+'"]');
			items.removeClass('active');
			activeItem.addClass('active');
		},

		translateStatus:function(lang){
			$('.btn[data-trans-lang="'+lang+'"]').addClass('btn-primary').siblings().removeClass('btn-primary');
		},

		loader:function(){
			var loader=$('body>.masker');
			function show(){
				loader.stop(false,true).fadeIn();
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
