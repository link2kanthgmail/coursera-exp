(function(){
'use strict';
angular.module('ShopingListApp',[])
.controller('ShopingListAddController',ShopingListAddController)
.controller('ShopingListShowController',ShopingListShowController)
.service('ShopingListService',ShopingListService);
//injecting scopes to controller
ShopingListAddController.$inject=['ShopingListService'];
  function ShopingListAddController(ShopingListService){
  var itemAdder=this;
  itemAdder.itemName="";
  itemAdder.itemQuantity="";
  $scope.addItem = function(){
        ShopingListService.addItem(itemAdder.itemName,itemAdder.itemQuantity);
    };

  }
  ShopingListShowController.$inject=['ShopingListService'];
  function ShopingListShowController(ShopingListService){
    var showList=this;
    showList.items=ShopingListService.getItems();
  }
  function ShopingListService(){
    var service = this;
    var items=[];
    service.addItem=function(itemName,quantity){
      var item ={
        name:itemName,
        quantity:quantity
      };
        items.push(item);
    };
    service.getItems=function(){
      return items;
    }
  }

})();
