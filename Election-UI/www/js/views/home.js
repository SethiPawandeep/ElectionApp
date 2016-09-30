define(['marionette', 'tpl!templates/home'], function (Marionette, tplHome) {
    var homeView = Marionette.ItemView.extend({
        template: tplHome,
        className: 'header-nav'
    });
    
    return homeView;
});