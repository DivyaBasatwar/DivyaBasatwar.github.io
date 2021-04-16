
$(document).ready(function(){

  $('#prev').click(function(){
    $('.container').find('.active').prev().addClass('active');
    $('.container').find('.active').next().removeClass('active');
  });

  $('#next').click(function(){
    $('.container').find('.active').prev().removeClass('active');
    $('.container').find('.active').next().addClass('active');
  });

});
