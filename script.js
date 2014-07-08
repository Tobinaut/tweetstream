var tweetArray = [
	{text: "bla-bla", author: "me"},
	{text: "aaa-aaa", author: "me"},
	{text: "bla-bla", author: "me"},
	{text: "bla-bla", author: "me"},
];

$(document).ready(function() {
	var compiledTemplate = Handlebars.compile($('#template').html());
	for(var i in tweetArray) {
		$('.test').append(compiledTemplate(tweetArray[i]));	
	}
});
