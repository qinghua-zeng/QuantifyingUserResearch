$(document).ready(function () {


	var situation = 9;
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

				situation = 2;
			}

			else if (situation == 2) {
				$("#a0").text("每组用户不同吗");
				$("#a1").text("yes");
				$("#a2").text("no");

				situation = 3;
			}

			else if (situation == 3) {
				$("#a0").text("3组或更多组");
				$("#a1").text("yes");
				$("#a2").text("no");

				situation = 4;
			}

			//10
			else if (situation == 4) {
				$("#a0").text("3组或更多组");
				$("#decision").text("Q10 方差分析或多重样本t检验");
				$("#a1").text("yes");
				$("#a2").text("no");
				$("#div1").load("statistics/10.html");

			}

			else if (situation == 5) {
				$("#a0").text("有任务时间？");
				$("#a1").text("Yes");
				$("#a2").text("no");
				situation = 8;
			}

			//09
			else if (situation == 7) {
				$("#a0").text("大于等于3组");
				$("#decision").text("Q09 方差分析或多重配对t检验");
				$("#a1").text("yes");
				$("#a2").text("no");
				situation = 7;
				$("#div1").load("statistics/09.html");
			}

			else if (situation == 8) {
				$("#a0").text("有任务时间");
				$("#a1").text("yes");
				$("#a2").text("no");
				$("#decision").text("Q08 单样本t检验（log）");
				situation = 8;
				$("#div1").load("statistics/08.html");
			}

			//03,04
			else if (situation == 9) {
				$("#a0").text("有任务时间？");
				$("#decision").text("Q03 t(log）或 Q04 中位数置信区间");
				$("#a1").text("yes");
				$("#a2").text("no");
				situation = 9;

				$("#div1").load("statistics/03.html");
			}

			else if (situation == 10) {
				$("#a0").text("是组间比较吗？");
				$("#a1").text("yes");
				$("#a2").text("no");
				situation = 11;
			}

			else if (situation == 11) {
				$("#a0").text("每组用户不同吗");
				$("#a1").text("yes");
				$("#a2").text("no");
				situation = 12;
			}

			else if (situation == 12) {
				$("#a0").text("3组或更多组");
				$("#a1").text("yes");
				$("#a2").text("no");
				situation = 13;
			}

			//结论
			else if (situation == 13) {
				$("#a0").text("大于等于3组");
				$("#decision").text("卡方检验或比例差异的wald校正");
				$("#a1").text("yes");
				$("#a2").text("no");
				situation = 13;
			}
			
			//05
			else if (situation == 14) {
				$("#a0").text("是的，与基准进行比较检验");
				$("#decision").text("Q05单样本二项式或 Q06单样本z检验");
				$("#a1").text("yes");
				$("#a2").text("no");
				situation = 14;
				$("#div1").load("statistics/05.html");
			}

			//结论
			else if (situation == 16) {
				$("#a0").text("大于等于3组");
				$("#decision").text("配对比例差异的wald校正置信区间");
				$("#a1").text("yes");
				$("#a2").text("no");

			}


			//no
		} else if (e.target == $("#a2")[0]) {

			if (situation == 0) {
				//$("#a0").text("比较数据还是相关数据");
				//$("#a1").text("比较数据");
				//$("#a2").text("相关数据");
				$("#decision").text("Q03 t(log）或 Q04 中位数置信区间");
				//situation = 10;
			}

			else if (situation == 1) {
				$("#a0").text("与基准进行比较检验");
				$("#a1").text("yes");
				$("#a2").text("no");
				situation = 5;
			}

			//20
			else if (situation == 2) {
				$("#a0").text("是组间比较吗？");
				$("#decision").text("Q20 相关性分析和回归分析");
				$("#a1").text("yes");
				$("#a2").text("no");
				situation = 2;
				$("#div1").load("statistics/20.html");
			}

			else if (situation == 3) {
				$("#a0").text("3组或更多组");
				$("#a1").text("yes");
				$("#a2").text("no");
				situation = 7;
			}

			//10
			else if (situation == 4) {
				$("#a0").text("小于3组");
				$("#decision").text("Q10 双样本t检验");
				$("#a1").text("yes");
				$("#a2").text("no");
				$("#div1").load("statistics/10.html");
			}

			else if (situation == 5) {
				$("#a0").text("有任务时间？");
				$("#a1").text("yes");
				$("#a2").text("no");
				situation = 9;
			}

			//09
			else if (situation == 7) {
				$("#a0").text("小于3组");
				$("#decision").text("Q09 配对t检验");
				$("#a1").text("yes");
				$("#a2").text("no");
				situation = 9;
				$("#div1").load("statistics/09.html");
			}

			//07
			else if (situation == 8) {
				$("#a0").text("没有任务时间");

				$("#a1").text("yes");
				$("#a2").text("no");
				$("#decision").text("Q07 单样本t检验");
				situation = 8;
				$("#div1").load("statistics/07.html");
			}

			//02
			else if (situation == 9) {
				$("#a0").text("没有任务时间");
				$("#decision").text("Q02 t置信区间");
				$("#a1").text("yes");
				$("#a2").text("no");
				situation = 9;
				$("#div1").load("statistics/02.html");

			}

			else if (situation == 10) {
				$("#a0").text("与基准进行比较检验");

				$("#a1").text("yes");
				$("#a2").text("no");
				situation = 14;
			}

			//20
			else if (situation == 11) {
				$("#a0").text("与基准进行比较检验");
				$("#decision").text("Phi相关性");
				$("#a1").text("yes");
				$("#a2").text("no");
				situation = 11;

				//$("#div1").load("statistics/20.html");
			}

			else if (situation == 12) {
				$("#a0").text("3组或更多组");

				$("#a1").text("yes");
				$("#a2").text("no");
				situation = 16;
			}


			//11
			else if (situation == 13) {
				$("#a0").text("小于3组");
				$("#decision").text("Q11 N-1双比例检验和Fisher精度检验");
				$("#a1").text("yes");
				$("#a2").text("no");
				situation = 13;
				$("#div1").load("statistics/11.html");
			}

			//01
			else if (situation == 14) {
				$("#a0").text("小于3组");

				$("#a1").text("yes");
				$("#a2").text("no");
				$("#decision").text("Q01 Wald校正置信区间");
				situation = 14;
				$("#div1").load("statistics/01.html");
			}

			//12
			else if (situation == 16) {
				$("#a0").text("3组或更多组");
				$("#decision").text("Q12 McNemar精确检验");
				$("#a1").text("yes");
				$("#a2").text("no");
				$("#div1").load("statistics/12.html");

			}

			//结论
			else if (situation == 18) {
				$("#a0").text("大于等于3组");
				$("#decision").text("11111配对比例差异的wald校正置信区间");
				$("#a1").text("yes");
				$("#a2").text("no");
				situation = 16;
			}
		}
		$("#situation").text(situation);
	});


});