//define app and main controller
    var GeoBlinkApp = angular.module("GeoBlinkApp",[]);
    GeoBlinkApp.controller("geoCtrl",function($scope, $http){

    var countriesTemp = [];
    $scope.countries;
    $scope.favouriteList = [];
    $scope.alertAddMessage = false;
    $scope.cols = 100;

    //get the data from an API. Emulated a server on localhost with json-server
    function getData()
    {
      $http({
      method : "GET",
      url : "http://localhost:3000/Countries"
      }).then(function mySuccess(response)
      {
        countriesTemp = response.data;
        $scope.countries = countriesTemp[0];

      }, function myError(response)
      {
        $scope.info = response.statusText;
      });
    }

    //store clicked item in list and calculate new input width
    $scope.favouriteThis = function () {
      var country = this.CountryList;

      if(Object.values($scope.countries).indexOf(country) > -1){
        var query = country;
      }
      if($scope.favouriteList.includes(query) && query)
      {
        $scope.alertAddMessage = true;
        this.CountryList = "";
      }
      else if (query)
      {
        $scope.favouriteList.push(query);
        let aprox = query.length;
        let len = aprox * 10;
        $scope.cols += len;
        this.CountryList = "";
      }

      $scope.favouriteShow = true;
    };

    //remove items from favourite list
    $scope.removeItem = function (item) {
      var index = $scope.favouriteList.indexOf(item);

      if (index > -1) {
        $scope.favouriteList.splice(index, 1);
        let aprox = item.length;
        let len = aprox * 10;
        $scope.cols -= len;
      }
    };

    //closes alert message displayed on attempt to add an already favourited product
    $scope.hideAlert = function(){
      $scope.alertAddMessage = false;
    };

    //initiate
    getData();           
  });