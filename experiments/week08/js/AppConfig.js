        var app = angular.module("LoginApp", ["ngRoute"]);

        app.config(['$routeProvider', 
        function ($routeProvider) {
            console.log("in config");
            $routeProvider.
            when('/home', {
                templateUrl: '/pages/home.html'
            }).
            when('/profile/:name', {
                templateUrl: '/pages/profile.html',
                controller: 'ProfCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });
        } ]);
