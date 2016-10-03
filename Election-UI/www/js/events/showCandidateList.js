define(['app', 'models/candidate'], function (App, CandidateCollection) {
    App.commands.setHandler('candidateListDisplay', function () {
        require(['views/candidateList', 'backbone'], function (CandidateListDisplay, Backbone) {
            var candidates = new CandidateCollection();
            candidates.fetch();
            App.Main.show(new CandidateListDisplay({
                collection: candidates
            }));
        });
    });
});