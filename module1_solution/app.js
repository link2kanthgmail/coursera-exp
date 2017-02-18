(function () {
  'use strict';
angular.module('myFirstAssignment',[])
  .controller('ItemsCountController',function($scope){
    $scope.items="";
    $scope.message="";

    $scope.checkIfTooMuch=function(){
      var message=getItemMesage($scope.items);
        $scope.message=message;
    };
    function getItemMesage(items){
      var message="";

      if(items.length==0){
        message="Please enter data first";
        return message;
      }
      var totalVal=getItemsCount(items);
      if(totalVal>3){
        message="Too much!";
      }else{
        message="Enjoy!";
      }
      return message;
    }
    function getItemsCount(items){
      var totalVal=0;
      var itemsArr=items.split(',');
      for(var i=0;i<itemsArr.length;i++){
        totalVal+=parseInt(itemsArr[i]);
      }
      return totalVal;
    }
  });
})();
