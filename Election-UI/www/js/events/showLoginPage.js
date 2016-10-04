define(['app'], function (App) {
    App.commands.setHandler('login', function () {
        require(['views/login', 'models/login', 'models/voter'], function (Login, LoginModel, VoterModel) {
            var voter = new VoterModel(),
                login = new LoginModel(),
                loginView;
            App.Main.show(loginView = new Login({
                model: login
            }));
            loginView.listenTo(loginView, 'login', function () {
                voter.fetch({
                    data: {
                        findByPhoneNumber: login.get('phoneNumber');
                    }
                }).done(function () {
                    if (voter.get('password') === login.get('password') &&
                        voter.get('phoneNumber') === login.get('phoneNumber')) {
                        App.execute('showHome', voter);
                    } else {
                        alert('Invalid credentials!!');
                    }
                }).fail(function () {
                    alert('Error communicating with server');
                });
            });
        });
    });
});