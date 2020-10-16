(function () {

  angular.module("MenuApp")
  .service("MenuDataService", MenuDataService)
  .constant("ApiBaseUrl", "https://davids-restaurant.herokuapp.com");

  
  MenuDataService.$inject = ['$http', 'ApiBaseUrl'];
  function MenuDataService($http, ApiBaseUrl) {
    let service = this;

    service.getAllCategories = function() {
      let response = $http({
        method: "GET",
        url: ApiBaseUrl + "/categories.json",
      })
      return response;
    }

    service.getItemsForCategory = function(categoryShortName) {
      let response = $http({
        method: "GET",
        url: ApiBaseUrl + "/menu_items.json?category=categoryShortName",
        params: {
            category: categoryShortName     
        }
      })
      return response;
    }
  } //end of MenuDataService

})();