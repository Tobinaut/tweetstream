var tweetArray = [
	{text: "bla-bla", author: "me"},
	{text: "aaa-aaa", author: "me"},
	{text: "bla-bla", author: "me"},
	{text: "bla-bla", author: "me"},
];
$(document).ready(function() {
	for(var i in tweetArray) {
		var el = $('<div>');
		el.text(tweetArray[i].text);
		$('.test').append(el);	
	}
});
