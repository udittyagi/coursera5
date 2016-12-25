(function(){
  'use strict';
  angular.module('lunchCheck',[])

  .controller('lunchCheckController', lunchCheckController);

  lunchCheckController.$inject = ['$scope'];
  function lunchCheckController($scope){
  	$scope.food="";
  	$scope.message="";

  	$scope.getMessage=function(){
  		var foodCount=getCount($scope.food);

  		if(foodCount==0){
  			$scope.message="Please enter data first";
  		}

  		else if(foodCount <= 3){
  			$scope.message="Enjoy!";
  		}

  		else{
  			$scope.message="Too Much!"
  		}

  	};

  }

  function getCount(string){
     if(string.length==0){
     	return 0;
     }  	
  	 var arrayOfFood=string.split(',');
  	 console.log(arrayOfFood.length);
  	 return (arrayOfFood.length);
  }
})();