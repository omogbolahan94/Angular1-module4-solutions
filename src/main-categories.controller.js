(function () {
  angular.module("MenuApp")
  .controller("CategoriesListController", CategoriesListController)
  

  /*
  inject the items prooperty of the resolve property in the route 
  categoriesList state into the route categoriesList state controller
  */
 CategoriesListController.$inject = ["items"];
  function CategoriesListController(items) {
    let categoriesList = this;

    let promise = items.getAllCategories();
    
    promise.then( function(result) {
      categoriesList.items = result.data; 
    })
  }

})();