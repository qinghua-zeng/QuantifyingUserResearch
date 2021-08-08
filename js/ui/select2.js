//$(document).ready(function () {


	var situation = 0;
	$("#parent *").click(function (e) {
		if (e.target == $("#a1")[0]) {

			if (situation == 0) {
				$("#a0").text("连续还是离散？");
				$("#a1").text("连续");
				$("#a2").text("离散");

				situation = 1;
			}

			else if (situation == 1) {
				$("#a0").text("大于三组吗？");
				$("#a1").text("小于三组");
				$("#a2").text("大于三组");
				//$("#decision").text("Q10");
				//$("#main_content").load("statistics/03.html");
				situation = 2;
			}

			else if (situation == 2) {
				$("#a0").text("每组用户相同吗？");
				$("#a1").text("不同");
				$("#a2").text("相同");
				//$("#decision").text("Q03 t(log）或 Q04 中位数置信区间");
				//$("#main_content").load("statistics/03.html");
				situation = 3;
			}

			

			else if (situation == 3) {
				//$("#a0").text("大于三组吗？");
				//$("#a1").text("小于三组");
				//$("#a2").text("大于三组");
				$("#decision").text("Q10");
				$("#main_content").load("statistics/10.html");
				//situation = 3;
			}

			else if (situation == 4) {
				//$("#a0").text("大于三组吗？");
				//$("#a1").text("小于三组");
				//$("#a2").text("大于三组");
				$("#decision").text("多重Q10");
				$("#main_content").load("statistics/10.html");
				//situation = 3;
			}

			else if (situation == 5) {
				$("#a0").text("每组用户相同吗？");
				$("#a1").text("不同");
				$("#a2").text("相同");
				//$("#decision").text("多重Q10");
				//$("#main_content").load("statistics/10.html");
				situation = 6;
			}

			else if (situation == 6) {
				//$("#a0").text("每组用户相同吗？");
				//$("#a1").text("不同");
				//$("#a2").text("相同");
				$("#decision").text("Q11");
				$("#main_content").load("statistics/11.html");
				//situation = 6;
			}

			else if (situation == 7) {
				//$("#a0").text("每组用户相同吗？");
				//$("#a1").text("不同");
				//$("#a2").text("相同");
				$("#decision").text("Q20");
				$("#main_content").load("statistics/20.html");
				//situation = 6;
			}


			//no
		} else if (e.target == $("#a2")[0]) {

			if (situation == 0) {
				$("#a0").text("连续还是离散？");
				$("#a1").text("连续");
				$("#a2").text("离散");
				//$("#decision").text("Q01 Wald");
				//$("#main_content").load("statistics/01.html");
				situation = 7;
			}

			else if (situation == 1) {
				$("#a0").text("大于三组吗？");
				$("#a1").text("小于三组");
				$("#a2").text("大于三组");
				situation = 5;
				//$("#decision").text("Q02 T");
				//$("#main_content").load("statistics/02.html");
			}

			else if (situation == 2) {
				$("#a0").text("每组用户相同吗？");
				$("#a1").text("不同");
				$("#a2").text("相同");
				//$("#decision").text("Q09");
				//$("#main_content").load("statistics/09.html");
				situation = 4;
			}

			else if (situation == 3) {
				//$("#a0").text("大于三组吗？");
				//$("#a1").text("小于三组");
				//$("#a2").text("大于三组");
				$("#decision").text("Q09");
				$("#main_content").load("statistics/09.html");
				//situation = 3;
			}

			else if (situation == 4) {
				//$("#a0").text("大于三组吗？");
				//$("#a1").text("小于三组");
				//$("#a2").text("大于三组");
				$("#decision").text("多重Q09");
				$("#main_content").load("statistics/09.html");
				//situation = 3;
			}

			else if (situation == 5) {
				//$("#a0").text("大于三组吗？");
				//$("#a1").text("小于三组");
				//$("#a2").text("大于三组");
				$("#decision").text("待定");
				//$("#main_content").load("statistics/09.html");
				//situation = 3;
			}

			else if (situation == 6) {
				//$("#a0").text("每组用户相同吗？");
				//$("#a1").text("不同");
				//$("#a2").text("相同");
				$("#decision").text("Q12");
				$("#main_content").load("statistics/12.html");
				//situation = 6;
			}

			else if (situation == 7) {
				//$("#a0").text("每组用户相同吗？");
				//$("#a1").text("不同");
				//$("#a2").text("相同");
				$("#decision").text("Phi 相关性");
				//$("#main_content").load("statistics/10.html");
				//situation = 6;
			}
			
		}
		$("#situation").text(situation);
	});


//});