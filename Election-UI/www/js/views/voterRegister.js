define(['marionette', 'tpl!templates/voterRegister', 'kendo/kendo.maskedtextbox'], function (Marionette, tplVoterRegister) {
    var voterRegister = Marionette.ItemView.extend({
        template: tplVoterRegister,
        bindings: {
            'input.firstName': 'first_name',
            'input.lastName': 'last_name',
            'input.aadharNumber': 'aadharNumber',
            'input.enrollmentId': 'enrollmentId',
            'input.phoneNumber': 'phoneNumber',
            'input.password': 'password'
        },
        ui: {
            EnrollmentId: 'input.enrollmentId',
            AadharNumber: 'input.aadharNumber',
            PhoneNumber: 'input.phoneNumber'
        },
        events: {
            'click input.btn.voterSignUp': 'onVoterSignUp'
        },
        onVoterSignUp: function (e) {
            console.log('signupClicked ' + e);
            this.trigger('signup');
        },
        onRender: function () {
            this.stickit();
            this.ui.EnrollmentId.kendoMaskedTextBox({
                mask: "0000/00000/00000",
                clearPromptChar: true
            });
            this.ui.AadharNumber.kendoMaskedTextBox({
                mask: "0000 0000 0000",
                clearPromptChar: true
            });
            this.ui.PhoneNumber.kendoMaskedTextBox({
                mask: "0000000000",
                clearPromptChar: true
            });
        }
    });

    return voterRegister;
});