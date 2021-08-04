$(document).ready(function () {
  //========方法直接选择器=================================
  $("#text-feedback").hide();
  let showFeedback=false;

 
  $("#feedback").click(function () {
    //$("#func").load("decision1.html");
    //window.alert("111");
    if (showFeedback==false){
      $("#text-feedback").show();
      showFeedback=true;
    }else{
      $("#text-feedback").hide();
      showFeedback=false;
    }

    /* if (showFeedback==true){
      $("#text-feedback").hide();
      showFeedback=false;
    } */
    //$("#text-feedback").show();
    //let showFeedback=0;

  });


  //========方法直接选择器=================================
  $("#F01").click(function () {
    $("#func").load("decision1.html");
  });

  $("#F02").click(function () {
    $("#func").load("decision2.html");
  });

  $("#F03").click(function () {
    $("#func").load("decision3.html");
  });

  $("#F04").click(function () {
    $("#func").load("decision4.html");
  });




  //========方法直接选择器=================================
  $("#q01").click(function () {
    $("#div1").load("statistics/01.html");
  });

  $("#q02").click(function () {
    $("#div1").load("statistics/02.html");
  });

  $("#q03").click(function () {
    $("#div1").load("statistics/03.html");
  });

  $("#q04").click(function () {
    $("#div1").load("statistics/04.html");
  });

  $("#q05").click(function () {
    $("#div1").load("statistics/05.html");
  });

  $("#q06").click(function () {
    $("#div1").load("statistics/06.html");
  });

  $("#q07").click(function () {
    $("#div1").load("statistics/07.html");
  });

  $("#q08").click(function () {
    $("#div1").load("statistics/08.html");
  });

  $("#q09").click(function () {
    $("#div1").load("statistics/09.html");
  });

  $("#q10").click(function () {
    $("#div1").load("statistics/10.html");
  });

  $("#q11").click(function () {
    $("#div1").load("statistics/11.html");
  });

  $("#q12").click(function () {
    $("#div1").load("statistics/12.html");
  });

  $("#q13").click(function () {
    $("#div1").load("statistics/13.html");
  });

  $("#q14").click(function () {
    $("#div1").load("statistics/14.html");
  });

  $("#q15").click(function () {
    $("#div1").load("statistics/15.html");
  });

  $("#q16").click(function () {
    $("#div1").load("statistics/16.html");
  });

  $("#q17").click(function () {
    $("#div1").load("statistics/17.html");
  });

  $("#q18").click(function () {
    $("#div1").load("statistics/18.html");
  });

  $("#q19").click(function () {
    $("#div1").load("statistics/19.html");
  });

  $("#q20").click(function () {
    $("#div1").load("statistics/20.html");
  });
});


