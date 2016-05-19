$( document ).ready(function() {

//Your jquery goes here
$("#startingbutton").click(function() {
  $("#back2").show({});
    $("#startingbutton").hide({});
  $("#startingb").hide({});
    $("#right1").show({});
  $("#left1").show({});
    $("#forward").show({});
      $("#h1").fadeIn({});
        $(".radial-timer s-animate").fadeIn({});
  $(".radial-timer-half").fadeIn({});
  $(".radial-timer-half").fadeIn({});


});

$("#back2").hide({});
  $("#backthree").hide({});
  $("#right1").hide({});
  $("#left1").hide({});
  $("#forward").hide({});
  $("#h1").hide({});


$("#right1").click(function() {
  $("#back2").fadeOut({});
  $("#backthree").fadeIn({});
  $("#bman").fadeOut({});
  $("#right1").fadeOut({});
  $("#left1").fadeOut({});
  $("#left3").fadeIn({});
    $("#forward").fadeOut({});
});

$("#forward").click(function(){
    $("#back3three").show({});
      $("#back2").hide({});
  setTimeout(function(){ ("#monster1").show; }, 3000);
  });
});