var tweetArray = [
	{text: "bla-bla", author: "me"},
	{text: "aaa-aaa", author: "me"},
	{text: "bla-bla", author: "me"},
	{text: "bla-bla", author: "me"},
];

var template = '<div><h2>{{author}}: </h2><p>"{{text}}"<p></div>';
var compiledTemplate = Handlebars.compile(template); 

$(document).ready(function() {
	for(var i in tweetArray) {
		//var el = $('<div>');
		var el = $('<div>');
		//el.text(tweetArray[i].text);
		$('.test').append(compiledTemplate(tweetArray[i]));	
	}
});
