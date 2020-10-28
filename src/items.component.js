(function () {
'use strict';

angular.module('menuApp')
.component('itemsList', {
  templateUrl: '../templates/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
