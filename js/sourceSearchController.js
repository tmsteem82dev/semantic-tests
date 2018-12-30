angular.module("myApp")
    .controller("SourceSearchController", function ($scope) {
        $scope.sourceData = [{
                key: "source A"
            },
            {
                key: "Bloomberg"
            }
        ];

        var onSuccess = function (result) {
            $scope.sourceData = result.data;
            console.info("source lookup result: " + result)
        }
        var onError = function (reason) {
            console.error("source data error: " + reason)
        }

        $scope.onSourceSelected = function (selected_source) {
            if (!selected_source) {
                return;
            }
            if (!selected_source.description) {
                return;
            }

        }
    });