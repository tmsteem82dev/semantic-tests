angular.module("myApp")
    .controller("CompanySearchController", function ($scope) {
        $scope.companyData = [{
                name: "company A",
                ticker: "ca",
                title: "wank"
            },
            {
                name: "Alibaba",
                ticker: "baba",
                title: "baba Alibaba?"
            }
        ];

        var onSuccess = function (result) {
            $scope.companyData = result.data;
            console.info("company lookup result: " + result)
        }
        var onError = function (reason) {
            console.error("company data error: " + reason)
        }

        $scope.onCompanySelected = function (selected_company) {
            if (!selected_company) {
                return;
            }
            if (!selected_company.description) {
                return;
            }

            console.log("Company selected: " + JSON.stringify(selected_company));

            return selected_company;
        }
    });