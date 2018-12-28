angular.module("myApp")
    .controller("CompanySearchController", function ($scope) {
        $scope.companyData = [{
                name: "company A",
                ticker: "ca"
            },
            {
                name: "Alibaba",
                ticker: "baba"
            }
        ];
    });