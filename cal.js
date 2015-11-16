var operate =0;

function show(num){
	var str = String(document.getElementsByName("numScreen")[0].value);//获得屏幕上显示的数字。
	if (str == "0" || operate !=0) {
		str = "";//若获得的屏幕上的数字为零(起始状态)，或者对数字进行了操作，则进行清屏。
	}
	str = str + String(num);
	document.getElementsByName("numScreen")[0].value = str;
}

function ac(){
	document.getElementsByName("numScreen")[0].value = 0;
}

function plus(){
	operate = 1;
	
}