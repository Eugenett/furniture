//activity main-menu

window.onload = function() {

var activeFirstLi = document.querySelector('.elems__items-item-active_1');
var dropDownFirst = document.querySelector('.elems__items-drop');

var activeSecLi = document.querySelector('.elems__items-item-active_2');
var dropDownSec = document.querySelector('.elems__items-lang');

var features = document.querySelector('.navigation__nav-item2');
var featuresDropdown = document.querySelector('.navigation__nav-item2-dropdown');

var livingRoom = document.querySelector('.navigation__nav-item3');
var livingRoomDropdown = document.querySelector('.navigation__nav-item3-dropdown');

var bedrooms = document.querySelector('.navigation__nav-item4');
var bedroomsDropdown = document.querySelector('.navigation__nav-item4-dropdown');

var headerCart = document.querySelector('.header__cart');
var dropCart = document.querySelector('.header__cart-dropdown');


activeFirstLi.addEventListener('click', run);
activeSecLi.addEventListener('click', show);

//features
features.addEventListener('mouseover', openDrop);
featuresDropdown.addEventListener('mouseleave', closeDrop);

//living-room
livingRoom.addEventListener('mouseover', livingDrop);
livingRoomDropdown.addEventListener('mouseleave', closeLivingDrop);

//bedrooms
bedrooms.addEventListener('mouseover', bedroomsDrop);
bedroomsDropdown.addEventListener('mouseleave', closeBedroomsDrop);

//cartmenu
headerCart.addEventListener('mouseover', cartMenu);
dropCart.addEventListener('mouseleave', closeCart)

//MY-CART
function cartMenu() {
	dropCart.style.display = 'flex';
}

function closeCart() {
	dropCart.style.display = 'none';
}

//BEDROOMS
function bedroomsDrop() {
	bedroomsDropdown.style.display = 'flex';

}

function closeBedroomsDrop() {
	bedroomsDropdown.style.display = 'none';
	
}

//LIVING ROOM
function livingDrop() {
	livingRoomDropdown.style.display = 'flex';
}
function closeLivingDrop() {
	livingRoomDropdown.style.display = 'none';
}

//FEATURES
function openDrop() {
	featuresDropdown.style.display = 'flex';
}
function closeDrop() {
	this.style.display = 'none';
}



//usd drop
function run(e) {
	e.preventDefault();
	dropDownFirst.style.display = 'flex';
	if(dropDownFirst.style.display = 'flex') {
		for(var i = 0; i < dropDownFirst.children.length;i++) {
			dropDownFirst.children[i].addEventListener('click', function(e) {
				e.preventDefault();
				activeFirstLi.innerHTML = this.innerHTML;
				if(activeFirstLi.innerHTML !== '' && activeFirstLi.innerHTML !== undefined) {
					dropDownFirst.style.display = 'none';
				}
			})
		}
	}
	this.removeEventListener('click', run);
	this.addEventListener('click', hide);
}

function hide(e) {
	e.preventDefault();
	dropDownFirst.style.display = 'flex';
	this.removeEventListener('click', hide);
	this.addEventListener('click', run);
}


//lang drop
function show(e) {
	e.preventDefault();
	dropDownSec.style.display = 'flex';

	if(dropDownSec.style.display = 'flex') {
		for(var i = 0; i < dropDownSec.children.length; i++) {
			dropDownSec.children[i].addEventListener('click', function(e) {
				e.preventDefault();
				activeSecLi.innerHTML = this.innerHTML;
				if(activeSecLi.innerHTML !== '' && activeSecLi.innerHTML !== undefined) {
					dropDownSec.style.display = 'none';
				}
			})
		}
	}
	this.removeEventListener('click', show);
	this.addEventListener('click', unshow);
}

function unshow(e) {
	e.preventDefault();
	dropDownSec.style.display = 'flex';
	this.removeEventListener('click', unshow);
	this.addEventListener('click', show);
}


//DEALS-SLIDER
var prevArrow = document.querySelector('.prev');
var nextArrow = document.querySelector('.next');
var slideIndex = 1;

 prevArrow.onclick=function(){
 	plusSlides(-1);
 }
 nextArrow.onclick=function(){
 	plusSlides(1);
 }

 showSlides(slideIndex);

 function plusSlides(n) {
 	showSlides(slideIndex += n);
}

 function showSlides(n) {
	var slides = document.querySelectorAll('.mySlides');

	if(n > slides.length) {
		slideIndex = 1;
	}else if(n <= 0) {
		slideIndex = slides.length - 1;
	}
 	for(var i = 0; i < slides.length; i++) {
 		slides[i].style.display = 'none';
}
	slides[slideIndex-1].style.display = 'block';
}
}
