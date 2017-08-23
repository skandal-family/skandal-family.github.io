// Меню
$(".menu-btn").on('click', function() {
	$(".menu-btn").toggleClass("on");
	$(".menu-logo").toggleClass("on");
	$(".menu").toggleClass('flex-menu');
});
// Музыка
$(function() {
	// Setup the player to autoplay the next track
	var a = audiojs.createAll({
		trackEnded: function() {
			var next = $('ol li.playing').next();
			if (!next.length) next = $('ol li').first();
			next.addClass('playing').siblings().removeClass('playing');
			audio.load($('a', next).attr('data-src'));
			audio.play();
		}
	});
	// Load in the first track
	var audio = a[0];
	first = $('ol a').attr('data-src');
	$('ol li').first().addClass('playing');
	audio.load(first);
	// Load in a track on click
	$('ol li').click(function(e) {
		e.preventDefault();
		$(this).addClass('playing').siblings().removeClass('playing');
		audio.load($('a', this).attr('data-src'));
		audio.play();
	});
});
//Видео
$('.play-btn').click( function() {
	var myVideo = document.getElementById("youtube-index"); 
    myVideo.play();
    $(".play-btn").css("display", "none");
    $(".pause-btn").css("display", "block");
});
$('.pause-btn').click( function() {
	var myVideo = document.getElementById("youtube-index"); 
    myVideo.pause();
    $(".pause-btn").css("display", "none");
    $(".play-btn").css("display", "block");
});