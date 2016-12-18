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

    $scope.submitButton = "Create";

    $scope.submit = function () {
        $http.post('http://localhost:3000/api/assets', JSON.stringify($scope.asset))
            .then(function successCallback(response) {
                if (response.data.success) {
                    window.location.href = "/assets";
                }
            }, function errorCallback(response) {
                console.log(response);
            });
    };

    if (document.location.pathname != '/assets/new') {

        $scope.submitButton = "Update";

        $scope.submit = function () {
            $http.put('http://localhost:3000/api/assets', JSON.stringify($scope.asset))
                .then(function successCallback(response) {
                    if (response.data.success) {
                        window.location.href = "/assets";
                    }
                }, function errorCallback(response) {
                    console.log(response);
                });
        };

        $http({
            method: 'GET',
            url: 'http://localhost:3000/api' + document.location.pathname
        }).then(function successCallback(response) {
            $scope.asset = response.data.data;
        }, function errorCallback(response) {
            console.log(response);
        });
    }
});