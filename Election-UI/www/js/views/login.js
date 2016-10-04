define(['marionette', 'tpl!templates/login'], function (Marionette, tplLogin) {
    var login = Marionette.ItemView.extend({
        template: tplLogin,
        bindings: {
            'input.phoneNumber': 'phoneNumber',
            'input.password': 'password'
        },
        events: {
            'click input.btn.voterLogin': 'onVoterLogin'
        },
        onVoterLogin: function(e) {
            console.log('loginClicked ' + e);
            this.trigger('login');
        }
    });
    return login;
});