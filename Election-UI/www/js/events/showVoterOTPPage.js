define(['app'], function (App) {
    App.commands.setHandeler('voterOTP', function (voter, citizen) {
        require(['views/voterOTP', 'models/voterOTP'], function (VoterOTP, VoterOTPModel) {
            var OTP = new VoterOTPModel(),
                voterOTPView;
            App.Main.show(voterOTPView = new VoterOTP({
                model: voter
            }));
            voterOTPView.listenTo(voterOTPView, 'confirmOTP', function () {
                OTP.fetch({
                    data: {
                        data: voter.get('aadharNumber').replace(/\s/g, '')
                    }
                }).done(function () {
                    if (OTP.get('OTP') == ) {
                        //To be completed
                        App.execute('setPassword', voter, citizen);
                    } else {
                        alert('Invalid credentials');
                    }
                }).fail(function () {
                    alert('Error communicating to server');
                });
            });
        });
    });
});