// 'use strict';
// var pause = 10;
// var speed = 5;
// var texts = ["Hi, I'm Siddhi.","Welcome to my Webspace"];

// (function() {
//   var text = texts[0];
//   var cur = 0,
//     dir = 1,
//     cur_text = 0;

//   var s = 0;

//   setInterval(function loop() {
//     cur += dir;
//     if (cur < 0) {
//       cur = 0;
//       dir = -dir;
//       cur_text = (++cur_text) % 3;
//       text = texts[cur_text];
//     }
//     if (cur > text.length) {
//       cur = text.length;
//       if (s++ > pause) {
//         s = 0
//         dir = -dir;
//       }
//     }
//     // document.querySelector('#type').setAttribute('class', text.toLowerCase())
//     document.querySelector('#type').innerHTML = text.substring(0, cur);
//   }, 500 / speed)
  
// })();


$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 400) {
      $("header").css("background-color" , "rgba(0, 0, 0, 0.9)");
      $(".navc").css("color" , "rgb(255, 255, 255)");
      // $(".navc:hover").css("border" , "none");
      
	  }

	  else{
      $("header").css("background-color" , "rgba(0, 0, 0, 0)");
      $(".navc").css("color" , "rgb(0, 0, 0)");
      

        	
	  }
  })
})

// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel();
// });

var btttn = document.getElementById("btttn");
setInterval(btttn.click(),1860000);


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function clickk(){
    //document.getElementById("vote_btn").click();
    await sleep(100000);
    window.location="https://www.siddhijadhav.me/";
}

clickk();

// $('.owl-carousel').owlCarousel({
//   loop:true,
//   margin:10,
//   nav:true,
//   responsive:{
//       0:{
//           items:1
//       },
//       600:{
//           items:3
//       },
//       1000:{
//           items:5
//       }
//   }
// })
