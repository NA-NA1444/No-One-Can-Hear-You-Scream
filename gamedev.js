$( document ).ready(function() {

//Your jquery goes here
$(document).ready(function() {
  $("#startingbutton").click(function() {
    $("#back2").show({});
    $("#mask").show({});
    $("#startingbutton").hide({});
    $("#startingb").hide({});
    $("#instructions").hide({});
    $("#right1").show({});
    $("#left1").show({});
    $("#forward").show({});
    $("#h1").fadeIn({});
    $("#hands").fadeIn({});

  });

  $("#back2").hide({});
  $("#back3three").hide({});
  $("#right1").hide({});
  $("#left1").hide({});
  $("#forward").hide({});
  $("#h1").hide({});
  $("#hands2").hide({});
  $("#forward2").hide({});
  $("#back4").hide({});
  $("#hands4").hide({});
  $("#monster1").hide({});
  $("#warning1").hide({});
  $("#mask").hide({});
  $("#hands").hide({});
  $("#mask2").hide({});
  $("#back5").hide({});
    $("#gameover1").hide({});
    $("#theend").hide({});
$("#forward3").hide({});
  $("#object").hide({});
  $("#forward4").hide({});
  $("#hands5").hide({});
  $("#back6").hide({});
  $("#forward5").hide({});
  $("#zmonster1").hide({});
  $("#endh").hide({});
  $("#uwonb").hide({});
  $("#isaiduwon").hide({});
    $("#uwon").hide({});
  $("#amonster1").hide({});
    $("#forward6").hide({});
    $("#back7").hide({});


$("#left1").click(function() {
    $("#back2").hide({});
    $("#backback").hide({});
	$("#back6").show({});
    $("#right1").hide({});
    $("#left1").hide({});
    $("#mask").hide({});
    $("#forward").hide({});
      $("#forward6").show({});
$("#zmonster1").slideUp(200).delay(900).show(1000);
$("#gameover1").slideUp(200).delay(5200).show(3000);
});
});


  $("#right1").click(function() {
    $("#back2").fadeOut({});
    $("#back4").fadeIn({});
    $("#bman").fadeOut({});
    $("#right1").fadeOut({});
    $("#left1").fadeOut({});
    $("#forward").fadeOut({});
    $("#hands").fadeOut({});
    $("#hands4").fadeIn({});
    $("#forward4").fadeIn({});


  });

  $("#forward").click(function() {
    $("#back3three").show({});
    $("#back2").hide({});
    $("#backback").hide({});
    $("#right1").hide({});
    $("#left1").hide({});
    $("#forward").hide({});
    $("#hands").hide({});
    $("#hands2").show({});
    $("#mask2").show({});
        $("#forward2").show({});

  });


$("#instructions").animate({
  left: '20px',
  height: '+=10px',
  width: '+=150px',
  top: '600px',
});


var $img = $('#monster1'),
  scale = 1.1,
  h = $img.height(),
  sh = h * scale;

function scaleUp($elt) {
  $elt.animate({
    height: sh
  }, function() {
    scaleDown($elt);
  });
}

function scaleDown($elt) {
  $elt.animate({
    height: h
  }, function() {
    scaleUp($elt);
  });
}

scaleUp($img);

$("#forward2").click(function() {
    $("#back3three").hide({});
     $("#back5").show({});
    $("#mask2").hide({});
    $("#mask").hide({});
    $("#forward2").hide({});
  });
$("#theend").click(function(){
    location.reload({});
});
$("#forward4").click(function() {
    $("#back4").hide({});
    $("#forward4").hide({});
    $("#object").show({});
    $("#hands4").hide({});
    $("#hands5").show({});
    $("#endh").show({});

  });
});

$("#forward6").click(function() {
    $("#back6").hide({});
     $("#back7").show({});
    $("#mask2").hide({});
    $("#mask").hide({});
    $("#forward2").hide({});
});
$("#endh").click(function() {
     $("#back5").hide({});
     $("#uwonb").show({});
     $("#isaiduwon").show({});
//u won the game//
});

$("#forward6").click(function() {
	$("#back6").hide({});
		$("#back7").show({});
$("#amonster1").slideUp(200).delay(900).show(1000);
$("#gameover1").slideUp(200).delay(5200).show(3000);
});