'use strict';

/**
 * @ngdoc overview
 * @name nodeApp
 * @description
 * # nodeApp
 *
 * Main module of the application.
 */
angular
  .module('nodeApp', ["ui.router"]).config(function($stateProvider,$urlRouterProvider){
  	$stateProvider.state("yi",{
  		url:"/yi",
  		templateUrl:"views/yi.html",
  		controller:"yi"
  	}).state("er",{
  		url:"/er",
  		templateUrl:"views/er.html",
  		controller:"er"
  	})
  });
