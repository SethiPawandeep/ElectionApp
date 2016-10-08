define(['app'], function (App) {
    App.commands.setHandler('headerShow', function () {

        require(['views/header'], function (HeaderView) {
            var headerView;
            App.Header.show(headerView = new HeaderView({}));
            headerView.listenTo(headerView, 'openHome', function () {
                App.execute('showHome');
            });
            headerView.listenTo(headerView, 'openCandidateList', function () {
                App.execute('candidateListDisplay');
            });
/*            headerView.listenTo(headerView, 'openVotePage', function () {
                App.execute('votePageDisplay');
            });*/
            /*headerView.listenTo(headerView, 'openResult', function(){
                App.execute('showHome'); 
            });*/
            headerView.listenTo(headerView, 'openVoterRegister', function () {
                App.execute('voterForm');
            });
        });
    });
});