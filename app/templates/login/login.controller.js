;(function () {
    'use strict';
    angular.module('app')
        .controller('LoginController', LoginController);
    LoginController.$inject = ['$state', '$localStorage'];

    function LoginController($state, $localStorage) {
        let vm = this;
        vm.user={
            mail:"",
            password:""
        }

        vm.login=login;
        vm.registrate=registrate;
        vm.validMail=validMail;
        vm.validMail2=validMail2;
        vm.validPass=validPass;
        vm.validPass2=validPass2;

        function login() {
            for(var i=0;i<$localStorage.userData.length;i++){
                if ($localStorage.userData[i].mail==vm.user.mail && $localStorage.userData[i].password==vm.user.password)
            {
                $state.go('home');
                return;
            }}

        }

        function registrate() {

            $localStorage.userData.push({mail:vm.user.mail, password:vm.user.password});
            $state.go('home')
        }
        
        function validMail() {
            vm.monstro=' must have this symbol - "@"'
        }
        function validMail2() {
            vm.monstro=' '
        }
        function validPass() {
            vm.zombi=' must have a number '
        }
        function validPass2() {
            vm.zombi=' '
        }
    }
})();