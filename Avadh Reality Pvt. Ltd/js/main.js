$(document).ready(function(){

  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.nav').toggleClass('nav-toggle');
  });

  $(window).on('load scroll',function(){

    $('.fa-bars').removeClass('fa-times');
    $('.nav').removeClass('nav-toggle');

    if($(window).scrollTop() > 10){
      $('header').addClass('header-active');
    }else{
      $('header').removeClass('header-active');
    }

  });

  $('.facility').magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{
      enabled:true
    }
  });

});


document.getElementById("myBtn").addEventListener("click", function(){
  var myBox = document.getElementById("myDiv");
  if(myBox.style.display=="none"){
    myBox.style.display = "block";
  }
  else{
    myBox.style.display = "none";
  }
});

document.getElementById("myCloseBtn").addEventListener("click", function(){
  var myBox = document.getElementById("myDiv");
  myBox.style.display = "none";
})
