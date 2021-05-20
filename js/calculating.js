$(document).ready(function () {//传说中的ready
	$("form div input:text").addClass("input");//找到form里面div包含的input标签类型为text的元素 jQuery强悍

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
		this.successNum = parseFloat($("#q05successNum").val());
		this.q05total = parseFloat($("#q05total").val());
		this.q05rate = parseFloat($("#q05rate").val());
		Caluclate_OneSampleBinomial(this.successNum, this.q05total, this.q05rate);
	});

	//============06 单样本z检验（4）===================
	$("#Caluclate_OneSampleZTest").click(function () {
		this.q06successNum = parseFloat($("#q06successNum").val());
		this.q06total = parseFloat($("#q06total").val());
		this.q06benchmark = parseFloat($("#q06benchmark").val());
		//this.q05rate=parseFloat($("#q05rate").val());
		OneSampleZTest(this.q06successNum, this.q06total, this.q06benchmark);
		//window.alert(1);
	});

	//===============07 单样本t检验（4）=======
	$("#Caluclate_OneSampleT").click(function () {
		this.q07score = parseFloat($("#q07score").val());
		this.q07Num = parseFloat($("#q07Num").val());
		this.q07s = parseFloat($("#q07s").val());
		this.q07benchmark = parseFloat($("#q07benchmark").val());

		OneSampleT(this.q07score, this.q07Num, this.q07benchmark, this.q07s);
	});

	//==================8 单样本t（log）检验（4）====================
	$("#Caluclate_OneSampleTLog").click(function () {
		this.nums = $("#OneSampleTLogV1").val().split(",");
		this.q08Benchmark = parseFloat($("#q08Benchmark").val());
		//for循环将字符串转为浮点
		for (i = 0; i < this.nums.length; i++) {
			this.nums[i] = parseFloat(this.nums[i]);
		}
		this.q08lnU = Math.log(this.q08Benchmark);
		this.Stat = new numsToStat(this.nums);
		this.Stat.writeDataQ08();
		this.q08t = (this.q08lnU - this.Stat.logMean) / this.Stat.stdErrorLogStdDev;
		//window.alert(this.q08lnU-this.Stat.logMean);
		$("#q08lnU").val(this.q08lnU);
		$("#q08t").val(this.q08t);
	});

	//===============9 配对t检验（5）====================
	$("#Caluclate_PairedT").click(function () {
		this.nums1 = $("#PairedTV1").val().split(",");
		this.nums2 = $("#PairedTV2").val().split(",");

		//for循环将字符串转为浮点
		for (i = 0; i < this.nums1.length; i++) {
			this.nums1[i] = parseFloat(this.nums1[i]);
		}

		for (i = 0; i < this.nums2.length; i++) {
			this.nums2[i] = parseFloat(this.nums2[i]);
		}

		this.Stat1 = new numsToStat(this.nums1);
		this.Stat2 = new numsToStat(this.nums2);

		this.q09t = this.Stat1.mean / (this.Stat1.stddev / Math.sqrt(this.Stat1.sampleSize));
		$("#q09t").val(this.q09t);
	});

	//==============10 双样本t检验（5）====================
	$("#Caluclate_TwoSampleT").click(function () {
		this.nums1 = $("#q10nums1").val().split(",");
		this.nums2 = $("#q10nums2").val().split(",");

		//for循环将字符串转为浮点
		for (i = 0; i < this.nums1.length; i++) {
			this.nums1[i] = parseFloat(this.nums1[i]);
		}

		for (i = 0; i < this.nums2.length; i++) {
			this.nums2[i] = parseFloat(this.nums2[i]);
		}

		this.Stat1 = new numsToStat(this.nums1);
		this.Stat2 = new numsToStat(this.nums2);

		this.q10meanDiff = this.Stat1.mean - this.Stat2.mean;

		this.q10s1=this.Stat1.stddev;
		this.q10s2=this.Stat2.stddev;
		this.q10belowLeft=Math.sqrt(this.Stat1.stddev * this.Stat1.stddev/this.Stat1.sampleSize);
		this.q10belowRight=Math.sqrt(this.Stat2.stddev * this.Stat2.stddev/this.Stat2.sampleSize);

		this.q10t=this.q10meanDiff/(this.q10belowLeft+this.q10belowRight);
		//this.q10below = this.Stat1.stddev * this.Stat1.stddev/this.Stat1.sampleSize - this.Stat2.stddev * this.Stat2.stddev/this.Stat2.sampleSize;
		$("#q10s1").val(this.q10s1);
		$("#q10s2").val(this.q10s2);
		$("#q10sampleSize1").val(this.Stat1.sampleSize);
		$("#q10sampleSize2").val(this.Stat2.sampleSize);
		$("#q10t").val(this.q10belowLeft);
	});

	//===============11 N-1 双比率检验和Fisher精确检验（5）====================
	$("#Caluclate_N1TwoProportionTest").click(function () {
		this.q11G1SuccessNum = parseFloat($("#q11G1SuccessNum").val());
		this.q11G1Total = parseFloat($("#q11G1Total").val());
		this.q11G2SuccessNum = parseFloat($("#q11G2SuccessNum").val());
		this.q11G2Total = parseFloat($("#q11G2Total").val());

		this.q11P=(this.q11G1SuccessNum+this.q11G2SuccessNum)/(this.q11G1Total+this.q11G2Total);
		this.q11PQ=this.q11P*(1-this.q11P);
		this.q11SuccessRate1=this.q11G1SuccessNum/this.q11G1Total;
		this.q11SuccessRate2=this.q11G2SuccessNum/this.q11G2Total;

		this.q11totalSample=this.q11G1Total+this.q11G2Total;
		//this.q11z=(this.q11SuccessRate1-this.q11SuccessRate2)*Math.sqrt((this.q11totalSample-1)/this.q11G1Total+this.q11G2Total)/Math.sqrt(this.q11PQ*(1/this.q11G1SuccessNum+1/this.q11G2SuccessNum));
		this.upLeft=this.q11SuccessRate1-this.q11SuccessRate2;
		this.upRight=Math.sqrt((this.q11totalSample-1)/this.q11totalSample);
		this.dowmRight=1/this.q11G1Total+1/this.q11G2Total;
		//window.alert(this.upLeft);
		//window.alert(this.upRight);
		//window.alert(this.q11PQ);
		//window.alert(this.dowmRight);
		this.q11z=this.upLeft*this.upRight/Math.sqrt(this.q11PQ*this.dowmRight);
		this.q11zAbs=Math.abs(this.q11z);//取绝对值
		$("#q11z").val(this.q11zAbs);
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












