define(['backbone', 'app'], function (Backbone, App) {
    App.commands.setHandler('setPassword', function (voter, citizen) {
        require(['views/voterDetailConfirmAndSetPassword', 'models/voterConfirm'], function (VoterConfirmation, VoterConfirmModel) {
            var voterConfirmationView,
                voterSave = new VoterConfirmModel();

            App.Main.show(voterConfirmationView = new VoterConfirmation({
                model: voter
            }));
            voterConfirmationView.listenTo(voterConfirmationView, 'confirm', function () {
                console.log('Triggered ;) asldkfjhasd');
                voter.save();
            });
        });
    });
});