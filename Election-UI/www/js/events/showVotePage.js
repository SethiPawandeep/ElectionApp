define(['app', 'model/vote'], function(App, VoteCollection){
    App.commands.sethandler('votePageDisplay', function(){
       require(['views/vote', 'backbone'], function(VoteView, Backbone){
           var list = new VoteCollection();
           list.fetch();
           App.main.show(new VoteView({
               collection: list
           }));
       }) ;
    });
    
});