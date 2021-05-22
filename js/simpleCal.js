//t table
{
	//80%置信度的t表
	{
		var t80 = [1.376,1.061,0.978,0.941,0.920,0.906,0.896,0.889,0.883,0.879,0.876,0.873,0.870,0.868,0.866,0.865,0.863,0.862,0.861,0.860,0.859,0.858,0.858,0.857,0.856,0.856,0.855,0.855,0.854,0.854];
		//window.alert(t80.length);
		var t80_60 = 0.848;
		var t80_100 = 0.845;
		var t80_1000 = 0.842;
		var t80_inf = 0.842;
	}

	//90%置信度的t表
	{
		var t90 = [6.314, 2.92, 2.353, 2.132, 2.015, 1.943, 1.895, 1.86, 1.833, 1.812, 1.796, 1.782, 1.771, 1.761, 1.753, 1.746, 1.74, 1.734, 1.729, 1.725, 1.721, 1.717, 1.714, 1.711, 1.708, 1.706, 1.703, 1.701, 1.699, 1.697];
		var t90_60 = 1.671;
		var t90_120 = 1.658;
		var t90_1000 = 1.646;
		var t90_inf = 1.645;
	}

	//95%置信度的t表
	{
		var t95 = [12.71, 4.3, 3.18, 2.78, 2.57, 2.45, 2.36, 2.31, 2.26, 2.23, 2.2, 2.18, 2.16, 2.14, 2.13, 2.12, 2.11, 2.101, 2.093, 2.086, 2.08, 2.074, 2.069, 2.064, 2.06, 2.056, 2.052, 2.048, 2.045, 2.042];//前30个值

		var t95_60 = 2;
		var t95_120 = 1.98;
		var t95_1000 = 1.962;
		var t95_inf = 1.96;
	}

	//99%置信度的t表

	{
		var t99 = [63.656, 9.925, 5.841, 4.604, 4.032, 3.707, 3.499, 3.355, 3.25, 3.169, 3.106, 3.055, 3.012, 2.977, 2.947, 2.921, 2.898, 2.878, 2.861, 2.845, 2.831, 2.819, 2.807, 2.797, 2.787, 2.779, 2.771, 2.763, 2.756, 2.75]
		var t99_60 = 2.66;
		var t99_120 = 2.617;
		var t99_1000 = 2.581;
		var t99_inf = 2.576;
	}
}

//数组内数值求和
sumAll2 = function (arr) {
	this.sum2 = 0;
	for (let i = 0; i < arr.length; i++) {
		this.sum2 += arr[i];
	}
	//window.alert(this.sum2);
	return this.sum2;
}

//数组内与平均数的偏离
calDev = function (ar) {
	//this.arr=[0,1];
	this.devs = new Array();
	for (let i = 0; i < ar.length; i++) {
		this.devs[i] = ar[i] - sumAll2(ar) / ar.length;
	}
	//window.alert(this.devs);
	return this.devs;
}

//样本标准差
calStdDev = function (arrr) {

	this.deviations = calDev(arrr);
	this.temp = 0;
	for (let i = 0; i < this.deviations.length; i++) {
		this.temp += this.deviations[i] * this.deviations[i];
	}
	this.stdDev = Math.sqrt(this.temp / (arrr.length - 1));
	//window.alert(this.stdDev);
	return this.stdDev;

}

//计算数组的时间对数
calNumlog = function (arr) {
	this.Logs = new Array();
	for (let i = 0; i < arr.length; i++) {
		this.Logs[i] = Math.log(arr[i]);
	}
	//求和
	//this.logSum=sumAll2(this.Logs);
	//window.alert(this.Logs);
	return this.Logs;

}

//中位数
median = function (args) {
	//let args=[1,2,3,3,6]; //收集参数转为数组
	args.sort(function (a, b) { return a - b }) //排序
	//return args;
	if (args.length % 2 === 0) { //判断数字个数是奇数还是偶数
		return ((args[args.length / 2] + args[args.length / 2 - 1]) / 2);//偶数个取中间两个数的平均数
	} else {
		return args[parseInt(args.length / 2)];//奇数个取最中间那个数
	}
}

//总体标准偏差的方差(PSD)
varianceArr = function (arr) {
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

//阶乘
factorial = function (num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * factorial(num - 1);
	}
}


//McNemar p值计算函数
calP = function (x, n) {
	this.p = factorial(n) / (factorial(x) * factorial(n - x)) * Math.pow(0.5, x) * Math.pow(1 - 0.5, n - x);
	return this.p;
}

//window.alert(calP(0,7));


//q13 计算N
calN = function (s, d, z) {
	this.n = Math.pow(z, 2) * s * s / (d * d);
	this.n = Math.ceil(this.n);//向上取整
	return this.n;

}

getT = function (p, n) {
	//this.t=t95[n];
	if (p == 80) {
		if (n <= 30) {
			this.t = t80[n - 1];
		} else if (n > 30 && n <= 60) {
			this.t = t80_60;
		} else if (n > 60 && n <= 100) {
			this.t = t80_100;
		} else if (n > 100 && n <= 1000) {
			this.t = t80_1000;
		} else {
			this.t = t80_inf;
		}

	}

	if (p == 90) {
		if (n <= 30) {
			this.t = t90[n - 1];
		} else if (n > 30 && n <= 60) {
			this.t = t90_60;
		} else if (n > 60 && n <= 120) {
			this.t = t90_120;
		} else if (n > 120 && n <= 1000) {
			this.t = t90_1000;
		} else {
			this.t = t90_inf;
		}

	}

	if (p == 95) {
		if (n <= 30) {
			this.t = t95[n - 1];
		} else if (n > 30 && n <= 60) {
			this.t = t95_60;
		} else if (n > 60 && n <= 120) {
			this.t = t95_120;
		} else if (n > 120 && n <= 1000) {
			this.t = t95_1000;
		} else {
			this.t = t95_inf;
		}

	}

	if (p == 99) {
		if (n <= 30) {
			this.t = t99[n - 1];
		} else if (n > 30 && n <= 60) {
			this.t = t99_60;
		} else if (n > 60 && n <= 120) {
			this.t = t99_120;
		} else if (n > 120 && n <= 1000) {
			this.t = t99_1000;
		} else {
			this.t = t99_inf;
		}

	}

	return this.t;
}

