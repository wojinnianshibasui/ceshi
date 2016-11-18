'use strict';

/**
 * @ngdoc overview
 * @name nodeApp
 * @description
 * # nodeApp
 *
 * Main module of the application.
 */
angular.module('nodeApp',["ui.router","skf"]).config(function($stateProvider,$urlRouterProvider){
	$scope.day = 'cloud'
  	$stateProvider.state("yi",{
  		url:"/yi",
  		templateUrl:"views/yi.html",
  		controller:"yi"
  	}).state("er",{
  		url:"/er",
  		templateUrl:"views/er.html",
  		controller:"er"
  	})
  }).controller("ccc",function($scope,$http,getdata,filter){
  	filter.substr(1);
	$http({
    	url:"http://www.somenote.cn:1510/aut",
    	method:"get",
   }).success(function(e){
    	$scope.mdata=e;
   })
})