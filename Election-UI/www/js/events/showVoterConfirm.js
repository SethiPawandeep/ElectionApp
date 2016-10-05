define(['backbone', 'app'], function (Backbone, App) {
    App.commands.setHandler('setPassword', function (voter, citizen) {
        require(['views/voterDetailConfirmAndSetPassword', 'models/voterConfirm'], function (VoterConfirmation, VoterConfirmModel) {
            var voterConfirmationView;
            App.Main.show(voterConfirmationView = new VoterConfirmation({
                model: voter //doubt
            }));
            voterConfirmationView.listenTo(voterConfirmationView, 'confirm', function () {
                voter.save();
            });
        });
    });
});