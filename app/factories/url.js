;(function () {
    'use strict';
    angular
        .module('factory.url', [])
        .factory('url', url);


    url.$inject = [];

    function url() {
      //  let baseUrl = 'http://api.openweathermap.org/data/2.5/';
        let baseUrl = 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/';
        return {
     //       weather: baseUrl + 'weather'
            cities:'https://data.gov.uk/dataset/historic-monthly-meteorological-station-data/datapackage.json',
            bradford: baseUrl + 'bradforddata.txt',
        };
    }

})();