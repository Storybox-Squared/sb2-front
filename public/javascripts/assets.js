app.controller('assetsController', function ($scope, $http) {

    $scope.assets = [];

    $http({
        method: 'GET',
        url: 'http://localhost:3001/assets'
    }).then(function successCallback(response) {
        $scope.assets = response.data.data;
        //console.log(response.data);
    }, function errorCallback(response) {
        console.log(response);
    });
});