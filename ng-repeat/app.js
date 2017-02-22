(function(){
'use strict';

var shoppingList1=["Milk","Donuts","Cookies","Chocolate","Peanut Butter","Pepto Bismol",
"Pepto Bismol (Chocolate flavour)","Pepto Bismol(Cookie flavor)"];
var shoppingList2=[
{
  name:"Milk",
  quantity:"2"
},
{
  name:"Donuts",
  quantity:"200"
},
{
  name:"Cookies",
  quantity:"300"
},
{
  name:"Chocolate",
  quantity:"5"
}
];


angular.module('ShopingListApp',[])
.controller('ShopingLisController',ShopingLisController);//registering controller
//injecting scopes to controller
ShopingLisController.$inject=['$scope'];
  function ShopingLisController($scope){
    $scope.shoppingList1=shoppingList1;
    $scope.shoppingList2=shoppingList2;

    $scope.addToList = function(){
      var newItem={
        name:$scope.newItemName,
        quantity:$scope.newItemQuanity
      };
      $scope.shoppingList2.push(newItem);
    
    };
    $scope.clear=function(){
      $scope.newItemName="";
      $scope.newItemQuanity="";
    };
  }

})();
