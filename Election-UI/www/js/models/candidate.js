define(['backbone', 'config', 'jquery'], function (Backbone, Config, $) {
    var candidateModel = Backbone.Model.extend({
        defaults: {
            first_name: 'First Name',
            last_name: 'Last Name',
            date_of_birth: '0000-00-00',
            constituency: 'Constituency',
            description: 'Description'
        },
        findByFirstName: function (first_name) {
            $.ajax({
              url: Config.path + '/candidate',
                params: {
                    first_name: first_name
                }
            }).done(function(data){
               console.log(data);
                console.log('candidate fetch ho gaya');
            });
        }
    });
    var candidateModelCollection = Backbone.Collection.extend({
        model: candidateModel,
        url: Config.path + '/candidate'
    });

    return candidateModelCollection;
});