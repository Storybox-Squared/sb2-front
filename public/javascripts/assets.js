app.controller('assetsController', function ($scope, $http) {

    $scope.assets = [];
    $scope.keys = [];

    $scope.viewAsset = function (id) {
        document.location = '/assets/' + id;
    };

    $http({
        method: 'GET',
        url: 'http://localhost:3000/api' + document.location.pathname
    }).then(function successCallback(response) {
        $scope.assets = response.data.data;
        $scope.keys = Object.keys($scope.assets[0]);
    }, function errorCallback(response) {
        console.log(response);
    });
});