

//校正wald
CalWald1=function (strSuccess, strTotal) {
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

//面临废弃
function simpleWald(n,p,z){
    
    this.Xadj=n*p+z*z/2;
    this.Nadj=n+z*z;
    this.Padj=this.Xadj/this.Nadj;
    
    

    //this.Xadj=x+
    this.Dadj=z*Math.sqrt(this.Padj*(1-this.Padj)/this.Nadj);
    this.Min=this.Padj-  this.Dadj;
    this.Max=this.Padj+  this.Dadj;

}

//新wald
function simpleWald2(x,n,z){
    this.N=n;
    this.Xadj=x+z*z/2;
    this.p=x/n;
    this.Nadj=n+z*z;
    this.Padj=this.Xadj/this.Nadj;
    
    

    //this.Xadj=x+
    this.Dadj=z*Math.sqrt(this.Padj*(1-this.Padj)/this.Nadj);
    this.Min=this.Padj-  this.Dadj;
    this.Max=this.Padj+  this.Dadj;

}


function stdWald(p,z,d){
    this.N=z*z*p/(d*d)-z*z;


}

Padj=function(p,n,z){
this.Padj;

return this.Padj;

};

WaldAdjN=function(p,d,z){
    this.n=z*z*p/(d*d)-1.5*z*z;
    return this.n;

}