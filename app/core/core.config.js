;(function () {
    angular
        .module('app')
        .config(mainConfig)
    // .config(['$mdIconProvider', function ($mdIconProvider) {
    //     $mdIconProvider
    //         .iconSet('social', 'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content-symbol.svg', 24)
    //         .defaultIconSet('bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content-symbol.svg', 24);
    // }]);

    mainConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function mainConfig($stateProvider, $urlRouterProvider) {


        $urlRouterProvider.otherwise('/login');

        $stateProvider

            .state('login', {
                url: '/login',
                templateUrl: 'templates/login/login.html',
                controller: 'LoginController',
                controllerAs: 'vm',

            })

            .state('home', {
                url: '/home',
                templateUrl: 'templates/homepage/homepage.html',
                controller: 'HomepageController',
                controllerAs: 'vm',
                resolve: {
                    // data: function (weather) {
                    //     return weather.get({
                    //             q: 'Poltava,UA',
                    //             appid: '264a4855a3aeeb5196ff38e3d006cbe9',
                    //             mode: 'json',
                    //             units: 'metric'
                    //         })
                    //         .then(function (res) {
                    //             return res;
                    //         })
                    // }
            //     data: function (weather) {
            // return weather.get({})
            //     .then(function (res) {
            //         return res;
            //         },function (res) {
            //             return res;
            //         } )
            //     },
                getCities: function (cities) {
                        return cities.get()
                            .then(function (res) {
                                return res;
                            },function (res) {
                            } )
                    }
                }
            })


            // .state('dashboard', {
            //     url: '/dashboard',
            //     templateUrl: 'templates/dashboard/dashboard.html',
            //     controller: 'SelectHeaderController',
            //     controllerAs: 'vm',
            //
            // })

    }


})();

