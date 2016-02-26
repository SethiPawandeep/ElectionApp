define(['app', 'models/citizen'/*, 'events/voterConfirm'*/], function (App, CitizenModel/*, VoterConfirm */) {
    App.commands.setHandler('voterForm', function () {
        require(['views/voterRegister', 'models/voter'], function (VoterRegister, VoterModel) {

//            var citizen = new CitizenModel(),
//                citizenConfirmationView;
//            App.Main.show(citizenConfirmationView = new VoterConfirm({
//                model: citizen
//            }));

            var voter = new VoterModel(),
                voterRegistrationView;
            App.Main.show(voterRegistrationView = new VoterRegister({
                model: voter
            }));
            voterRegistrationView.listenTo(voterRegistrationView, 'signup', function () {
//                citizen.fetch();

//                if (voter.get('first_name') == citizen.options.first_name && voter.get('last_name') == citizen.options.last_name && voter.get('enrollment_id1') == citizen.options.enrollment_id1 && voter.get('enrollment_id2') == citizen.options.enrollment_id2 && voter.get('enrollment_id3') == citizen.options.enrollment_id3 && voter.get('aadharNumber') == citizen.options.UIDI) {
//                    
//                    voter.save();
//                }
                    });
                
            });

            // alert('Hi ' + voter.get('name') + ', we dont save the voter model yet... but working on it. :D');
            //   the voter model has all the details after the form was filled out. Should be able to do voter.save() once backend has the post implemented.
            //    }
        });
    });
