var parseResults = function(results){
  $(".search-results").empty();
  var searchResults = results.data.children;
  _.templateSettings.variable = "searchResults";

  var template = _.template(
          $( "script.template" ).html()
  );

  var templateData = searchResults;

  $("#reddit-search-form").after(
    template( templateData )
  );
};

var bindListener = function(){
  $("#reddit-search-form").submit(function(event){
    event.preventDefault();
    var input = $(event.currentTarget).find("#search-value").val();


    $.getJSON( "http://www.reddit.com/search.json?q=" + input + "?type=link", function( results ) {
      parseResults(results);
    });
  });
}
