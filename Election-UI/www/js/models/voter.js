define(['backbone', 'config'], function (Backbone, Config) {
    var VoterModel = Backbone.Model.extend({
        defaults: {
            /*           first_name: 'First Name',
                       last_name: 'Last Name',
                       date_of_birth: '0000-00-00',
                       constituency: 'Constituency',
                       description: 'Description'*/
        }
    });
    return VoterModel;
});