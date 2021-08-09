window.addEventListener(
	"touchmove",
	function(event) {
		if(event.scale !== 1) {
			event.preventDefault();
		}
	}, {
		passive: false
	}
);

$(document).ready(function () {

  $("#main_content").load("main_html/main_functions.html");


  //========方法直接选择器=================================
  $("#text-feedback").hide();
  let showFeedback = false;

  $("#myCanvas").hide();

  $("#feedback").click(function () {
    //$("#func").load("decision1.html");
    //window.alert("111");
    if (showFeedback == false) {
      $("#text-feedback").show();
      showFeedback = true;
    } else {
      $("#text-feedback").hide();
      showFeedback = false;
    }

    $("#myCanvas").show();
  });

   //顶部导航栏
  $("#logo").click(function () {
    $("#main_content").load("main_html/main_functions.html");
    //window.alert("1");
  });

  $("#about").click(function () {
    $("#main_content").load("main_html/about.html");
    //window.alert("1");
  });

  //底部导航栏
  $("#home").click(function () {
    $("#main_content").load("main_html/main_functions.html");
    //window.alert("1");
  });


  

  $("#bottom2").click(function () {
    $("#main_content").load("main_html/direct_selector.html");
    //window.alert("1");
  });

  




  //========方法直接选择器=================================

});


