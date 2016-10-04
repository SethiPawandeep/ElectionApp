define(['backbone', 'config', 'jquery'], function (Backbone, Config, $) {
   var voterOTP = Backbone.Model.extend({
      /*defaults: {
          uidi: 000000,
          phoneNumber: 0000000000,
          OTP: 000000
      },
        findByAadharNumber: function(aadharNumber) {
            $.ajax({
                url: Config.path + '/voterOTP',
                param: {
                    aadharNumber: aadharNumber
                }
            }).done(function(data){
                    console.log(data);
                    });
        },
       url: Config.path + '/voterOTP'*/
   }); 
    return voterOTP;
});