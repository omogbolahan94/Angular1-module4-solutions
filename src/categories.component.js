(function () {

  angular.module("menuApp")
  .component("categoriesList", {
    templateUrl: '../templates/categories.template.html',
    bindings: {
      categories: '<'
    }
  })


})()