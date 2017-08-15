(function(angular) {
  var search = {
      templateUrl: 'searchComponent/searchComponent.html',
      bindings: {
        onKeyPress: '&',
        dataset: '<'
      },
      controller: 'searchComponentController',
      controllerAs: 'scc'
  }
  angular
    .module('serachWidget')
    .component('searchWidget', search);
  
    
  angular
    .module('serachWidget')
    .controller('searchComponentController', searchComponentController);
    function searchComponentController(){
            
    }
})(angular);