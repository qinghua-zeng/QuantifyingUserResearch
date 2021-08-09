$(document).ready(function () {


	var situation = 0;
	$("#parent *").click(function (e) {
		if (e.target == $("#a1")[0]) {

			if (situation == 0) {
				$("#a0").text("有任务时间吗？Is it task time?");
				$("#a1").text("有 Yes");
				$("#a2").text("没有 No");

				situation = 1;
			}

			else if (situation == 1) {
				//$("#a0").text("是组间比较吗？");
				//$("#a1").text("yes");
				//$("#a2").text("no");
				$("#decision").text("Q08");
				$("#main_content").load("statistics/08.html");
				//situation = 2;
			}

			else if (situation == 2) {
				//$("#a0").text("是组间比较吗？");
				//$("#a1").text("yes");
				//$("#a2").text("no");
				$("#decision").text("Q05");
				$("#main_content").load("statistics/05.html");
				//situation = 2;
			}




			//no
		} else if (e.target == $("#a2")[0]) {

			if (situation == 0) {
				$("#a0").text("小样本还是大样本？Small or big sample？");
				$("#a1").text("小样本 Small sample");
				$("#a2").text("大样本 Big sample");
				//$("#decision").text("Q01 Wald");
				//$("#main_content").load("statistics/01.html");
				situation = 2;
			}

			else if (situation == 1) {
				//$("#a0").text("与基准进行比较检验");
				//$("#a1").text("yes");
				//$("#a2").text("no");
				//situation = 5;
				$("#decision").text("Q07");
				$("#main_content").load("statistics/07.html");
			}

			else if (situation == 2) {
				//$("#a0").text("与基准进行比较检验");
				//$("#a1").text("yes");
				//$("#a2").text("no");
				//situation = 5;
				$("#decision").text("Q06");
				$("#main_content").load("statistics/06.html");
			}

			
		}
		$("#situation").text(situation);
	});


});