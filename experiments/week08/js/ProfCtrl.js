        app.controller("ProfCtrl", function ($scope, UserService, $routeParams) {
            console.log("in profile Contrl");
            $scope.user = UserService.getUser();
        });
