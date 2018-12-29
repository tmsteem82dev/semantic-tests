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
            var ticker = selected_source.description.ticker;
            var filter = "source_ticker==" + ticker;
            var source_filter_element = $(document.getElementById(filter));
            if (source_filter_element) {
                if (source_filter_element.hasClass('lg_orange')) {} else {
                    // this is a wrong link to element
                    // source_filter_element.addClass('lg_orange');
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