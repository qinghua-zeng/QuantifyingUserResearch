

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
	if (p == 60) {
		if (n <= 30) {
			this.t = t60[n - 1];
		} else if (n > 30 && n <= 60) {
			this.t = t60_60;
		} else if (n > 60 && n <= 100) {
			this.t = t60_100;
		} else if (n > 100 && n <= 1000) {
			this.t = t60_1000;
		} else {
			this.t = t60_inf;
		}

	}

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

