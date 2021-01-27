$(document).ready(function () {
  $(".btnleft1").click(function () {
    $("a").toggle();
  });

  $(".btnleft2").click(function () {
    $("a").show();
    // $("a").fadeOut("slow");
    // $("a").fadeOut(3000);
  });
  $(".btnslid").click(function () {
    $(".ahide").slideDown(5000);
  });
  $(".ahide").click(function () {
    $(".ahide").slideUp();
  });
  $(".btnslid1").click(function () {
    $(".divhide").stop();
  });
  $(".div_1").click(function () {
    $(".div_1").animate({ left: "500px" });
  });
});
