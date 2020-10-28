(function () {
    angular.module("menuApp")
    .controller("ItemsListController", ItemsListController);
  

    /*
    inject the items prooperty of the resolve property in the route 
    itemsList state 
    */
    ItemsListController.$inject = ["$stateParams", "items"];
    function ItemsListController($stateParams, items) {
      let itemsList = this;
      //let shortName = $stateParams.shortName;
      let promise = items.getItemsForCategory($stateParams.shortName);

      promise.then( function(result) {
        itemsList.items = result.data['menu_items'];
        console.log( itemsList.items)
      })
    }
  
  })();