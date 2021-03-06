define(['backbone', 'config', 'jquery'], function (Backbone, Config, $) {
    var login = Backbone.Model.extend({
        defaults: {
            phoneNumber: 0000000000,
            password: 'password'
        },
        findByPhoneNumber: function (phoneNumber) {
            $.ajax({
                url: Config.path + '/voter',
                param: {
                    phoneNumber: phoneNumber
                }
            }).done(function (data) {
                console.log(data);
            });
        },
        url: Config.path + '/voter'
    });
    return login;
});