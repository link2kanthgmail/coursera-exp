(function(){
'use strict';
angular.module('CounterApp',[])
.controller('BindingController',BindingController);//registering controller
//injecting scopes to controller
BindingController.$inject=['$scope'];
  function BindingController($scope){
    $scope.firstName="Sri";
    //$scope.fullName="";
    $scope.showNoOfWatchers=function(){
      //console.log("# of watchers:",$scope);
      console.log("# of watchers:",$scope.$$watchersCount);
    };
    $scope.setFullName=function(){
      $scope.fullName=$scope.firstName +" " + "Kanth";
    };
    $scope.logFirstName=function(){
      console.log("FirstName : ",$scope.firstName);
    };
    $scope.logFullName=function(){
      console.log("FullName : ",$scope.fullName);
    };


  }

})();
