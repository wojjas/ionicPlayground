(function () {
    'use strict';

    var controllerId = 'ViewerController';

    angular.module('starter')
        .controller(controllerId, ['$scope', ViewerController]);

    function ViewerController($scope) {
        var vm = this;

        vm.activate = activate;

        activate();

        function activate() {
          $scope.pdfUrl = 'resources/kbtri.pdf';
        }
    }
})();
