define(['marionette'], function(Marionette) {
    var App = Marionette.Application.extend({
        initialize: function () {
            console.log('Application Initialized');
        },
        onStart: function(){
            console.log('Application Started!');
        },
        regions: {
            Header: 'div.header',
            //Home: 'div.home',
 //           Form: 'div.form',
            Main: 'div.main'
        }
    });
    
    return (new App());
});