	console.log("hi");
var filtered = {
	"all": 1,
	"writing": 1,
	"code": 1,
	"graphics": 1,
	"social": 1

}
$(document).ready(function() {
	var element = document.getElementsByClassName("slide");
	console.log(element);
	/*
	for (var i = 0; i < element.length; i++) {
		element[i].style.height=500;
		console.log(element[i]);
	}*/
/*
	$('a[href*=#]').each(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
	&& location.hostname == this.hostname
	&& this.hash.replace(/#/,'') ) {
		var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
		var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
		if ($target) {
			var targetOffset = $target.offset().top;
			$(this).click(function() {
				$("#nav li a").removeClass("active");
				$(this).addClass('active');
				$('html, body').animate({scrollTop: targetOffset}, 1000);
				return false;
			});
		}
	}
	});
*/

	$.getJSON("assets/work.json", function(data) {
		$.each(data.pieces, function(i, item) {
			console.log(item)
			var c = "";
			for (var i = 0; i < item["category"].length; i++) {
				if(item["category"][i] == 1) {
					c = c.concat(" writing");
				} else if(item["category"][i] == 2) {
					c = c.concat(" code");
				} else if(item["category"][i] == 3) {
					c = c.concat(" graphics");
				} else if(item["category"][i] == 4) {
					c  = c.concat(" social");
				}
			}
			$('#work-cards').append('<a href=' + item["link"] + '><div class="card' + c + '"><img src="" alt="image"><div class="card-content"><h2>'+item["headline"]+'</h2><p>'+item["teaser"]+'</p></div></div></a>')
			
			console.log(item);
		});
	});
});

function filter(type, el) {
	$('.filters.active').each(function(i, obj) {
		console.log(obj)
		//obj.removeClass('active');
		console.log(obj)
	});
	$(el).addClass('active')
	if(type == 1) {
		console.log("in 1")
		filtered["all"] = 0;
		filtered["writing"] = 1;
		filtered["code"] = 0;
		filtered["graphics"] = 0;
		filtered["social"] = 0;
		$(".card").each(function(i, obj) {
			var c = obj.className
			if (obj.className.includes("writing")) {
				$(this).show()
			} else {
				$(this).hide()
			}
		});
	} else if  (type == 2) {
		console.log("in 2")
		filtered["all"] = 0;
		filtered["writing"] = 0;
		filtered["code"] = 1;
		filtered["graphics"] = 0;
		filtered["social"] = 0;
		$(".card").each(function(i, obj) {
			var c = obj.className
			if (obj.className.includes("code")) {
				$(this).show()
			} else {
				$(this).hide()
			}
		});
	} else if (type == 3) {
		console.log("in 3")
		filtered["all"] = 0;
		filtered["writing"] = 0;
		filtered["code"] = 0;
		filtered["graphics"] = 1;
		filtered["social"] = 0;
		$(".card").each(function(i, obj) {
			var c = obj.className
			if (obj.className.includes("graphics")) {
				$(this).show()
			} else {
				$(this).hide()
			}
		});
	} else if (type == 4) {
		console.log("in 4")
		filtered["all"] = 0;
		filtered["writing"] = 0;
		filtered["code"] = 0;
		filtered["graphics"] = 0;
		filtered["social"] = 1;
		$(".card").each(function(i, obj) {
			var c = obj.className
			if (obj.className.includes("social")) {
				$(this).show()
			} else {
				$(this).hide()
				console.log("in social media")
			}
		});
	} else {
		filtered["all"] = 1;
		filtered["writing"] = 0;
		filtered["code"] = 0;
		filtered["graphics"] = 0;
		filtered["social"] = 0;	
		$(".card").each(function(i, obj) {
			$(this).show()
		});
	}
}

function myFunction() {
    var x = document.getElementById("nav-bar");
    if (x.className === "mynav") {
        x.className += " responsive";
    } else {
        x.className = "mynav";
    }
};

$('#work-type').on('click', function(e) {
	console.log('bruh i click');
	if($(this).attr("class").includes('active')) {
		console.log("not active");
	}
	$('#work-type').each(function() {
		$(this).addClass('active')
	})
});