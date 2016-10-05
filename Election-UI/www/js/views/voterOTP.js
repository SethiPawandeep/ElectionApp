define(['marionette', 'tpl!templates/voterOTP', 'kendo/kendo.maskedtextbox'], function (Marionette, tplVoterOTP) {
    var voterOTP = Marionette.ItemView.extend({
        template: tplVoterOTP,
        bindings: {
            'input.OTP': 'OTP'
        },
        ui: {
            OTP: 'input.OTP'
        },
        events: {
            'click input.btn.voterOTPClick': 'onVoterOTPClick'
        },
        onVoterOTPClick: function (e) {
            console.log('Confirm OTP ' + e);
            this.trigger('confirmOTP');
        },
        onRender: function () {
            this.stickit();
            this.ui.OTP.kendoMaskedTextBox({
                mask: "000000",
                clearPromptChar: true
            });
        }
    });
    return voterOTP;
});