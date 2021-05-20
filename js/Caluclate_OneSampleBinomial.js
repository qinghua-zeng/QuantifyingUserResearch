Caluclate_OneSampleBinomial = function (successNum, q05total, q05rate) {

    calcuP = function (successNum0,q05total,q05rate) {
        this.nFactorial = factorial(q05total);
        this.xFactorial = factorial(successNum0);
        this.n_xFactorial = factorial(successNum0 - q05total);
        this.pPowX = Math.pow(q05rate, successNum0);
        this.calP = this.nFactorial / (this.xFactorial * this.n_xFactorial) * this.pPowX * Math.pow((1 - q05rate),( q05total - successNum0)); 

        return this.calP;
    }

    //window.alert(calcuP(18,20,0.7)/2);

    this.successNumArray = new Array();
    this.pArray=new Array();
    for (let i = 0; i < q05total - successNum + 1; i++) {
        this.successNumArray[i] = q05total - i;
        this.pArray[i]=calcuP(this.successNumArray[i],q05total,q05rate);
    }


    this.sumP=sumAll2(this.pArray);



    $("#OneSampleBinomialV2").val(this.sumP);
}