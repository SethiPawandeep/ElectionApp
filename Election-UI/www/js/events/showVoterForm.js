define(['app', 'models/citizen' /*, 'events/voterConfirm'*/ ], function (App, CitizenDetails /*, VoterConfirm*/ ) {
    App.commands.setHandler('voterForm', function () {
        require(['views/voterRegister', 'models/voter' /*, 'models/citizen'*/ ], function (VoterRegister, VoterModel /*, CitizenModel*/ ) {


            //            var citizen = new CitizenModel(),
            //                citizenConfirmationView;
            //            App.Main.show(citizenConfirmationView = new VoterConfirm({
            //                model: citizen
            //            }));
            //
            //


            var voter = new VoterModel(),
                voterRegistrationView;
            App.Main.show(voterRegistrationView = new VoterRegister({
                model: voter
            }));
            voterRegistrationView.listenTo(voterRegistrationView, 'signup', function () {
                citizen.fetch();

                if (voter.get('first_name') == first_name && voter.get('last_name') == last_name && voter.get('enrollment_id1') == enrollment_id1 && voter.get('enrollment_id2') == enrollment_id2 && voter.get('enrollment_id3') == enrollment_id3 && voter.get('aadharNumber') == UIDI) {
                    require(['events/showVoterConfirm'], function (VoterConfirm) {

                    });
                }
            });

            // alert('Hi ' + voter.get('name') + ', we dont save the voter model yet... but working on it. :D');
            //   the voter model has all the details after the form was filled out. Should be able to do voter.save() once backend has the post implemented.
            //    }
        });
    });
});