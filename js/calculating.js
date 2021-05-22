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

		this.q10s1 = this.Stat1.stddev;
		this.q10s2 = this.Stat2.stddev;
		this.q10belowLeft = Math.sqrt(this.Stat1.stddev * this.Stat1.stddev / this.Stat1.sampleSize);
		this.q10belowRight = Math.sqrt(this.Stat2.stddev * this.Stat2.stddev / this.Stat2.sampleSize);

		this.q10t = this.q10meanDiff / (this.q10belowLeft + this.q10belowRight);
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

		this.q11P = (this.q11G1SuccessNum + this.q11G2SuccessNum) / (this.q11G1Total + this.q11G2Total);
		this.q11PQ = this.q11P * (1 - this.q11P);
		this.q11SuccessRate1 = this.q11G1SuccessNum / this.q11G1Total;
		this.q11SuccessRate2 = this.q11G2SuccessNum / this.q11G2Total;

		this.q11totalSample = this.q11G1Total + this.q11G2Total;
		//this.q11z=(this.q11SuccessRate1-this.q11SuccessRate2)*Math.sqrt((this.q11totalSample-1)/this.q11G1Total+this.q11G2Total)/Math.sqrt(this.q11PQ*(1/this.q11G1SuccessNum+1/this.q11G2SuccessNum));
		this.upLeft = this.q11SuccessRate1 - this.q11SuccessRate2;
		this.upRight = Math.sqrt((this.q11totalSample - 1) / this.q11totalSample);
		this.dowmRight = 1 / this.q11G1Total + 1 / this.q11G2Total;
		//window.alert(this.upLeft);
		//window.alert(this.upRight);
		//window.alert(this.q11PQ);
		//window.alert(this.dowmRight);
		this.q11z = this.upLeft * this.upRight / Math.sqrt(this.q11PQ * this.dowmRight);
		this.q11zAbs = Math.abs(this.q11z);//取绝对值
		$("#q11z").val(this.q11zAbs);
	});

	//==============12 McNemar 精确检验（5）====================
	$("#Caluclate_McNemarExactTest").click(function () {
		this.q12V1 = $("#q12V1").val().split(",");
		this.q12V2 = $("#q12V2").val().split(",");

		//this.q12a=0;
		this.q12b = 0;
		this.q12c = 0;
		//this.q12d=0;

		for (let i = 0; i < this.q12V1.length; i++) {
			if (this.q12V1[i] == 1 && this.q12V2[i] == 0) { this.q12b++; }
			if (this.q12V1[i] == 0 && this.q12V2[i] == 1) { this.q12c++; }
		}

		//从b或c中选择较小的那个值
		if (this.q12b > this.q12c) {
			this.q12selected = this.q12c;
		} else {
			this.q12selected = this.q12b;
		}
		this.q12n = this.q12b + this.q12c//异序对的总数

		/* calP=function(x){
			this.p=factorial(this.q12n)/factorial(x)*factorial(this.q12n-x)*Math.pow(0.5,x)*Math.pow(1-0.5,this.q12n-x);
			return this.p;
		} */

		this.q12p = calP(this.q12selected, this.q12n);//观测值的概率

		this.q12lessP = 0;
		for (let i = 0; i < this.q12selected; i++) {
			this.q12lessP += calP(i, this.q12n);
		}
		this.q12MidP = this.q12lessP + this.q12p / 2;//单侧检验的中间p值
		//this.q12MidP=this.q12p;
		$("#q12b").val(this.q12b);
		$("#q12c").val(this.q12c);
		$("#q12SingleP").val(this.q12MidP);
		$("#q12DoubleP").val(this.q12MidP * 2);



	});

	//================13 平均值误差的范围（6）====================
	$("#Caluclate_MarginOfErrorMean").click(function () {
		this.q13s = parseFloat($("#q13s").val());
		this.q13d = parseFloat($("#q13d").val());
		this.q13Expectation = parseFloat($("#q13Expectation").val());

		
		
		this.q13z = getT(this.q13Expectation, 10000);//传入一个大于1000的数计算t95 inf
		//this.q13n=Math.pow(this.q13z,2)*Math.pow(this.q13s,2)/Math.pow(this.q13d,2);

		this.q13n = Math.pow(this.q13z, 2) * this.q13s * this.q13s / (this.q13d * this.q13d);

		this.q13arrayN = new Array();
		this.q13arrayN[0] = calN(this.q13s, this.q13d, this.q13z);//
		this.q13z = getT(this.q13Expectation, this.q13arrayN[0] - 1);//2.093
		this.q13arrayN[1] = calN(this.q13s, this.q13d, this.q13z);
		this.q13z = getT(this.q13Expectation, this.q13arrayN[1] - 1);//2.08

		for (let i = 0; this.q13arrayN[i] !== this.q13arrayN[i + 1]; i++) {
			this.q13arrayN[i + 2] = calN(this.q13s, this.q13d, this.q13z);
			//window.alert(this.q13arrayN[i+1]);
			this.q13z = getT(this.q13Expectation, this.q13arrayN[i + 2] - 1);

		}




		$("#q13t").val(this.q13z);
		$("#q13n").val(this.q13arrayN);
	});

	//================14 大样本的二项样本量估计（6.5）====================
	$("#Caluclate_MeantoCriterion").click(function () {
		this.q14p = parseFloat($("#q14p").val());
		this.q14d = parseFloat($("#q14d").val());
		this.q14confi = parseFloat($("#q14confi").val());

		this.q14z= getT(this.q14confi,10000);
		this.q14n=this.q14z*this.q14z*this.q14p*(1-this.q14p)/(this.q14d*this.q14d);
		

		$("#q14n").val(this.q14n);
	});

//================24 比例与基准比较（6）====================
$("#Caluclate_ProportionToCriterion").click(function () {
	this.q15s = parseFloat($("#q15s").val());
	this.q15d = parseFloat($("#q15d").val());
	this.q15Expectation = parseFloat($("#q15Expectation").val());
	this.q15b = parseFloat($("#q15b").val());

	
	
	this.q15z = getT(this.q15b, 10000);//传入一个大于1000的数计算t95 inf
	//this.q13n=Math.pow(this.q13z,2)*Math.pow(this.q13s,2)/Math.pow(this.q13d,2);
	this.q15zb = getT(this.q15Expectation, 10000);
	this.q15n = Math.pow(this.q15z, 2) * this.q15s * this.q15s / (this.q15d * this.q15d);

	this.q15arrayN = new Array();
	this.q15arrayN[0] = calN(this.q15s, this.q15d, this.q15z+this.q15zb);//
	this.q15z = getT(this.q15Expectation, this.q15arrayN[0] - 1);//2.093
	this.q15zb = getT(this.q15b, this.q15arrayN[0] - 1);
	this.q15arrayN[1] = calN(this.q15s, this.q15d, this.q15z+this.q15zb);
	this.q15z = getT(this.q15Expectation, this.q15arrayN[1] - 1);//2.08
	this.q15zb = getT(this.q15b, this.q15arrayN[1] - 1);//2.08

	for (let i = 0; this.q15arrayN[i] !== this.q15arrayN[i + 1]; i++) {
		this.q15arrayN[i + 2] = calN(this.q15s, this.q15d, this.q15z+this.q15zb);
		//window.alert(this.q13arrayN[i+1]);
		this.q15z = getT(this.q15Expectation, this.q15arrayN[i + 2] - 1);
		this.q15zb = getT(this.q15b, this.q15arrayN[i + 2] - 1);

	}




	$("#q15t").val(this.q15z);
	$("#q15n").val(this.q15arrayN);
});

	//未编辑代码
	{

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



		//================22 比例误差的幅度（6）====================
		$("#Caluclate_MarginOfErrorProportion").click(function () {

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
	}



	//在这上面放代码	
});












