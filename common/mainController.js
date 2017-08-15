(function(angular) {
  angular.module('serachWidget').controller('mainController',['empMasterData', function (empMasterData) {
    var vm = this;
    vm.dataset = [];

    vm.onSearch = function(searchKey) {
      vm.response = empMasterData.getData(searchKey)
      vm.dataset = vm.response.dataSet;
    }
  }]);
})(angular)