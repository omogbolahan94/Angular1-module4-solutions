(function () {

  angular.module("menuApp")
  .component("categoriesList", {
    templateUrl: 'src/templates/categories.template.html',
    bindings: {
      categories: '<'
    }
  })


})()