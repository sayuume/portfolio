$(function(){
  $('.btn').click(function(){
    $(this).toggleClass("on");
    $('header nav').toggleClass("on");
  });
});
