define(['app'], function (App) {
    App.commands.setHandler('showHome', function () {
        require(['views/home'], function (HomeView) {
            App.Home.show(new HomeView({

            }));
        });
    });
});