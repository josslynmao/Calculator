var num = 0 , result = 0 , calculate = 0,numshow = "0"; 
var  operate = 0; //判断输入状态的标志，来控制何时清屏:输入运算符时，下一次输入数据就会清屏。

//获取及更新屏幕数字
function show(num){
	var str = String(document.getElementsByName("numScreen")[0].value);//获得屏幕上显示的数字。
	if (str == "0" || operate !=0) {
		str = "";//若获得的屏幕上的数字为零(起始状态)；或者对数字进行了操作，则进行清屏。
		operate = 0;//清屏后操作符置0
	}
	str = str + String(num);
	document.getElementsByName("numScreen")[0].value = str;
}

//


//AC
function allClear(){
	document.getElementsByName("numScreen")[0].value = 0;
	num = 0 , result = 0 ,calculate = 0, operate = 0, numshow = "0"; 
}

//+ - * /
function calculateNumber(cal){
	operate = 1;//对数字进行了加操作，标记为1，当再次输入数字时会清屏。
	calculate = cal;
	num = document.getElementsByName("numScreen")[0].value;
}

//=
function equal(){
	operate = 1;
	numshow = document.getElementsByName("numScreen")[0].value;
	switch(calculate){
		case 1:
		result = Number(num) + Number(numshow);
		num = result;
		break;
		case 2:
		result = Number(num) - Number(numshow);
		num = result;
		break;
		case 3:
		result = Number(num) * Number(numshow);
		num = result;
		break;
		case 4:
		result = Number(num) / Number(numshow);
		num = result;
		break;
		default:
		alert("Yeah!");
	}
	
	document.getElementsByName("numScreen")[0].value = result;
}