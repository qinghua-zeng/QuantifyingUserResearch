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

