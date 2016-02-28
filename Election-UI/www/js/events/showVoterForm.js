define(['app'], function (App) {
    App.commands.setHandler('voterForm', function () {
        require(['views/voterRegister', 'models/voter', 'models/citizen'], function (VoterRegister, VoterModel, CitizenModel) {


            var voter = new VoterModel(),
                citizen = new CitizenModel(),
                voterRegistrationView;
            App.Main.show(voterRegistrationView = new VoterRegister({
                model: voter
            }));
            voterRegistrationView.listenTo(voterRegistrationView, 'signup', function () {
                citizen.fetch({
                    data: {
                        findByUIDI: voter.get('aadharNumber').replace(/\s/g, '')
                    }
                }).done(function () {
                    var enId = voter.get('enrollmentId').split('/');
                    if (voter.get('first_name') === citizen.get('first_name') &&
                        voter.get('last_name') == citizen.get('last_name') &&
                        enId[0] == citizen.get('enrollment_id1') &&
                        enId[1] == citizen.get('enrollment_id2') &&
                        enId[2] == citizen.get('enrollment_id3')) {
                        App.execute('voterConfirm', voter, citizen);
                    } else {
                        alert('invalid credentials')
                    }
                }).fail(function () {
                    alert('invalid credentials error communicating with server');
                });
            });

        });

        // alert('Hi ' + voter.get('name') + ', we dont save the voter model yet... but working on it. :D');
        //   the voter model has all the details after the form was filled out. Should be able to do voter.save() once backend has the post implemented.
        //    }
    });
});