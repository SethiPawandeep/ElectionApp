define(['marionette', 'tpl!templates/header'], function(Marionette, tplHeader){
    var headerView = Marionette.ItemView.extend({
        template: tplHeader,
        className: 'navbar navbar-default navbar-static-top row',
        ui: {
            homeLink: 'a.homeLink',
            candidateLink: 'a.candidateLink',
            voteLink: 'a.voteLink',
            registerLink: 'a.registerLink',
            resultLink: 'a.resultLink'
        },
        events: {
            'click @ui.homeLink': 'openHome',
            'click @ui.candidateLink': 'openCandidateList',
            'click @ui.voteLink': 'openVotePage',
            'click @ui.registerLink': 'openVoterRegister',
            'click @ui.resultLink': 'openResult'
        },
        openHome: function(e) {
            this.trigger('openHome');
            e.preventDefault();
        },
        openCandidateList: function(e) {
            this.trigger('openCandidateList');
            e.preventDefault();
        },
        openVotePage: function(e) {
            this.trigger('openVotePage');
            e.preventDefault();
        },
        openResult: function(e) {
            this.trigger('openResult');
            e.preventDefault();
        },
        openVoterRegister: function(e) {
            this.trigger('openVoterRegister');
            e.preventDefault();
        }
    });
    
    return headerView;
});