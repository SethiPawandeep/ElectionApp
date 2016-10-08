define(['backbone', 'config'], function (Backbone, Config) {
    var VoterModel = Backbone.Model.extend({
        defaults: {
        },
        url: Config.path + '/voter'
    });
    return VoterModel;
});
