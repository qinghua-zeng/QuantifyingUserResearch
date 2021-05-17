var sum = function(x,y){ return x+y;};　　//求和函数
var square = function(x){ return x*x;};　　//数组中每个元素求它的平方

var data = [1,1,3];　　//
var mean = data.reduce(sum)/data.length;
var deviations = data.map(function(x){return x-mean;});
var stddev = Math.sqrt(deviations.map(square).reduce(sum)/(data.length-1));

var max = Math.max.apply(null,data)
var min = Math.min.apply(null,data)
var compare = function (x, y) {//比较函数
    if (x < y) {
        return -1;
    } else if (x > y) {
        return 1;
    } else {
        return 0;
    }
};
var mid; //中位数
data.sort(compare); //数组排序
if (data.length%2==0){
    mid = (data[data.length/2]+data[data.length/2+1])/2
}
if (data.length%2!=0){
    mid = data[(data.length+1)/2]
}
console.log("平均值："+mean);
console.log("偏差："+deviations);
console.log("标准差："+stddev); 
console.log("最大值："+max); 
console.log("最小值："+min);
console.log("中位数:"+mid);
console.log("上四分位数:"+data[data.length/4]);
console.log("下四分位数:"+data[data.length/4*3]);



