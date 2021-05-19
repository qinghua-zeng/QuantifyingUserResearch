$(document).ready(function () {//传说中的ready
	$("form div input:text").addClass("input");//找到form里面div包含的input标签类型为text的元素 jQuery强悍
	var num1, num2;

	//02 t置信区间
	$("#Caluclate_tConfidence").click(function () {
		this.nums = $("#textarea").val().split(",");
		for (i = 0; i < this.nums.length; i++) {
			this.nums[i] = parseFloat(this.nums[i]);
		}
		this.Stat = new numsToStat(this.nums);
		this.Stat.writeDataT();
	});
	//01 wald
	$("#Caluclate_AdjustedWaldConfidenceInterval").click(function () {
		CalWald1($("#successNum").val(), $("#totalNum").val());
	});

	//03 t log
	$("#Caluclate_tLogConfidenceInterval").click(function () {
		this.nums = $("#textareaTlog").val().split(",");
		//for循环将字符串转为浮点
		for (i = 0; i < this.nums.length; i++) {
			this.nums[i] = parseFloat(this.nums[i]);
		}
		this.Stat = new numsToStat(this.nums);
		this.Stat.writeDataTlog();
	});

	//04 中位数置信区间

	$("#Caluclate_ConfidenceIntervalAroundMedian").click(function () {
		this.nums = $("#ConfidenceIntervalAroundMedian1").val().split(",");
		//for循环将字符串转为浮点
		for (i = 0; i < this.nums.length; i++) {
			this.nums[i] = parseFloat(this.nums[i]);
		}
		this.Stat = new numsToStat(this.nums);
		this.Stat.writeDataMedian();


	});

	//=============05 单样本二项式（4）====================
	$("#Caluclate_OneSampleBinomial").click(function () {
		this.successNum=parseFloat($("#OneSampleBinomialV1").val());
		Caluclate_OneSampleBinomial(this.successNum);
	});

	//==================7 单样本t（log）检验（4）====================
	$("#Caluclate_OneSampleTLog").click(function () {

	});

	//===============6 单样本t检验（4）====================
	$("#Caluclate_OneSampleT").click(function () {

	});

	

	//============8 单样本z检验（4）===================
	$("#Caluclate_OneSampleZTest").click(function () {

	});

	//==============9 双样本t检验（5）====================
	$("#Caluclate_TwoSampleT").click(function () {

	});

	//===============10 配对t检验（5）====================
	$("#Caluclate_PairedT").click(function () {

	});

	//===============11 N-1 双比率检验和Fisher精确检验（5）====================
	$("#Caluclate_N1TwoProportionTestAndFisherExactTest").click(function () {

	});

	//==============12 McNemar 精确检验（5）====================
	$("#Caluclate_McNemarExactTest").click(function () {

	});

	//================13 方差分析或多重配对t检验（5.2.1）====================
	$("#Caluclate_AnovaOrMultiplePairedT").click(function () {

	});

	//================14 方差分析或多重双样本t检验（5.2.3）====================
	$("#Caluclate_AnovaOrMultipleTwoSampleT").click(function () {

	});

	//==============15 卡方（11）===================
	$("#Caluclate_ChiSquare").click(function () {

	});

	//===============16 比例差异的Wald校正（11）====================
	$("#Caluclate_AdjustedWaldDifferenceInProportion").click(function () {

	});

	//=================17 配对比例差异的Wald校正置信区间（5）====================
	$("#Caluclate_AdjustedWaldConfidenceIntervalForDifferenceInMatchedProportions").click(function () {

	});

	//===============18 相关性（10）===================
	$("#Caluclate_Correlation").click(function () {

	});

	//================19 回归分析（10）====================
	$("#Caluclate_RegressionAnalysis").click(function () {

	});

	//================20 Phi相关性====================
	$("#Caluclate_Phi").click(function () {

	});

	//================21 平均值误差的范围（6）====================
	$("#Caluclate_MarginOfErrorMean").click(function () {

	});

	//================22 比例误差的幅度（6）====================
	$("#Caluclate_MarginOfErrorProportion").click(function () {

	});

	//================23 均值与基准比较（6）====================
	$("#Caluclate_MeantoCriterion").click(function () {

	});

	//================24 比例与基准比较（6）====================
	$("#Caluclate_ProportionToCriterion").click(function () {

	});

	//================25 双均数（6）====================
	$("#Caluclate_TwoMeans").click(function () {

	});

	//================26 配对均数（6）===================
	$("#Caluclate_PairedMeans").click(function () {

	});

	//================27 双比例（6）====================
	$("#Caluclate_TwoProportions").click(function () {

	});

	//=================28 配对比例（6）====================
	$("#Caluclate_PairedProportions").click(function () {

	});

	//================29 线性回归的样本量===================
	$("#Caluclate_SampleSizeForLinearRegression").click(function () {

	});

	//=================30 问题发现的样本量====================
	$("#Caluclate_ProblemDiscoverySampleSize").click(function () {

	});




	//在这上面放代码	
});












