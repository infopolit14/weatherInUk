;(function () {
    'use strict';

    angular.module('app')
        .controller('HomepageController', HomepageController);


    HomepageController.$inject = [ '$element', 'getCities', 'weather'];

    function HomepageController($element, getCities, weather) {
        let vm = this;
        console.log(getCities);
        vm.cities = getCities;
        // vm.citys = ['London', 'Bristol', 'Liverpool', 'Notingam', 'Dublin', 'Belfast'];
        // vm.monthes = ['London', 'Bristol', 'Liverpool', 'Notingam', 'Dublin', 'Belfast'];
        vm.searchTerm;
        vm.selectCity = selectCity;



        vm.clearSearchTerm = function () {
            vm.searchTerm = '';
        };
        // The md-select directive eats keydown events for some quick select
        // logic. Since we have a search input here, we don't need that logic.
        $element.find('input').on('keydown', function (ev) {
            ev.stopPropagation();
        });
        vm.items = [1, 2, 3, 4, 5, 6, 7];
        vm.selectedYear;
        // vm.getSelectedTextYear = function () {
        //     if (vm.selectedYear !== undefined) {
        //         return vm.selectedYear;
        //     } else {
        //         return;
        //     }
        // }

        vm.selectedMonth;
        // vm.getSelectedTextMonth = function () {
        //     if (vm.selectedMonth !== undefined) {
        //         return vm.selectedMonth;
        //     } else {
        //         return;
        //     }
        // }

        // vm.selectedCity;
        // vm.getSelectedTextCity = function (i) {
        //     console.log(i,'i')
        //     if (vm.selectedCity !== undefined) {
        //         return vm.selectedCity;
        //     } else {
        //         return;
        //     }
        // }

        vm.years =  [];
        vm.months =  ["Январь", "Февраль", "Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
            vm.weathers = [];
                // data
                // .map(function (item) {
                //     for (var i in item) {
                //         if (i === 'year' && unrepeatYears(item[i])){
                //             vm.years.push(item[i]);
                //         }
                //         // if (i === 'year' && unrepeatYears(item[i])){
                //         //     vm.yearsForMonths.push(item[i]);
                //         // }
                //         item[i] = parseFloat(item[i]);
                //         if (isNaN(item[i])) {
                //             item[i] = "";
                //         }
                //
                //         if (i === 'month'){
                //
                //             if (item[i] == 1){item[i]='Январь'}
                //             else if (item[i] == 2){item[i]='Февраль'}
                //             else if (item[i] == 3){item[i]='Март'}
                //             else if (item[i] == 4){item[i]='Апрель'}
                //             else if (item[i] == 5){item[i]='Май'}
                //             else if (item[i] == 6){item[i]='Июнь'}
                //             else if (item[i] == 7){item[i]='Июль'}
                //             else if (item[i] == 8){item[i]='Август'}
                //             else if (item[i] == 9){item[i]='Сентябрь'}
                //             else if (item[i] == 10){item[i]='Октябрь'}
                //             else if (item[i] == 11){item[i]='Ноябрь'}
                //             else if (item[i] == 12){item[i]='Декабрь'}
                //
                //         }
                //     }
                //     return item;
                // })


            vm.sortField = undefined;
            vm.reverse = false;
            vm.sort = sort;
            vm.isSortUp = isSortUp;
            vm.isSortDown = isSortDown;


            function sort(fieldName) {
                if (vm.sortField === fieldName) {
                    vm.reverse = !vm.reverse
                } else {
                    vm.sortField = (!!parseFloat(fieldName)) ? parseFloat(fieldName) : fieldName;
                    vm.reverse = false;
                }
            }

            function isSortUp(fieldName) {
                return vm.sortField === fieldName && !vm.reverse;
            }

            function isSortDown(fieldName) {
                return vm.sortField === fieldName && vm.reverse;
            }



            vm.years.sort(function(a, b) {
                return b - a;
            });


        function unrepeatYears(year){
                for (var i =0; i<vm.years.length ;i++){
                    if (vm.years[i] == year){
                        return false
                    }

            }
            return true;
        }


        function selectCity (city) {
            console.log(city);
            weather.getInCity(city).then(
                function (data) {
                    vm.weathers = data
                        .map(function (item) {
                            for (var i in item) {
                                if (i === 'year' && unrepeatYears(item[i])){
                                    vm.years.push(item[i]);
                                }
                                // if (i === 'year' && unrepeatYears(item[i])){
                                //     vm.yearsForMonths.push(item[i]);
                                // }
                                item[i] = parseFloat(item[i]);
                                if (isNaN(item[i])) {
                                    item[i] = "";
                                }

                                if (i === 'month'){

                                    if (item[i] == 1){item[i]='Январь'}
                                    else if (item[i] == 2){item[i]='Февраль'}
                                    else if (item[i] == 3){item[i]='Март'}
                                    else if (item[i] == 4){item[i]='Апрель'}
                                    else if (item[i] == 5){item[i]='Май'}
                                    else if (item[i] == 6){item[i]='Июнь'}
                                    else if (item[i] == 7){item[i]='Июль'}
                                    else if (item[i] == 8){item[i]='Август'}
                                    else if (item[i] == 9){item[i]='Сентябрь'}
                                    else if (item[i] == 10){item[i]='Октябрь'}
                                    else if (item[i] == 11){item[i]='Ноябрь'}
                                    else if (item[i] == 12){item[i]='Декабрь'}

                                }
                            }
                            return item;
                        })
                }
            )
        }




    }


})();