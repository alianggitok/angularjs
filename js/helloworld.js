;(function($,ng){
	var module=ng.module('demo', []);

	module.controller('hello',[
		'$scope',
		function hello($scope){
			$scope.words={
				text:'Hello angular'
			};
		}
	]);

})(jQuery,angular);
