;(function () {

    'use strict';

    angular.module('service.weather', [])
        .service('weather', weather);


    weather.$inject = ['http', 'url'];

    function weather(http, url) {

       // var callback = callback;
        return {
            get: get,
            getInCity: getInCity
        };

        /**
         * Function for gettinf weather
         * @param {object} data
         * @param {string} data.q - '{city name},{country code}'
         * @returns {*}
         */
        function get(data) {

            return http.get(url.bradford, data)
                .then(function (res) {
                       return callback(res);
                }, function (res) {
                  return http.get('bradforddata.txt', data).then(
                        function (res){
                            return  callback(res);
                        }
                    )
                    }
                )

        }

        function getInCity (city) {
          return  http.get(city.url).then(
                function (res) {
                    return callback(res);
                },
              function (res) {
                  return http.get(city.path, null).then(
                      function (res){
                          return  callback(res);
                      }
                  )
              }
            )
        }


        function callback (res){
            var weatherArr;
            weatherArr = res.split('\n');
            weatherArr.splice(0,7);
            var result = [];
            weatherArr.forEach(function(el){
                var tmpRowArr = el.replace(/  +/g, ' ').replace(/^\s*/, '').split(' ');
                var tmpOBj = {
                    year: tmpRowArr[0],
                    month: tmpRowArr[1],
                    tmax: tmpRowArr[2],
                    tmin: tmpRowArr[3],
                    af: tmpRowArr[4],
                    rain: tmpRowArr[5],
                    sun: tmpRowArr[6]
                };
                result.push(tmpOBj);
            });

            return result;
        }



    }
})();
