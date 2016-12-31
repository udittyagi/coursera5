(function(){

'use strict';

angular.module('ShoppingListCheckOff' , [])
.controller('ToBuyController' , ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService' , ShoppingListCheckOffService);

ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){

	var buyList = this;
	this.buy = ShoppingListCheckOffService.getItemsToBuy();
	this.buyTheItem = function(indexItem){
		return ShoppingListCheckOffService.addToBought(indexItem);
	}

}

AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){

	var boughtList=this;

	this.bought = ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService(){

	var service=this;
	var buy=[
      {
      	type:"Cookies",
      	quantity:10
      },
      {
      	type: "Milk",
      	quantity:20
      },
      {
      	type:"Pepto Bismol",
      	quantity:20
      },
      {
      	type:"Sweet Potato",
      	quantity:30
      },
      {
      	type: "Wine",
      	quantity:50

      },
      {
      	type: "Bread",
      	quantity:35
      }


	];
	var bought=[];

	service.addToBought = function(itemIndex){
		bought.push(buy[itemIndex]);
		buy.splice(itemIndex,1);
	}

	service.getItemsToBuy = function(){
            return buy;
	}

	service.getBoughtItems=function(){
		return bought;
	}



}

})();