$(document).ready(function (){
	var imgArr = $(".galery");
	var imgTotal = imgArr.length;
	var srcArr = []; //массив src фотографий
	for(var i=0; i<imgTotal; i++){
		srcArr.push(imgArr[i].attributes[1].nodeValue);
	}
	$('.galery').click(function (event) {
		$(".modal").css("display", "flex");
		var photo = $(this).attr('src');
		numberPhoto = $.inArray(photo, srcArr);
		$('<div class="madal-photo"></div>').appendTo(".modal");
	    $('<img src="'+photo+'" alt="">').appendTo(".madal-photo");
	    $('<div class="modal-close"></div>').appendTo(".madal-photo");
	    $('<div class="modal-left"></div>').appendTo(".madal-photo");
	    $('<div class="modal-right"></div>').appendTo(".madal-photo");
	    $("body, html").css({"overflow":"hidden"});
	    $(".modal-close").click(function(){
			$(".modal").css("display", "none");
			$(".madal-photo").detach();
			$("body, html").css({"overflow":"visible"});
		});
		$(".modal-right").click(function(){
			if (numberPhoto < (srcArr.length - 1)){
				numberPhoto++;
			} else{
				numberPhoto = 0;
			};
			$(".modal img").detach();
			$('<img src="'+srcArr[numberPhoto]+'" alt="">').appendTo(".madal-photo");
		});
		$(".modal-left").click(function(){
			if (numberPhoto > 0) {
				numberPhoto--;
			} else{
				numberPhoto = (srcArr.length - 1);
			};
			$(".modal img").detach();
			$('<img src="'+srcArr[numberPhoto]+'" alt="">').appendTo(".madal-photo");
		});
	});
	$("html").keydown(function(eventObject){
		if (event.keyCode == 27){
			$(".modal").css("display", "none");
			$(".madal-photo").detach();
			$("body, html").css({"overflow":"visible"});
		};
	});
	$("html").keydown(function(eventObject){
		if (event.keyCode == 39){
			if (numberPhoto < (srcArr.length - 1)){
				numberPhoto++;
			} else{
				numberPhoto = 0;
			};
			$(".modal img").detach();
			$('<img src="'+srcArr[numberPhoto]+'" alt="">').appendTo(".madal-photo");
		};
	});
	$("html").keydown(function(eventObject){
		if (event.keyCode == 37){
			if (numberPhoto > 0) {
				numberPhoto--;
			} else{
				numberPhoto = (srcArr.length - 1);
			};
			$(".modal img").detach();
			$('<img src="'+srcArr[numberPhoto]+'" alt="">').appendTo(".madal-photo");
		};
	});
});
