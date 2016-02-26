define(['backbone', 'config', 'jQuery'], function (Backbone, Config, $) {
    var voteModel = Backbone.Model.extend({
        defaults: {
            candidate_id: '0',
            first_name: 'FirstName',
            last_name: 'LastName'
        },

        voteByCandidateId: function (candidate_id) {
            $.ajax({
                url: Config.path + '/vote',
                param: {
                    candidate_id: candidate_id
                }
            }).done(function (data) {
                console.log(data);
            });
        },
        url: Config.path + '/vote'
    });
    var voteCollectionModel = Backbone.Collection.extend({
        model: voteModel,
        url: Config.path + '/vote'
    });

    return voteCollectionModel;
});