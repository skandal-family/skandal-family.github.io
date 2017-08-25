// Меню
$(".menu-btn").on('click', function() {
	$(".menu-btn").toggleClass("on");
	$(".menu-logo").toggleClass("on");
	$(".menu").toggleClass('flex-menu');
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
//Альбомы
$(document).ready(function(){
    $(".album1").click(function(){
    	$(".audiojs").detach();
		$(".luna-park").detach();
		$(".ne-vidno").detach();
		$(".live-2016").detach();
		$(".music-main .album1").css('border-bottom', '5px solid green');
		$(".music-main .album2").css('border-bottom', '5px solid red');
		$(".music-main .album3").css('border-bottom', '5px solid red');
    	$('<li class="luna-park"><a href="#" data-src="../mp3/(Луна-парк)_Ответ_эстраде.mp3">Ответ эстраде</a></li>').appendTo(".play-list-album");
    	$('<li class="luna-park"><a href="#" data-src="../mp3/(Луна-парк)_99_Воздушных_шаров_(bonus).mp3">99 Воздушных шаров</a></li>').appendTo(".play-list-album");
    	$('<li class="luna-park"><a href="#" data-src="../mp3/(Луна-парк)_Луна-парк.mp3">Луна-парк</a></li>').appendTo(".play-list-album");
    	$('<li class="luna-park"><a href="#" data-src="../mp3/(Луна-парк)_В_путь.mp3">В путь</a></li>').appendTo(".play-list-album");
    	$('<li class="luna-park"><a href="#" data-src="../mp3/(Луна-парк)_Гимн_художника.mp3">Гимн художника</a></li>').appendTo(".play-list-album");
    	$('<li class="luna-park"><a href="#" data-src="../mp3/(Луна-парк)_Мери_Рид.mp3">Мери Рид</a></li>').appendTo(".play-list-album");
    	$('<li class="luna-park"><a href="#" data-src="../mp3/(Луна-парк)_Не_жалей.mp3">Не жалей</a></li>').appendTo(".play-list-album");
    	$('<li class="luna-park"><a href="#" data-src="../mp3/(Луна-парк)_Новая_жизнь.mp3">Новая жизнь</a></li>').appendTo(".play-list-album");
    	$('<li class="luna-park"><a href="#" data-src="../mp3/(Луна-парк)_Потеряно_время.mp3">Потеряно время</a></li>').appendTo(".play-list-album");
    	$('<li class="luna-park"><a href="#" data-src="../mp3/(Луна-парк)_Ролики.mp3">Ролики</a></li>').appendTo(".play-list-album");
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
    });
    $(".album2").click(function(){
    	$(".audiojs").detach();
		$(".luna-park").detach();
		$(".ne-vidno").detach();
		$(".live-2016").detach();
		$(".music-main .album1").css('border-bottom', '5px solid red');
		$(".music-main .album2").css('border-bottom', '5px solid green');
		$(".music-main .album3").css('border-bottom', '5px solid red');
    	$('<li class="ne-vidno"><a href="#" data-src="../mp3/(Не_видно)_Долларов_нету.mp3">Долларов нету</a></li>').appendTo(".play-list-album");
    	$('<li class="ne-vidno"><a href="#" data-src="../mp3/(Не_видно)_Не_видно.mp3">Не видно</a></li>').appendTo(".play-list-album");
    	$('<li class="ne-vidno"><a href="#" data-src="../mp3/(Не_видно)_Новогодняя.mp3">Новогодняя</a></li>').appendTo(".play-list-album");
    	$('<li class="ne-vidno"><a href="#" data-src="../mp3/(Не_видно)_Смысл.mp3">Смысл</a></li>').appendTo(".play-list-album");
    	$('<li class="ne-vidno"><a href="#" data-src="../mp3/(Не_видно)_Соседка.mp3">Соседка</a></li>').appendTo(".play-list-album");
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
    });
    $(".album3").click(function(){
    	$(".audiojs").detach();
		$(".luna-park").detach();
		$(".ne-vidno").detach();
		$(".live-2016").detach();
		$(".music-main .album1").css('border-bottom', '5px solid red');
		$(".music-main .album2").css('border-bottom', '5px solid red');
		$(".music-main .album3").css('border-bottom', '5px solid green');
		$('<li class="live-2016"><a href="#" data-src="../mp3/(Live_2016)_Луна-парк.mp3">Луна-парк</a></li>').appendTo(".play-list-album");
		$('<li class="live-2016"><a href="#" data-src="../mp3/(Live_2016)_Потеряно_время.mp3">Потеряно время</a></li>').appendTo(".play-list-album");
		$('<li class="live-2016"><a href="#" data-src="../mp3/(Live_2016)_Ролики.mp3">Ролики</a></li>').appendTo(".play-list-album");
		$('<li class="live-2016"><a href="#" data-src="../mp3/(Live_2016)_Новогодняя.mp3">Новогодняя</a></li>').appendTo(".play-list-album");
		$('<li class="live-2016"><a href="#" data-src="../mp3/(Live_2016)_Не_видно.mp3">Не видно</a></li>').appendTo(".play-list-album");
		$('<li class="live-2016"><a href="#" data-src="../mp3/(Live_2016)_Улыбка.mp3">Улыбка</a></li>').appendTo(".play-list-album");
		$('<li class="live-2016"><a href="#" data-src="../mp3/(Live_2016)_Утренняя.mp3">Утренняя</a></li>').appendTo(".play-list-album");
		$('<li class="live-2016"><a href="#" data-src="../mp3/(Live_2016)_Ответ_Эстраде.mp3">Ответ эстраде</a></li>').appendTo(".play-list-album");
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
    });
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