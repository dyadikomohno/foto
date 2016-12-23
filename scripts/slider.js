$(function(){
	$('#slider').slides({
		preload: true,
		preloadImage: 'img/loading.gif',
		play: 4000,
		pause: 2500,
		auto: 2000,
		hoverPause: true,
		animationComplete: function(current){
			$('.caption').animate({
				bottom:0
			},200);
		},
		slidesLoaded: function() {
			$('.caption').animate({
				bottom:0
			},200);
		}
	});
});// JavaScript Document