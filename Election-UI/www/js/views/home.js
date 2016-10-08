define(['marionette', 'tpl!templates/home'], function (Marionette, tplHome) {
    var homeView = Marionette.ItemView.extend({
        template: tplHome,
        className: 'well',
        ui: {
            
        },
        events: {
            
        }
    });
    return homeView;
});