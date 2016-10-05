define(['app', 'model/candidate'], function(App, CandidateCollection){
    App.commands.setHandler('votePageDisplay', function(voter){
       require(['views/vote', 'backbone'], function(VoteView, Backbone){
           var list = new CandidateCollection();
           list.fetch();
           //Display only those candidates which are from the voter's constituency
           App.Main.show(new VoteView({
               collection: list
           }));
       }) ;
    });
    
});