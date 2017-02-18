(function () {
  'use strict';
  //x="hello";
angular.module('myFirstApp',[])
  .controller('NameCalculatorController',function($scope){
    $scope.name="";
    $scope.totalValue=0;
    $scope.displayNumeric=function(){
      var totalNameValue=calculatorNameValue($scope.name);
        $scope.totalValue=totalNameValue;
    };
    function calculatorNameValue(string){
      var totalStringValue=0;
      for (var i = 0; i < string.length; i++) {
      totalStringValue+=  string.charCodeAt(i);
      }
      return totalStringValue;
    }
  });
})();
