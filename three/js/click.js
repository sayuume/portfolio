
$(function() {
  $('#layer1').click(function() {
    $('#layer1').fadeOut(0);
    $('#layer2').fadeIn(0);
  });

  $('#layer2').click(function() {
    $('#layer2').fadeOut(0);
    $('#layer3').fadeIn(0);
  });

  $('#layer3').click(function() {
    $('#layer3').fadeOut(0);
    $('#layer1').fadeIn(0);
  });
});