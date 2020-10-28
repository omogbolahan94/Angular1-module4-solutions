(function () {
'use strict';

angular.module('menuApp')
.component('itemsList', {
  templateUrl: 'src/templates/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
