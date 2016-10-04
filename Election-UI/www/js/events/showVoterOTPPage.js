define(['app'], function (App) {
    App.commands.setHandeler('voterOTP', function (voter, citizen) {
        require(['views/voterOTP', 'models/voterOTP'], function (VoterOTP, VoterOTPModel) {
            var OTP = new VoterOTPModel(),
                voterOTPView;
            App.Main.show(voterOTPView = new VoterOTP({
                model: OTP
            }));
            voterOTPView.listenTo(voterOTPView, 'confirmOTP', function () {
                    citizen.fetch({
                    data: {
                        data: voter.get('aadharNumber').replace(/\s/g, '')
                    }
                }).done(function () {
                    if (OTP.get('OTP') == citizen.get('OTP')) {
                        App.execute('setPassword', voter, citizen);
                        //OTP will be sent to citizen db and retrieved from there. Backend code yet to be implemented.
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