// Напишите функцию formatDate(date), которая форматирует дату date так:
//
// 	Если со времени date прошло менее секунды, то возвращает "только что".
// 	Иначе если со времени date прошло менее минуты, то "n сек. назад".
// 	Иначе если прошло меньше часа, то "m мин. назад".
// 	Иначе полная дата в формате "дд.мм.гг чч:мм".


function formatDate(date) {
	var now = new Date();
	var seconds = (now.getTime() - date.getTime()) / 1000;
	
	if(date.getSeconds() <=3 || date.getSeconds() >=3){
		return 'just';
	}else if(date.getMinutes() <= 1 || date.getMinutes() >= 1){
		var n = date.getSeconds();
		return n + ' seconds ago';
	}else if(date.getHours() <=1 || date.getHours() >=1){
		var m = date.getMinutes();
		return m + ' minutes ago';
	}else{
		var a = date.getMinutes().toString();
		var s = date.getHours().toString();
		var d = date.getDate().toString();
		var f = date.getMonth().toString();
		var g = date.getFullYear().toString().slice(2);
		return d+'.'+f+'.'+'g '+s+':'+'a';
	}
}
var date = new Date();
alert (formatDate(date));