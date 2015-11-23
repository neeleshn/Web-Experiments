        app.controller("LoginCtrl", function ($scope, UserService) {
            console.log("in Login Contrl");
            $scope.user = null;
            $scope.validate = function () {
                var username = $scope.emailmodel;
                var password = $scope.passmodel;
                console.log("in validate");
                $scope.user = UserService.validate(username, password);
                console.log("after validate");
                console.log($scope.user);
                window.location = "/home/neelesh/experiments/week08/login3.html#/profile/" + $scope.user.name;
            }

            $scope.logoutFn = function () {
                $scope.user = null;
                $scope.passmodel = null;
                $scope.emailmodel = null;
                UserService.logoutFn();
                window.location = "/home/neelesh/experiments/week08/login3.html#/home";
            }
        });
