define(['marionette', 'tpl!templates/voterDetailConfirm'], function (Marionette, tplVoterConfirm) {
    var voterConfirm = Marionette.ItemView.extend({
        template: tplVoterConfirm,
        bindings: {
            'input.firstName': 'first_name',
            'input.lastName': 'last_name',
            'input.aadharNumber': 'aadharNumber',
            'input.enrollmentId': 'enrollmentId',
            'input.phoneNumber': 'phoneNumber',
            'input.passowrd': 'password'
        },
        events: {
            'click input.btn.voterConfirm': 'onVoterConfirm'
        },
        onVoterConfirm: function (e) {
            confirm.log('Confirm Clicked' + e);
            this.trigger('confirm');
        }
    });
    return voterConfirm;
});