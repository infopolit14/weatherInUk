
;(function () {

    'use strict';

    angular.module('service.cities', [])
        .service('cities', cities);


    cities.$inject = ['http', 'url'];

    function cities(http, url) {

        var model = [];
        return {
            get: get,
            model:model,
        };

        /**
         * Function for gettinf weather
         * @param {object} data
         * @param {string} data.q - '{city name},{country code}'
         * @returns {*}
         */
        function get(data) {

            return http.get(url.cities, data)
                .then(function (res) {
                    var k=0;
                    var onlyCities = res.resources.slice(2);
                        onlyCities.forEach(function (item) {
                          var arr = item.description.split(" ");
                            item.name = arr[arr.length-1];
                            item.id = k++;

                        })
                       return   onlyCities;
                }, function (res) {
                    }
                )
            }



    }
})();
