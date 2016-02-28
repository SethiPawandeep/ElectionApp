define(['backbone', 'config', 'jquery'], function (Backbone, Config, $) {
    var citizen = Backbone.Model.extend({
        defaults: {
            uidi: 00000,
            enrollment_id1: 0000,
            enrollment_id2: 00000,
            enrollment_id3: 00000,
            first_name: 'First Name',
            last_name: 'Last Name',
            date_of_birth: '0000-00-00',
            address: 'Address',
            constituency: 'Constituency'
        },
        findByAadharNumber: function (aadharNumber) {
            $.ajax({
                url: Config.path + '/citizen',
                param: {
                    aadharNumber: aadharNumber
                }
            }).done(function (data) {
                console.log(data);
            });
        },
        url: Config.path + '/citizen'
    });

    return citizen;
});