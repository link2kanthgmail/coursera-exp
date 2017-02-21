(function(){
'use strict';
angular.module('CounterApp',[])
.controller('CounterController',CounterController);//registering controller
//injecting scopes to controller
CounterController.$inject=['$scope'];
  function CounterController($scope){
    $scope.counter=0;
//better approarch 1
    // $scope.countOnce=function(){
    //   $timeout(function(){
    //     $scope.counter++;
    //     console.log("Counter Incremented!");
    //   },2000);
    // };

//recommended approach
    $scope.countOnce=function(){
      setTimeout(function(){
        $scope.$apply(function(){
          $scope.counter++;
          console.log("Counter Incremented!");
        });
      },2000);
    };

//Not recommended if any error are thown it is not visible o angular context
    // $scope.countOnce=function(){
    //   setTimeout(function(){
    //     $scope.counter++;
    //     console.log("Counter Incremented!");
    //     $scope.$digest();
    //   },2000);
    // };
  }
})();
