define(['marionette', 'tpl!templates/home'], function (Marionette, tplHome) {
    var homeView = Marionette.ItemView.extend({
        template: tplHome,
        className: 'jumbotron'
    });
    return homeView;
});