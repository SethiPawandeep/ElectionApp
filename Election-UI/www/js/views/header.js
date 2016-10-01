define(['marionette', 'tpl!templates/header'], function(Marionette, tplHeader){
    var headerView = Marionette.ItemView.extend({
        template: tplHeader,
        className: 'navbar navbar-default navbar-static-top row'
    });
    
    return headerView;
});