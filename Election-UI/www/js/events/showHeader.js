define(['app'], function (App) {
    App.commands.setHandler('headerShow', function () {

        require(['views/header'], function (HeaderView) {

            App.Header.show(new HeaderView({

            }));
        });
    });
});