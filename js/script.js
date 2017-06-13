$(function(){
	footer();
	expandArea(".web-dev-planet", "#web-dev-gallery");
	expandArea(".graphic-design-planet", "#graphic-design-gallery");
	smoothScroll();
	
	imageOverlayWithPic();
	
	$(window).resize(function(){
		footer();
	});
});

function footer(){ //Place footer @ bottom of page
	$(window).bind("load", function () {
		var footer = $("#footer");
		var pos = footer.position();
		var height = $(window).height();
		height = height - pos.top;
		height = height - footer.height();
		if (height > 0) {
			footer.css({
				'margin-top': height + 'px'
			});
		}
	});
}

function expandArea(controller, toExpand){
	controller = $(controller);
	toExpand = $(toExpand);
	
	controller.click(function(){
		$(toExpand).slideToggle( "slow", function() {
    // Animation complete.
		});
	});
}

function imageOverlayWithPic(){
	$(".th img").click(function(){
		profileBio(this);
		var $img = $(this);
		$("#large-img").html($img.clone()).add($('#overlay')).add($('#profile')).fadeIn();
		$("#large-img, #overlay, #profile").click(function(){
			$("#large-img").add($('#overlay')).add($('#profile')).fadeOut(function(){
				$("#large-img").add($('#overlay')).empty();
			});
		});
	});
}
function imageOverlayNoPic(){
	$(".th img").click(function(){
		profileBio(this);
		var $img = $(this);
		$('#overlay').add($('#profile')).fadeIn();
		$("#overlay, #profile").click(function(){
			$('#overlay').add($('#profile')).fadeOut(function(){
				$('#overlay').empty();
			});
		});
	});
}

function profileBio(name){
	var alt = $(name).attr("alt");
	$('.bio-title').html("<p>"+alt+"</p>");
	var url = "js/ajax/bioHandler.php";
	$.post(url , {name: alt}, function(data){
		//alert(data);
		
		$("#bio").html(data);
	});
}

function smoothScroll(){
	$('a[href*="#"]:not([href="#"])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
			return false;
		}
	}
});
}



/*
// countdown functionality
//implement using <span id="countdown"></span>
var end = new Date('04/28/2016 11:1 AM');
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
    var now = new Date();
    var distance = end.getTime()-now.getTime();
    if (distance < 0) {

        clearInterval(timer);
        document.getElementById('countdown').innerHTML = "Time's Up! Join us at the Botanical Center today!";

        return;
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    document.getElementById('countdown').innerHTML = days;
    document.getElementById('countdown').innerHTML += " : " + hours;
    document.getElementById('countdown').innerHTML += " : " + minutes;
    document.getElementById('countdown').innerHTML += " : " + seconds;
}
timer = setInterval(showRemaining, 1000);*/