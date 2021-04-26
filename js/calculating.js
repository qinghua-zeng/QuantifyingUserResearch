$(document).ready(function () {//传说中的ready
	$("form div input:text").addClass("input");//找到form里面div包含的input标签类型为text的元素 jQuery强悍
	var num1, num2;
	$("#jia").click(function () {
		num1 = parseFloat($("#num1").val());
		num2 = parseFloat($("#num2").val());
		$("#reset").val(num1 + num2);
	});
	$("#jian").click(function () {
		num1 = parseFloat($("#num1").val());
		num2 = parseFloat($("#num2").val());
		$("#reset").val(num1 - num2);
	});
	$("#cheng").click(function () {
		num1 = parseFloat($("#num1").val());
		num2 = parseFloat($("#num2").val());
		$("#reset").val(num1 * num2);
	});
	$("#chu").click(function () {
		num1 = parseFloat($("#num1").val());
		num2 = parseFloat($("#num2").val());
		$("#reset").val(num1 / num2);
	});
});