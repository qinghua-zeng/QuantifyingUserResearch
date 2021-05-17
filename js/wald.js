$(document).ready(function () {//传说中的ready
	$("form div input:text").addClass("input");//找到form里面div包含的input标签类型为text的元素 jQuery强悍
	$("#Caluclate_AdjustedWaldConfidenceInterval").click(function () {
	
		CalWald1($("#successNum").val(),$("#totalNum").val());
		
	});
	


});



function CalWald1(strSuccess, strTotal) {
	this.successNum=parseFloat(strSuccess);
    this.totalNum=parseFloat(strTotal);
    this.z95=1.96;
	this.valueP=this.successNum/this.totalNum;
    this.Padj=(this.successNum+Math.pow(this.z95,2)/2)/(this.totalNum+Math.pow(this.z95,2));
    this.radical= Math.sqrt(this.Padj*(1-this.Padj)/(this.totalNum+Math.pow(this.z95,2)));
    this.waldMin=this.Padj- this.z95* this.radical;
    this.waldMax=this.Padj+ this.z95* this.radical;
    //this.test=sqrt(4);
	
	//window.alert(this.array.length);
	$("#valueP").val(this.valueP);
    $("#z95").val(this.z95);
   $("#radical").val(this.radical);
   $("#waldMin").val( this.waldMin);
   $("#waldMax").val( this.waldMax);
   $("#Padj").val( this.Padj);
	

}



