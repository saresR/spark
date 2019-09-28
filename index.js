//jshint esversion:6

var imgSourceHover = false;

function start() {
  $("h1").fadeOut(1).fadeIn(1500);
  $(".div-1").fadeOut(1).fadeIn(600);
  $("p").fadeOut(1).slideDown(500);
}

start();

$(".contact-button").hover(function() {
  $(".fa-envelope").addClass("fa-envelope-open");
});

$(".contact-button").mouseleave(function () {
  $(".fa-envelope").removeClass("fa-envelope-open");
});


$(".belle-haven").hover(function(){
  if (this === $(".belle-haven")[0]){
    $(".img-source")[0].classList.remove("hidden");
  } else if (this === $(".belle-haven")[1]){
    $(".img-source")[1].classList.remove("hidden");
  }
  this.classList.add("belle-haven-hover");
});

$(".img-source").hover(function(){
  imgSourceHover = true;
});

$(".img-source").mouseleave(function(){
  setTimeout(function () {
    imgSourceHover = false;
  }, 40);
});

$(".belle-haven").mouseleave(function(){
  if (imgSourceHover !== true){
    $(".img-source").addClass("hidden");
    $(".belle-haven").removeClass("belle-haven-hover");
  }
});

// when offset top of menu mark is less than zero, the nav-after class is added to the nav

const invisible1 = $(".menu-mark");
const invisible2 = $(".logo-mark");
const invisible3 = $(".scrolly-mark");
const invisible4 = $(".scrolly-mark-2");





const nav = $(".nav");
var menuIsOut = false;


function toggleMenu(){
  if (menuIsOut){
    hideMenu();
  } else if (!menuIsOut){
    showMenu();
  }
}

function showMenu(){
  nav.removeClass("nav-clicked-2");
  nav.addClass("nav-clicked");
  menuIsOut = true;
}

function hideMenu(){
  nav.removeClass("nav-clicked");
  nav.addClass("nav-clicked-2");
  menuIsOut = false;
}



var scrollyOut = false;


$(".circle-2").hide(0);



const triangle2 = $(".triangle-2");
const triangle3 = $(".triangle-3");


$(window).scroll(function(){
  position = $(window).scrollTop();
  circle2();
});

// && position >= offset2

function circle2(){
  var offset = invisible3.offset().top;
  var offset2 = invisible4.offset().top;
  var offset3 = triangle2.offset().top +100;
  var offset4 = triangle3.offset().top -100;
  if (position >= offset && position <= offset2 && scrollyOut === false) {
    $(".circle-2").fadeIn(1000);
    scrollyOut = true;
  } else if (position < offset && scrollyOut === true){
    $(".circle-2").fadeOut(1000);
    scrollyOut = false;
  } else if (position> offset2){
    $(".circle-2").fadeOut(1000);
    scrollyOut=false;
  }
  if (position<offset3 || position>offset4){
    $(".circle-2").hide(1000);
    scrollyOut = false;
  }
}





$(window).resize(function(){
  const caption2 = $(".caption-2");
  let newFontSize = ($(window).width())/1000;
  if (newFontSize > 1.7){
    caption2.css("font-size", "1.7rem");
  } else if (newFontSize < 1) {
    caption2.css("font-size", "1rem");
  } else {
    caption2.css("font-size", newFontSize + "rem");
  }
});

function changeCaptionSize(){

}




// fade in elements
/*var animateHTML = function() {
  var elems;
  var windowHeight;
  function init() {
    elems = $('.hidden');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }
  function addEventHandlers() {
    $(window).scroll(checkPosition);
    $(window).resize(init);
  }
  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      var positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0 && elems[i].classList.contains("hiding")===true) {
        // elems[i].className = elems[i].className.replace(
        //   'hiding',
        //   'fade-in-element'
        // );
        elems[i].addClass("fade-in-element");
        elems[i].removeClass("hiding");
      }
    }
  }
  return {
    init: init
  };
};
animateHTML().init();*/
