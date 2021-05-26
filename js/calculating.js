+-$(document).ready(function () {//传说中的ready
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

		this.q14z = getT2(this.q14confi, 10000, 2);//是双侧检验吗？
		this.q14n = this.q14z * this.q14z * this.q14p * (1 - this.q14p) / (this.q14d * this.q14d);


		$("#q14n").val(this.q14n);
	});

	//================15 比例与基准比较（6）====================
	$("#Caluclate_ProportionToCriterion").click(function () {
		this.q15s = parseFloat($("#q15s").val());
		this.q15d = parseFloat($("#q15d").val());
		this.q15Expectation = parseFloat($("#q15Expectation").val());
		this.q15side = parseFloat($("#q15side").val());
		this.q15b = parseFloat($("#q15b").val());



		this.q15z = getT2(this.q15b, 10000, this.q15side);//传入一个大于1000的数计算t

		this.q15zb = getT2(this.q15Expectation, 10000, 1);
		this.q15n = Math.pow(this.q15z, 2) * this.q15s * this.q15s / (this.q15d * this.q15d);

		this.q15arrayN = new Array();
		this.q15arrayN[0] = calN(this.q15s, this.q15d, this.q15z + this.q15zb);//
		this.q15z = getT2(this.q15Expectation, this.q15arrayN[0] - 1, this.q15side);//
		this.q15zb = getT2(this.q15b, this.q15arrayN[0] - 1, 1);
		this.q15arrayN[1] = calN(this.q15s, this.q15d, this.q15z + this.q15zb);
		this.q15z = getT2(this.q15Expectation, this.q15arrayN[1] - 1, this.q15side);//
		this.q15zb = getT2(this.q15b, this.q15arrayN[1] - 1, 1);//

		for (let i = 0; this.q15arrayN[i] !== this.q15arrayN[i + 1]; i++) {
			this.q15arrayN[i + 2] = calN(this.q15s, this.q15d, this.q15z + this.q15zb);
			//window.alert(this.q13arrayN[i+1]);
			this.q15z = getT2(this.q15Expectation, this.q15arrayN[i + 2] - 1, this.q15side);
			this.q15zb = getT2(this.q15b, this.q15arrayN[i + 2] - 1, 1);

		}




		$("#q15ta").val(this.q15z);
		$("#q15tb").val(this.q15zb);
		$("#q15n").val(this.q15arrayN);
	});

	//=================16 小样本的二项样本量估计 6.5.2====================
	$("#Caluclate_smallSimple").click(function () {
		this.q16p = parseFloat($("#q16p").val());
		this.q16d = parseFloat($("#q16d").val());
		this.q16confi = parseFloat($("#q16confi").val());



		this.q16z = getT2(this.q16confi, 10000, 2);


		this.q16n = Math.ceil(this.q16z * this.q16z * this.q16p * (1 - this.q16p) / (this.q16d * this.q16d));

		this.q16Padj = (this.q16n * this.q16p + this.q16z * this.q16z / 2) / (this.q16n + this.q16z * this.q16z);

		this.q16nFinal = Math.ceil(this.q16z * this.q16z * this.q16Padj * (1 - this.q16Padj) / (this.q16d * this.q16d) - this.q16z * this.q16z);
		$("#q16z").val(this.q16z);
		$("#q16n").val(this.q16nFinal);
	});

	//================17 比例误差的幅度（6）====================
	$("#Caluclate_MarginOfErrorProportion").click(function () {
		this.q17benchmark = parseFloat($("#q17benchmark").val());
		this.q17d = parseFloat($("#q17d").val());
		this.q17confi = parseFloat($("#q17confi").val());
		this.q17b = parseFloat($("#q17b").val());

		this.q17p = this.q17benchmark + this.q17d;

		this.q17z = getT2(this.q17confi, 10000, 1) + getT2(this.q17b, 9999, 1);

		this.q17n = Math.ceil(this.q17z * this.q17z * this.q17p * (1 - this.q17p) / (this.q17d * this.q17d));

		this.wald = new Array();
		//this.wald[0]=new simpleWald(this.q17n,this.q17p,this.q17z);
		this.q17x = this.q17n * this.q17p;
		this.wald[0] = new simpleWald2(this.q17x, this.q17n, this.q17z);
		//this.Dadj=this.wald.Dadj;



		for (let i = 0; this.wald[i].Min < this.q17benchmark; i++) {
			//this.tempN=new simpleWald(this.q17n,this.q17p,this.q17z);
			//this.wald[i+1]=new simpleWald()}

			this.wald[i + 1] = new simpleWald2(Math.round((this.q17n + 1 + i) * this.q17p), this.q17n + 1 + i, this.q17z);
		}

		this.finalN = this.wald[this.wald.length - 1].N;
		$("#q17n").val(this.finalN);
	});

	//================18 双比例（6）====================
	$("#Caluclate_TwoProportions").click(function () {
		this.q18p1 = parseFloat($("#q18p1").val());
		this.q18p2 = parseFloat($("#q18p2").val());
		this.q18p = (this.q18p1 + this.q18p2) / 2;
		this.q18confi = parseFloat($("#q18confi").val());
		this.q18b = parseFloat($("#q18b").val());
		this.q18d = this.q18p2 - this.q18p1;

		this.q18z = getT2(this.q18confi, 9999, 2) + getT2(this.q18b, 9999, 1);
		this.q18n = (2 * this.q18z * this.q18z * this.q18p * (1 - this.q18p)) / (this.q18d * this.q18d) + 0.5;

		$("#q18n").val(this.q18n);
	});

	//=================19 配对比例（6）====================
	$("#Caluclate_PairedProportions").click(function () {
		this.q19Pa = parseFloat($("#q19Pa").val());
		this.q19Pb = parseFloat($("#q19Pb").val());
		this.q19confi = parseFloat($("#q19confi").val());
		this.q19b = parseFloat($("#q19b").val());
		this.q19d=this.q19Pa-this.q19Pb;

		this.q19p=this.q19Pa+this.q19Pb;

		this.q19z = getT2(this.q19confi, 9999, 2) + getT2(this.q19b, 9999, 1);

		this.wald=new stdWald(this.q19p,this.q19z,this.q19d);

		this.q19n = Math.ceil(this.wald.N);//取整

		this.PadjA=(this.q19Pa*this.q19n+this.q19z*this.q19z/8)/(this.q19n+this.q19z*this.q19z/2);

		this.PadjB=(this.q19Pb*this.q19n+this.q19z*this.q19z/8)/(this.q19n+this.q19z*this.q19z/2);

		this.Dajd=this.PadjA-this.PadjB;

		this.finalN=Math.ceil(WaldAdjN(this.PadjA+this.PadjB,this.Dajd,this.q19z)/2)*2;

		$("#q19n").val(this.finalN);
	});

	//===============20 相关性（10）===================
	$("#Caluclate_Correlation").click(function () {
		//this.q20data1 = $("#q20data1").val().split(",");
		this.q20data1 = $("#q20data1").val();
		this.q20data1=this.q20data1.split(",");

		this.q20data2 = $("#q20data2").val();
		this.q20data2=this.q20data2.split(",");
		//this.q20data2 = $("#q20data2").val().split(",");


		//this.test="2,3,1";
		//this.tt=this.test.split(",");
		
		this.q20d1=new Array();//用来存储转换成数字的数组
		this.q20d2=new Array();//用来存储转换成数字的数组
		//for循环将字符串转为浮点
		for (let i = 0; i < this.q20data1.length; i++) {
			this.q20d1[i] = parseFloat(this.q20data1[i]);
		}

		for (let i = 0; i < this.q20data2.length; i++) {
			this.q20d2[i] = parseFloat(this.q20data2[i]);
		}

		/* for (let i = 0; i < this.q20data2.length; i++) {
			//this.q20data2[i] = parseFloat(this.q20data2[i]);
		} */
		//window.alert(this.q20d1[0]);

		this.q20data1_mean=sumAll2(this.q20d1)/this.q20d1.length;
		this.q20data2_mean=sumAll2(this.q20d2)/this.q20d2.length;
		//this.Stat1 = new numsToStat(this.q20d1);
		//this.Stat2 = new numsToStat(this.q20data2);

		this.devs1=new Array();
		for(let i=0;i<this.q20d1.length;i++){
			this.devs1[i]=this.q20d1[i]-this.q20data1_mean;

		}

		this.devs1s=new Array();
		for (let i=0;i<this.devs1.length;i++){
			this.devs1s[i]=this.devs1[i]*this.devs1[i];
		}
		this.devs2=new Array();
		for(let i=0;i<this.q20d2.length;i++){
			this.devs2[i]=this.q20d2[i]-this.q20data2_mean,2;

		}

		this.devs2s=new Array();
		for (let i=0;i<this.devs2.length;i++){
			this.devs2s[i]=this.devs2[i]*this.devs2[i];
		}

		this.devXY=new Array();
		for (let i=0;i<this.devs2.length;i++){
			this.devXY[i]=this.devs1[i]*this.devs2[i];
		}

		//this.Stat1 = new numsToStat(this.devs1);

		this.q20sum1=0;
		for(let i=0;i<this.devs1.length;i++){
			this.q20sum1+=this.devs1s[i];
		}

		this.q20sum2=sumAll2(this.devs2s);
		this.q20sumXY=sumAll2(this.devXY);

		window.alert(this.q20sum2+"|"+this.q20sumXY);
		this.r=this.q20sumXY/Math.sqrt(this.q20sum1*this.q20sum2);
		//this.q20r=0;
		$("#q20stat1").val(this.devs1s);
		$("#q20stat2").val(this.devs2s);
		$("#q20statXY").val(this.devXY);
		$("#q20xxx").val(this.r);

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

		

		//================19 回归分析（10）====================
		$("#Caluclate_RegressionAnalysis").click(function () {

		});

		//================20 Phi相关性====================
		$("#Caluclate_Phi").click(function () {

		});









		//================25 双均数（6）====================
		$("#Caluclate_TwoMeans").click(function () {

		});

		//================26 配对均数（6）===================
		$("#Caluclate_PairedMeans").click(function () {

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












