Handlebars.registerHelper('time', function(time) {
  return moment(time).fromNow();
});
function init(){     
	var myMap = new ymaps.Map("map", {
		center: [55.76, 37.64],
		zoom: 7
	});
	var compactArr = _.compact(_.pluck(tweetData, 'geo'));
	for(var i in compactArr) {
		var myPlacemark = new ymaps.Placemark([compactArr[i].coordinates[0], compactArr[i].coordinates[1]], {});
		myMap.geoObjects.add(myPlacemark);
	}
	
	var myPlacemark = new ymaps.Placemark([55.76, 37.64], { 
            hintContent: 'Москва!', 
            balloonContent: 'Столица России' 
        });
};
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
	ymaps.ready(init);   
});

