angular.module("zdy", []).directive("zdy", function() {
    return {
    	restrict:"ECMA",
        template:'<div class="skf_b"><div class="skf_left"><ul><li ng-repeat="x in fdata" >{{x.title}}</li></ul></div><div class="skf_centent"><img ng-repeat="q in zdata" ng-src="{{q.img}}"></div><div class="skf_right"><img ng-repeat="q in zdata" ng-src="{{q.img}}"><ul><li ng-repeat="x in fdata" >{{x.title}}</li></ul></div></div>',
        replace:true,
        scope:{fdata:'=data',zdata:'=dataa'},
        link:function(scope,element,attrs){
        	scope.a=attrs['b']
        }
    };
})