var tweetArray = [
	{text: "bla-bla", author: "me"},
	{text: "aaa-aaa", author: "me"},
	{text: "bla-bla", author: "me"},
	{text: "bla-bla", author: "me"},
];
$(document).ready(function() {
	for(var i in tweetArray) {
		var s = '<div><h2>' + tweetArray[i].author + ': '+ '</h2><p>"' + tweetArray[i].text + '"<p></div>'; 
		//var el = $('<div>');
		//el.text(tweetArray[i].text);
		$('.test').append(s);	
	}
});
