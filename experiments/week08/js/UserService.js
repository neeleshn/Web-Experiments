        app.factory("UserService", function () {
            var logins = [{ mail: "neelesh1@gmail.com", pass: "password", name: "Neelesh1", player: "Messi" },
                          { mail: "neelesh2@gmail.com", pass: "password", name: "Neelesh2", player: "Suarez" },
                          { mail: "neelesh3@gmail.com", pass: "password", name: "Neelesh3", player: "Neymar"}];

            var user = null;
            console.log("in factory");

            var validate = function (username, password) {
                console.log("in userservice validate");
                var flag = 0;
                for (var i = 0; i < logins.length; i++) {
                    if (username == logins[i].mail && password == logins[i].pass) {
                        user = logins[i];
                        return user;
                    }
                }
                return null;
            }

            var logoutFn = function () {
                user = null;
            }

            var getUser = function () {
                return user;
            }

            return {
                validate: validate,
                logoutFn: logoutFn,
                getUser: getUser
            }
        });
