(function () {

  angular.module("MenuApp")
  .component("categoriesList", {
    templateUrl: '../templates/categories.template.html',
    bindings: {
      categories: '<'
    }
  })


})()