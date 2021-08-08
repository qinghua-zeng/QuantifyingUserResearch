//面临废弃
numsToStat = function (nums) {

    //变量声明
    {
        this.array = nums;
        this.sum = 0;
        this.median = median(this.array);
        this.sum = sumAll2(this.array);
        this.mean = this.sum / this.array.length;
        this.sampleSize = this.array.length;
        this.t95Value = t95[this.sampleSize - 2];
        this.tValue = getT2(95, this.sampleSize - 1, 2);
        //window.alert(this.tValue);
        this.deviations = calDev(this.array);

        this.stddev = calStdDev(this.array);
        //this.stddev = Math.sqrt(this.temp / (this.array.length - 1));//样本标准差SD
        this.stdError = this.stddev / Math.sqrt(this.array.length);
        this.MarginOfError = this.t95Value * this.stdError;
        this.Tmin = this.mean - this.MarginOfError;
        this.Tmax = this.mean + this.MarginOfError;
        //计算时间对数们

        this.numLogs = calNumlog(this.array);
        this.numLogStdDev = calStdDev(this.numLogs);
        this.stdErrorLogStdDev = this.numLogStdDev / Math.sqrt(this.sampleSize);

        //求和
        this.logSum = sumAll2(this.numLogs);
        //求log平均
        this.logMean = this.logSum / this.numLogs.length;
        this.ePowLogMean = Math.pow(Math.E, this.logMean);
        this.logMarginError = this.t95Value * this.stdErrorLogStdDev;
        this.logConfiMin = this.logMean - this.logMarginError;
        this.logConfiMax = this.logMean + this.logMarginError;
        this.ConfiMin = Math.pow(Math.E, this.logConfiMin);
        this.ConfiMax = Math.pow(Math.E, this.logConfiMax);
        //this.psd = varianceArr(this.array);//总体标准偏差的方差(PSD)

        this.q04z95 = 1.96;
        this.q04p = 0.5//
        this.q04np = this.sampleSize * this.q04p;
        this.q04stdError = Math.sqrt(this.sampleSize * this.q04p * (1 - this.q04p));
        this.q04Min = this.q04np - this.q04z95 * this.q04stdError;
        this.q04Max = this.q04np + this.q04z95 * this.q04stdError;
    }





}

//新，增加置信区间变量获取,单双侧选取 变量
numsToStat2 = function (nums, confi, side) {

    //变量声明
    {
        this.array = nums;
        this.rightOrderArray=nums.sort(function(a, b){return a - b});//对数组进行从小到大的排序
        //window.alert(this.rightOrderArray);
        this.sum = 0;
        this.median = median(this.array);
        this.sum = sumAll2(this.array);
        this.mean = this.sum / this.array.length;
        this.sampleSize = this.array.length;
        //this.t95Value = t95[this.sampleSize - 2];
        this.t95Value = getT2(confi, this.sampleSize - 1, side);
        this.zValue=getT2(confi, 9999, side);
        //window.alert(this.zValue);
        //window.alert("numsToStat2");
        this.deviations = calDev(this.array);

        this.stddev = calStdDev(this.array);
        //this.stddev = Math.sqrt(this.temp / (this.array.length - 1));//样本标准差SD
        this.stdError = this.stddev / Math.sqrt(this.array.length);
        this.MarginOfError = this.t95Value * this.stdError;
        this.Tmin = this.mean - this.MarginOfError;
        this.Tmax = this.mean + this.MarginOfError;
        //计算时间对数们

        this.numLogs = calNumlog(this.array);
        this.numLogStdDev = calStdDev(this.numLogs);
        this.stdErrorLogStdDev = this.numLogStdDev / Math.sqrt(this.sampleSize);

        //求和
        this.logSum = sumAll2(this.numLogs);
        //求log平均
        this.logMean = this.logSum / this.numLogs.length;
        this.ePowLogMean = Math.pow(Math.E, this.logMean);
        this.logMarginError = this.t95Value * this.stdErrorLogStdDev;
        this.logConfiMin = this.logMean - this.logMarginError;
        this.logConfiMax = this.logMean + this.logMarginError;
        this.ConfiMin = Math.pow(Math.E, this.logConfiMin);
        this.ConfiMax = Math.pow(Math.E, this.logConfiMax);
        //this.psd = varianceArr(this.array);//总体标准偏差的方差(PSD)

        //this.q04z95 = 1.96;
        this.q04p = 0.5//
        this.q04np = this.sampleSize * this.q04p;
        this.q04stdError = Math.sqrt(this.sampleSize * this.q04p * (1 - this.q04p));
        this.q04Min = this.q04np - this.zValue * this.q04stdError;
        this.q04Max = this.q04np + this.zValue * this.q04stdError;
    }
}

