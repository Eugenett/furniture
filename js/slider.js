$(document).ready(function(){
	//FIRST SLIDER
	$('.slider1').owlCarousel({
		items : 1,
		autoplay: true,
		dots: true,
		nav: true,
		loop: true,

		responsive:{
			0:{
				nav: false,
				dots: false
			},
			768:{
				nav: true,
				dots: false
			},
			1024:{
				dots:true
			},
		}
	});
	//SECOND SLIDER
	$('.slider2').owlCarousel({
		items: 4,
		nav: true,
		dots: false,
		autoplay: true,
		rewind: true,
		responsive: true,
		responsive:{
			0:{
				items: 1,
			},
			768:{
				items: 3
			},
			1024:{
				items: 4
			}
		}

	})
	//THIRD SLIDER
	$('.slider3').owlCarousel({
		items: 4,
		nav: true,
		autoplay: true,
		dots: false,
		rewind: true,
		responsive: true,
			responsive:{
			0:{
				items: 1
			},
			768:{
				items: 3
			},
			1025:{
				items: 4
			}
		}

	})

	//SLIDER'S NAVIGATION PANNEL
	$('.slider1 .owl-prev').empty().append('<i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>');
	$('.slider1 .owl-next').empty().append('<i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>');

	$('.slider2 .owl-prev').empty().append('<div class="left_arrow">&#10094</div>');
	$('.slider2 .owl-next').empty().append('<div class="right_arrow">&#10095</div>');

	$('.slider3 .owl-prev').empty().append('<div class="left_arrow">&#10094</div>');
	$('.slider3 .owl-next').empty().append('<div class="right_arrow">&#10095</div>');

//HOOVER ELEMENT'S
function hoverElem(parent, child){
	$(parent).hover(
		function(e){
			$(child).fadeIn();
			$(parent).closest('div').children('a').css('background-color', '#279cc7')
		},
		function(){
			$(child).fadeOut();$(parent).closest('div').children('a').css('background-color', 'none')
		}
	);
}
hoverElem('.slider2', '.overflow');
})



