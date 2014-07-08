Handlebars.registerHelper('time', function(time) {
  return moment(time).fromNow();
});

function find(search_str, obj) {
	return obj.text.indexOf(search_str) != -1;
};
$(document).ready(function() {
	var compiledTemplateStatistic = Handlebars.compile($('#statistic-template').html());
	var search_str = 'кошка';
	var statsObj = {
		count:_.filter(tweetData, find.bind(null, search_str)).length, 
		search: search_str
	};
	$('.statistic').append(compiledTemplateStatistic(statsObj));
	var compiledTemplateTweets = Handlebars.compile($('#tweet-template').html());
	for(var i in tweetData) {
		$('.tweet').append(compiledTemplateTweets(tweetData[i]));	
	}
});

