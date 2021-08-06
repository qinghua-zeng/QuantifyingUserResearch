$(document).ready(function () {


	var situation = 0;
	$("#parent *").click(function (e) {
		if (e.target == $("#a1")[0]) {

			if (situation == 0) {
				$("#a0").text("有任务时间吗？");
				$("#a1").text("有");
				$("#a2").text("没有");

				situation = 1;
			}

			else if (situation == 1) {
				//$("#a0").text("是组间比较吗？");
				//$("#a1").text("yes");
				//$("#a2").text("no");
				$("#decision").text("Q03 t(log）或 Q04 中位数置信区间");
				$("#main_content").load("statistics/03.html");
				//situation = 2;
			}




			//no
		} else if (e.target == $("#a2")[0]) {

			if (situation == 0) {
				//$("#a0").text("比较数据还是相关数据");
				//$("#a1").text("比较数据");
				//$("#a2").text("相关数据");
				$("#decision").text("Q01 Wald");
				$("#main_content").load("statistics/01.html");
				//situation = 10;
			}

			else if (situation == 1) {
				//$("#a0").text("与基准进行比较检验");
				//$("#a1").text("yes");
				//$("#a2").text("no");
				//situation = 5;
				$("#decision").text("Q02 T");
				$("#main_content").load("statistics/02.html");
			}

			
		}
		$("#situation").text(situation);
	});


});