define(['app'], function (App) {
    App.commands.setHandler('showHome', function () {
        require(['views/home'], function (HomeView) {
            App.Main.show(new HomeView({}));
        });
    });
});