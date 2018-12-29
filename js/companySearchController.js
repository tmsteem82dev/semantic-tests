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
            var ticker = selected_company.description.ticker;
            var filter = "company_ticker==" + ticker;
            var company_filter_element = $(document.getElementById(filter));
            if (company_filter_element) {
                if (company_filter_element.hasClass('lg_orange')) {} else {
                    // this is a wrong link to element
                    // company_filter_element.addClass('lg_orange');
                    $scope.ctrl.newsitems = [];
                    // trigger a new search
                    $scope.searchObject["startAt"] = 0;
                    $scope.searchObject["action"] = "query";
                    $scope.searchObject["executeStartQuery"] = false;
                    // TODO should we update the filters when selecting a filter?
                    // this need a bit of work still though...
                    $scope.ctrl.fetchContent(true, false);
                    $scope.reloadtimeline = true;
                }
            }
            $scope.facets.push(filter);
            /*
            if(!element.hasClass('lg_zero')) {
                var closeable = element.find('i');
                //debugger
                if(element.hasClass('lg_orange')) {
                    element.removeClass('lg_orange');
                    closeable.css( "visibility", "hidden");
                    //console.log('filter off');

                    scope.facets.splice(scope.facets.indexOf(attrs.fltrValue),1);

                } else {
                    element.addClass('lg_orange');
                    closeable.css( "visibility", "visible");

                    //console.log('filter on');

                    // add filter to the list of facets
                    //scope.facets.push(attrs.fltrKey+':'+attrs.fltrValue.replace('http://',''));
                    scope.facets.push(attrs.fltrValue);

                }

                scope.ctrl.newsitems = [];

                // trigger a new search
                scope.searchObject["startAt"] = 0;

                scope.searchObject["action"] = "query";
                scope.searchObject["executeStartQuery"] = false;

                // TODO should we update the filters when selecting a filter?
                // this need a bit of work still though...
                scope.ctrl.fetchContent(true, false);

                scope.reloadtimeline = true;

                mixpanel.track("Filter Clicked", {
                    "filter_key": attrs.fltrKey,
                    "filter_value": attrs.fltrValue
                });

                //$timeout(function() {
                  scope.loadTimeline(false);
                //}, 2000); // delay 2000 ms
              }*/
        }
    });