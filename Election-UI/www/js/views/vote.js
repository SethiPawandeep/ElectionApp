define(['marionette', 'tpl!templates/vote'], function (Marionette, tplVote) {
    var voteListChild: Marionette.ItemView.extend({
        template: tplVote,
        templateHelpers: function({
            candidateListSize: this.options.candidateList.length,
            candidateList: this.option.candidateList
            
            return {candidateListSize}, {candidateList};
        });
        className: 'row-well'
    });

    return voteListChild;
});