require.config({
    baseUrl: 'js',
    paths: {
        backbone: 'lib/backbone/backbone',
        "backbone.babysitter": 'lib/backbone.babysitter/lib/backbone.babysitter',
        marionette: 'lib/backbone.marionette/lib/core/backbone.marionette',
        "backbone.wreqr": 'lib/backbone.wreqr/lib/backbone.wreqr',
        jquery: 'lib/jquery/dist/jquery',
        tpl: 'lib/requirejs-tpl/tpl',
        text: 'lib/text/text',
        underscore: 'lib/underscore/underscore',
        bootstrap: 'lib/bootstrap/dist/js/bootstrap',
        stickit: 'lib/backbone.stickit/backbone.stickit',
        kendo: 'lib/kendo/js'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    },
    tpl: {
        templateSettings: {
            evaluate: /\{\[([\s\S]+?)\]\}/g,
            interpolate: /\{\{([\s\S]+?)\}\}/g,
            escape: /\{\(([\s\S]+?)\)\}/g
        }
    }
});

require(['app', 'events/main', 'bootstrap', 'stickit'], function (App) {
    App.start();

    App.execute('headerShow');
    App.execute('showHome');
    //  App.execute('voterForm');
    //  App.execute('voterOTP');
    //    App.execute('setPassword');
//    App.execute('login');
    //   App.execute('candidateListDisplay');

    /*   App.Main.show(new WelcomeView({
           collection: new Backbone.Collection([{
               firstName: 'Arvind',
               lastName: 'Kejriwal',
               dateOfBirth: '1997-09-09',
               constituencyName: 'Delhi',
               descriptionShort: 'asdf asdf asdf'
           }, {
               firstName: 'Narendra',
               lastName: 'Modi',
               dateOfBirth: '1997-08-09',
               constituencyName: 'Delhi',
               descriptionShort: 'qwerty asdf asdf asdf'
               
           }, {
               firstName: 'Arun',
               lastName: 'Jaitley',
               dateOfBirth: '1996-09-09',
               constituencyName: 'Kolkata',
               descriptionShort: 'asdf asdf asdf'
           }])*/
    //    }));
});