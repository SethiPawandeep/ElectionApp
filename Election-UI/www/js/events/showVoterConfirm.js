define(['backbone', 'app'], function (Backbone, App) {

    App.commands.setHandler('voterConfirm', function (voter, citizen) {

        require(['views/voterConfirm', 'models/voterConfirm'], function (VoterConfirmation, VoterConfirmModel) {
            var voterConfirmationView;
            App.Main.show(voterConfirmationView = new VoterConfirmation({
                model: citizen
            }));

            voterConfirmationView.listenTo(voterConfirmationView, 'confirm', function () {
                voter.save();
            });
        });
    });
});