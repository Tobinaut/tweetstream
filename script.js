$(document).ready(function() {
	var compiledTemplate = Handlebars.compile($('#template').html());
	for(var i in tweetData) {
		$('.test').append(compiledTemplate(tweetData[i]));	
	}
});
