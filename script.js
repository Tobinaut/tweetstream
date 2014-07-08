Handlebars.registerHelper('time', function(time) {
  return moment(time).fromNow();
});

$(document).ready(function() {
	var compiledTemplateStatistic = Handlebars.compile($('#statistic-template').html());
	var search_str = 'кошка';

	var count = _.filter(tweetData, function(obj) {
		return obj.text.indexOf(search_str) != -1;
	}).length; 

	var statsObj = {
		count: count, 
		search: search_str
	};
	$('.statistic').append(compiledTemplateStatistic(statsObj));
	var compiledTemplateTweets = Handlebars.compile($('#tweet-template').html());
	for(var i in tweetData) {
		$('.tweet').append(compiledTemplateTweets(tweetData[i]));	
	}
	$('.del-button').on('click', function () {
		$(this).closest('.tweet-css').remove();
	});
});

