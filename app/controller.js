var app1 = angular.module('app1', ['ngAnimate','ui.router', 'toaster']);
/*--- Data sharing -----*/
app1.service("dataService", function() {

    this.totalamount = "";
    this.orderdetails = "";
    this.quantity = "";
    this.addcomments = "";


});



/*--- Controller for order -----*/
app1.controller('confirmordercontroller',["$scope","dataService", function($scope, dataService){
    //$scope.data = dataService.dataObj;
    $scope.timetocook = "3";
    $scope.dataService = dataService;

    $scope.isUpdated = function(val, oldqtty){
      $scope.dataService.totalamount = parseInt($scope.dataService.totalamount) - ((oldqtty - $scope.dataService.orderdetails[val].quantity)*$scope.dataService.orderdetails[val].cost);
    };
 
}]);




/*--- Controller for dashboard -----*/
app1.controller('ordercontroller', ["$scope", "dataService",function($scope, dataService) {
  $scope.dataService = dataService;
	$scope.totalamount = 0;
	$scope.maincategories = [{ 'imagename': "apetizer_icon_grey_0", 'title': "Apetizer"},
						 {'imagename':"main_grey_1", 'title':"Main"},
						 {'imagename':"sidedish_grey_2",'title':"Side Dish"},
						 {'imagename':"desert_grey_3",'title':"Desert"},
						 {'imagename':"drinks_grey_4",'title':"Drinks"}
						 ];


 		$scope.mainselected = false;
	 	$scope.categoryselected = false;
	  $scope.loadcategories = function($index) {
       
       // toggles icon
       // check if any other icon has been clicked before and undo that
      
      for (var i = $scope.maincategories.length - 1; i >= 0; i--) {
      	if($scope.maincategories[i].imagename.indexOf("yellow")>=0){
      		$scope.maincategories[i].imagename = $scope.maincategories[i].imagename.replace('yellow','grey');
      		$scope.categoryselected = false;
      	}
      }
       	   
        $scope.maincategories[$index].imagename = $scope.maincategories[$index].imagename.replace('grey','yellow');
    
        $scope.mainselected = true;
    	// fetch coresponding subcategories

    	$scope.categories = [{'imagename':"icon_grey_6", 'title':"Main"},
						 {'imagename':"icon_grey_7",'title':"Side Dish"},
						 {'imagename':"icon_grey_8",'title':"Deser"},
						 {'imagename':"icon_grey_9",'title':"Drinks"},
						 {'imagename':"icon_grey_10",'title':"Curry"},
						 {'imagename':"icon_grey_6", 'title':"Main"},
						 {'imagename':"icon_grey_7",'title':"Side Dish"},
						 {'imagename':"icon_grey_8",'title':"Desert"},
						 {'imagename':"icon_grey_9",'title':"Drinks"},
						 {'imagename':"icon_grey_10",'title':"Curry"},
						
						];
	
    };




    $scope.loadsubcategories = function($index) {
       
       // toggles icon
       // check if any other icon has been clicked before and undo that
      
      for (var i = $scope.categories.length - 1; i >= 0; i--) {
      	if($scope.categories[i].imagename.indexOf("yellow")>=0){
      		$scope.categories[i].imagename = $scope.categories[i].imagename.replace('yellow','grey');
      	}
      }
       	   
        $scope.categories[$index].imagename = $scope.categories[$index].imagename.replace('grey','yellow');
        $scope.categoryselected = true;

    	// fetch coresponding subcategories
    	$scope.subcategories = [{ 'imagename': "desi0", 'subtitle': "Biryani with chicken" , 'description': "Its is surely tastey if you get a chance to try it don't passè. Totally worth the time and money 1", 'cost': 11, 'quantity':0, 'addcom':""},
						{ 'imagename': "desi0", 'subtitle': "Biryani with beef" , 'description': "Its is surely tastey if you get a chance to try it don't passè. Totally worth the time and money 2", 'cost': 12, 'quantity':0, 'addcom':""},
						{  'imagename': "desi0", 'subtitle': "Biryani with mutton" , 'description': "Its is surely tastey if you get a chance to try it don't passè. Totally worth the time and money 3", 'cost': 13, 'quantity':0, 'addcom':""},
						 {  'imagename': "desi0", 'subtitle': "Biryani with aalo1" , 'description': "Its is surely tastey if you get a chance to try it don't passè. Totally worth the time and money 4", 'cost': 14, 'quantity':0, 'addcom':""},
						 { 'imagename': "desi0", 'subtitle': "Biryani with daal2" , 'description': "Its is surely tastey if you get a chance to try it don't passè. Totally worth the time and money 5", 'cost': 15, 'quantity':0, 'addcom':""},
						 {  'imagename': "desi0", 'subtitle': "Biryani with aalo3" , 'description': "Its is surely tastey if you get a chance to try it don't passè. Totally worth the time and money 4", 'cost': 14, 'quantity':0, 'addcom':""},
						 { 'imagename': "desi0", 'subtitle': "Biryani with daal4" , 'description': "Its is surely tastey if you get a chance to try it don't passè. Totally worth the time and money 5", 'cost': 15, 'quantity':0, 'addcom':""}
						
						];


    };

    $scope.fOrder = {};
    $scope.fOrder.subcatordered =[];
    $scope.fOrder.checkedStatus =[];
    
    $scope.fOrder.myClick = function($event,val) {
     
              //true add element to final order
              // increments the total on this page
              if($event){
                if($scope.subcategories[val].quantity === 0){
                  alert("please input the quantity");
                  $scope.fOrder.checkedStatus[val] = false;
                }
                else{
                  $scope.fOrder.subcatordered.push($scope.subcategories[val]);
                  $scope.totalamount = parseInt($scope.totalamount) + parseInt($scope.subcategories[val].cost * $scope.subcategories[val].quantity);
                }
              }
              //false remove element from final order
              //decrement total from this page
              else{
                var ind = $scope.fOrder.subcatordered.indexOf($scope.subcategories[val]);
                if(ind!= -1){
                  //remove it from array
                  $scope.fOrder.subcatordered.splice(ind,1);
                  $scope.totalamount = parseInt($scope.totalamount) - parseInt($scope.subcategories[val].cost *  $scope.subcategories[val].quantity);
            
                }
              }
              dataService.totalamount = $scope.totalamount;
              dataService.orderdetails = $scope.fOrder.subcatordered;
    }


}]);






