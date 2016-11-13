angular.module('nodeApp').controller('yi',function($scope,$http){
	$http({
		url:"http://www.somenote.cn:1602/list1",
		method:'get'
	}).success(function(s){
		$scope.data=s;
	})
})
