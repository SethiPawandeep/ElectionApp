define(['app'], function (App) {
    App.commands.setHandler('voterForm', function () {
        require(['views/voterRegister', 'models/voter', 'models/citizen'], function (VoterRegister, VoterModel, CitizenModel) {
            var voter = new VoterModel(),
                citizen = new CitizenModel(),
                voterRegistrationView;
            App.Main.show(voterRegistrationView = new VoterRegister({
                model: voter
            }));
            console.log(voter);
            voterRegistrationView.listenTo(voterRegistrationView, 'signup', function () {
//                console.log(voter);
                citizen.fetch({
                    data: {
                        findByUIDI: voter.get('aadharNumber').replace(/\s/g, '')
                    }
                }).done(function () {
                    var enId = voter.get('enrollmentId').split('/');
                    if (voter.get('first_name') === citizen.get('first_name') &&
                        voter.get('last_name') === citizen.get('last_name') &&
                        voter.get('phoneNumber') === citizen.get('phone_number') &&
                        enId[0] == citizen.get('enrollment_id1') &&
                        enId[1] == citizen.get('enrollment_id2') &&
                        enId[2] == citizen.get('enrollment_id3')) {
                        App.execute('setPassword', voter);
                    } else {
                        alert('Invalid credentials.');
                    }
                }).fail(function () {
                    alert('Invalid credentials. Error communicating with server');
                });
            });
        });
    });
});