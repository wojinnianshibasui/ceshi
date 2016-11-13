angular.module('nodeApp').controller('er',function($scope,$http){
	$http({
		url:"http://www.somenote.cn:1602/list2",
		method:'get'
	}).success(function(s){
		$scope.data=s;
	})
})
