var t95 = [12.71, 4.3, 3.18, 2.78, 2.57, 2.45, 2.36, 2.31, 2.26, 2.23, 2.2, 2.18, 2.16, 2.14, 2.13];

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
calDev = function (ar){
    //this.arr=[0,1];
    this.devs=new Array();
    for (let i = 0; i < ar.length; i++) {
        this.devs[i] = ar[i] - sumAll2(ar)/ar.length;
    }
    //window.alert(this.devs);
    return this.devs;
}

//样本标准差
calStdDev = function (arrr){
    
    this.deviations=calDev(arrr);
    this.temp = 0;
	for (let i = 0; i < this.deviations.length; i++) {
		this.temp += this.deviations[i] * this.deviations[i];
	}
    this.stdDev = Math.sqrt(this.temp / (arrr.length - 1));
    //window.alert(this.stdDev);
    return this.stdDev;

}

//计算数组的时间对数
calNumlog = function (arr){
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
median =function (args) {
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
 varianceArr=function(arr) {
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
factorial= function(num){
    if(num <= 1){
        return 1;
    }else{
        return num * factorial(num - 1);
    }
}

//var sss=factorial(3);
//window.alert(sss);