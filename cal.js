var  calculate = 0 , numshow = "0" , num1 , num2; 
var  operate = 0; //判断输入状态的标志，来控制何时清屏:输入运算符时，下一次输入数据就会清屏。

//获取及更新屏幕数字
function show(num){
	var str = String(document.getElementsByName("numScreen")[0].value);//获得屏幕上显示的数字。
	if ((str == "0" && num != 0) || operate !=0) {//再想想
		str = "";//若获得的屏幕上的数字为零(起始状态)；或者对数字进行了操作，则进行清屏。
		operate = 0;//清屏后操作符置0
	}
	str = str + String(num);
	document.getElementsByName("numScreen")[0].value = str;
}

//AC
function allClear(){
	document.getElementsByName("numScreen")[0].value = 0;
	num = 0 , result = 0 , calculate = 0, operate = 0 , numshow = "0"; 
}

//取反
function reverse(){
	operate = 1;
	num = document.getElementsByName("numScreen")[0].value;
	num =- Number(num);
	document.getElementsByName("numScreen")[0].value = num;
}

//百分比
function percentage(){
	operate = 1;
	num = Number(num) * 0.01;
	document.getElementsByName("numScreen")[0].value = num;
}

function plus(){
	num2 = document.getElementsByName("numScreen")[0].value;
	operate = 1;
	calculate = 1;
	equal();
}

function minus(){
	operate = 1;
	calculate = 2;
	equal();
}

function times(){
	operate = 1;
	calculate = 3;
	equal();
}

function devide(){
	operate = 1;
	calculate = 4;
	equal();
}

//=
function equal(){
	operate = 1;
	if (num1 == null) {
		num1 = Number(num2);
		document.getElementsByName("numScreen")[0].value = num1;
	}
	else{
		switch(calculate){
			case 1:
			result = num1 + Number(num2);
			num1 = result;
			break;
			case 2:
			result = Number(num2) - num1;
			num1 = result;
			break;
			case 3:
			result = Number(num1) * Number(num2);
			num1 = result;
			break;
			case 4:
			result = Number(num2) / Number(num2);
			num1 = result;
			break;
			default:
			alert("Yeah!");
		}
	}
	document.getElementsByName("numScreen")[0].value = result;
}