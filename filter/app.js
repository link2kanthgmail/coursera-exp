(function(){
'use strict';
angular.module('CounterApp',[])
.controller('CounterController',CounterController);//registering controller
//injecting scopes to controller
CounterController.$inject=['$scope'];
  function CounterController($scope){
    $scope.onceCounter=0;
    $scope.counter=0;
    $scope.name="Sri";
    $scope.showNoOfWatchers=function(){
      //console.log("# of watchers:",$scope);
      console.log("# of watchers:",$scope.$$watchersCount);
    };
    $scope.countOnce=function(){
      $scope.onceCounter=1;
    };

    $scope.upCounter=function(){
      $scope.counter++;
    };
    //2nd way using curly braces
    $scope.$watch(function(){
      console.log("Digest Lopp fired");
    });
    //not recommended
    // $scope.$watch('onceCounter',function(newValue,oldValue){
    //   console.log("oldValue",oldValue);
    //   console.log("newValue",newValue);
    // });
    // $scope.$watch('counter',function(newValue,oldValue){
    //   console.log("counter:oldValue",oldValue);
    //   console.log("counter:newValue",newValue);
    // });

  }

})();
