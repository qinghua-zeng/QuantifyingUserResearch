//z检验
OneSampleZTest = function(q06successNum,q06total,q06benchmark){
    this.pSample=q06successNum/q06total;
this.q06z=(this.pSample-q06benchmark)/Math.sqrt(q06benchmark*(1-q06benchmark)/q06total);



    $("#q06z").val(this.q06z);
}

//单样本t检验
OneSampleT = function(q07score,q07Num,q07benchmark,q07s){
    this.t=(q07score-q07benchmark)/(q07s/Math.sqrt(q07Num));
    $("#q07t").val(this.t);
}

