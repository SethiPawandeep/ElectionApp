define(['marionette', 'tpl!templates/voterDetailConfirm'], function(Marionette, tplVoterConfirm){
    var voterConfirm = Marionette.ItemView.extend({
        template: tplVoterConfirm,
        triggers:{
            'click.voterConfirm': 'confirm'
        }
    });
    
    return voterConfirm;
});