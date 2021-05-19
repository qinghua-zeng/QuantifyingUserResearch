$(document).ready(function () {//传说中的ready
	$("form div input:text").addClass("input");//找到form里面div包含的input标签类型为text的元素 jQuery强悍
	var num1, num2;

	//t置信区间
	$("#Caluclate_tConfidence").click(function () {
		this.nums = $("#textarea").val().split(",");
		for (i = 0; i < this.nums.length; i++) {
			this.nums[i] = parseFloat(this.nums[i]);
		}
		this.Stat = new numsToStat(this.nums);
		this.Stat.writeDataT();
	});
	//wald
	$("#Caluclate_AdjustedWaldConfidenceInterval").click(function () {
		CalWald1($("#successNum").val(), $("#totalNum").val());
	});

	//t log
	$("#Caluclate_tLogConfidenceInterval").click(function () {
		this.nums = $("#textareaTlog").val().split(",");
		//for循环将字符串转为浮点
		for (i = 0; i < this.nums.length; i++) {
			this.nums[i] = parseFloat(this.nums[i]);
		}
		this.Stat = new numsToStat(this.nums);
		this.Stat.writeDataTlog();
	});

});

var t95 = [12.71, 4.3, 3.18, 2.78, 2.57, 2.45, 2.36, 2.31, 2.26, 2.23, 2.2, 2.18, 2.16, 2.14, 2.13];

numsToStat=function (nums) {

	this.array = nums;
	this.sum = 0;

	this.sum=sumAll2(this.array);
	this.mean = this.sum / this.array.length;
	this.sampleSize = this.array.length;

	this.deviations=calDev(this.array);
	/* this.temp = 0;
	for (let i = 0; i < this.deviations.length; i++) {
		this.temp += this.deviations[i] * this.deviations[i];
	} */
	//window.alert(this.temp);
	this.stddev=calStdDev(this.array);
	//this.stddev = Math.sqrt(this.temp / (this.array.length - 1));//样本标准差SD
	this.stdError = this.stddev / Math.sqrt(this.array.length);
	this.MarginOfError = t95[this.array.length - 2] * this.stdError;
	this.Tmin = this.mean - this.MarginOfError;
	this.Tmax = this.mean + this.MarginOfError;
	//计算时间对数们
	//calNumlog([94,95,96]);
	this.numLogs=calNumlog(this.array);
	this.numLogStdDev=calStdDev(this.numLogs);
	/* this.numLogs = new Array();
	for (let i = 0; i < this.array.length; i++) {
		this.numLogs[i] = Math.log(this.array[i]);
	} */
	//求和
	this.logSum=sumAll2(this.numLogs);
	//求log平均
	this.logMean = this.logSum / this.numLogs.length;
	this.psd = varianceArr(this.array);//总体标准偏差的方差(PSD)


	this.writeDataT = function () {
		$("#sum").val(this.sum);
		$("#average").val(this.mean);
		$("#median").val(median(this.array));
		$("#Deviations").val(this.deviations);
		$("#standardDeviation").val(this.stddev);
		$("#standardError").val(this.stdError);
		$("#MarginOfError").val(this.MarginOfError);
		$("#tMin").val(this.Tmin);
		$("#tMax").val(this.Tmax);
	}

	this.writeDataTlog = function () {
		$("#Tlogs").val(this.numLogs);
		$("#TlogMean").val(this.logMean);
		$("#TlogSampleSize").val(this.sampleSize);
		$("#numLogStdDev").val(this.numLogStdDev);
	}

	/* this.sumFunc=function(arr) {
		this.sumLog = 0;
		for (let i = 0; i < arr.length; i++) {
			this.sumLog += arr[i];
		}
		return this.sumLog;
	} */

}


/* function myStatistic(){
	this.sum = function(x,y){ return x+y;};　　//求和函数
	this.square = function(x){ return x*x;};　　//数组中每个元素求它的平方
	
	this.data = [1,1,3,5,5];　　//
	this.mean = this.data.reduce(this.sum)/this.data.length;
	this.deviations = data.map(function(x){return x-this.mean;});
	this.stddev = Math.sqrt(deviations.map(this.square).reduce(this.sum)/(this.data.length-1));
	return this.stddev;
} */


//总体标准偏差的方差(PSD)
function varianceArr(arr) {
	let s,
		ave,
		sum = 0,
		sums = 0,
		len = arr.length;
	for (let i = 0; i < len; i++) {
		sum += Number(arr[i]);
	}
	ave = sum / len;
	for (let i = 0; i < len; i++) {
		sums += (Number(arr[i]) - ave) * (Number(arr[i]) - ave)
	}
	s = (sums / len).toFixed(4);
	return s;
};


function variance1(numbers) {
	this.mean = 0;
	this.sum = 0;
	window.alert(0);
	for (var i = 0; i < numbers.length; i++) {
		this.sum += numbers[i];
	}
	this.mean = this.sum / numbers.length;
	this.sum = 0;
	for (var i = 0; i < numbers.length; i++) {
		this.sum += Math.pow(numbers[i] - this.mean, 2);
	}
	return this.sum / numbers.length;
}

function median(args) {
	//let args=[1,2,3,3,6]; //收集参数转为数组
	args.sort(function (a, b) { return a - b }) //排序
	//return args;
	if (args.length % 2 === 0) { //判断数字个数是奇数还是偶数
		return ((args[args.length / 2] + args[args.length / 2 - 1]) / 2);//偶数个取中间两个数的平均数
	} else {
		return args[parseInt(args.length / 2)];//奇数个取最中间那个数
	}
}

