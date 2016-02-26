define(['marionette', 'tpl!templates/vote'], function (Marionette, tplVote) {
    var voteListChild: Marionette.ItemView.extend({
        template: tplVote,
        templateHelpers: function(){
            var that = this;
            return {
                candidateList: that.options.candidateList,
                candidateListSize: that.options.candidateListSize
            };
        }
        className: 'row-well'
    });

    return voteListChild;
});