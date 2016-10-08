define(['marionette', 'tpl!tpl/candidateList.html'], function (Marionette, tplCandidate) {
    var candidateDetails = Marionette.ItemView.extend({
        template: tplCandidate,
        className: 'row well'
    });
    return candidateDetails;
});