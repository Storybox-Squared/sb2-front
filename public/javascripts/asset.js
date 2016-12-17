app.controller('assetController', function ($scope, $http) {

    $scope.asset = {
        _id: null,
        asset_name: null,
        serial_number: null,
        barcode: null,
        description: null,
        brand: null,
        model: null,
        location: null,
        age: null,
        value: null,
        owner: null,
        loan_expiry: null,
        use: null
    };
    $scope.keys = Object.keys($scope.asset);

    $scope.submitButton = "Create";

    if (document.location.pathname != '/assets/new') {
        $scope.submitButton = "Update";
        $http({
            method: 'GET',
            url: 'http://localhost:3000/api' + document.location.pathname
        }).then(function successCallback(response) {
            $scope.asset = response.data.data;
            $scope.keys = Object.keys($scope.asset);
        }, function errorCallback(response) {
            console.log(response);
        });
    }
});