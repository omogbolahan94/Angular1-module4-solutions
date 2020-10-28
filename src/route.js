(function() {
    "use strict";
    
    angular.module('menuApp')
    .config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // Premade list page
  .state('categoriesList', {
    url: '/categories-list',
    templateUrl: 'src/templates/main-categories.template.html',
    controller: 'CategoriesListController as categoriesList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService;
      }]
    }
  })

  .state('categoriesList.itemsList', {
    //url: '/item-detail/{shortName}',
    templateUrl: 'src/templates/main-items.template.html',
    controller: "ItemsListController as itemsList",
    params: {
        shortName: null
    }
  });

}

})();