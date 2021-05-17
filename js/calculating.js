$(document).ready(function () {//传说中的ready
	$("form div input:text").addClass("input");//找到form里面div包含的input标签类型为text的元素 jQuery强悍
	var num1, num2;
	
	$("#evaluate").click(function () {
		//num1 = parseFloat($("#textarea").val());//将字符转换成浮点
		//num2 = parseFloat($("#num2").val());
		
		//$("#reset").val(num1);
		getString($("#textarea").val());
		
	});
	


});



function getString(str) {
	this.array;
	this.sum=0;
	this.array = str.split(",");
	for (i=0;i<this.array.length;i++){
		
		this.array[i]=parseFloat(this.array[i]);
		this.sum=this.sum+this.array[i];
	}
	this.average=this.sum/this.array.length;
	//window.alert(this.array.length);
	$("#sum").val(this.sum);
	$("#average").val(this.average);
	$("#median").val(median(this.array));

}

function median(args){
    //let args=[1,2,3,3,6]; //收集参数转为数组
    args.sort(function(a, b){return a - b}) //排序
	//return args;
    if(args.length%2===0){ //判断数字个数是奇数还是偶数
        return ((args[args.length/2]+args[args.length/2-1])/2);//偶数个取中间两个数的平均数
    }else{
        return args[parseInt(args.length/2)];//奇数个取最中间那个数
   }
 }

