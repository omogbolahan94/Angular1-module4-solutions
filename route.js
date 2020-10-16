(function () {
    'use strict';
    
    angular.module('MenuApp')
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
        templateUrl: '/templates/home.template.html'
      })
    
      // Premade list page
      .state('categoriesList', {
        url: '/categories-list',
        templateUrl: '/templates/main-categories.template.html',
        controller: 'CategoriesListController as categoriesList',
        resolve: {
          items: ['MenuDataService', function (MenuDataService) {
            MenuDataService.getAllCategories()
            .then( result => {
                console.log(result.data)
            })
            return MenuDataService;
          }]
        }
      })
    
      .state('categoriesList.itemsList', {
        // url: '/items-list/{shortName}',
        templateUrl: '/templates/main-items.template.html',
        controller: 'ItemsListController as itemsList',
        params: {
            shortName: null
        }
      })
    
    }
    
    })();
    