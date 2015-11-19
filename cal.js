var num = 0 , result = 0 , numshow = "0"; 
var operate = 0; //判断输入状态的标志 
var calculate = 0; //判断计算状态的标志 
var quit = 0; //防止重复按键的标志 

function show(num){
	var str = String(document.getElementsByName("numScreen")[0].value);//获得屏幕上显示的数字。
	if (str == "0" || operate !=0) {
		str = "";//若获得的屏幕上的数字为零(起始状态)，或者对数字进行了操作，则进行清屏。
	}
	str = str + String(num);
	document.getElementsByName("numScreen")[0].value = str;
	num = 0;
}

function ac(){
	document.getElementsByName("numScreen")[0].value = 0;
}

function plus(){
	operate = 1;//对数字进行了加操作，标记为1，当再次输入数字时会清屏。
	num = document.getElementsByName("numScreen")[0].value;
}

function equal(){
	numshow = document.getElementsByName("numScreen")[0].value;
	result = num + numshow;
	document.getElementsByName("numScreen")[0].value = result;
}