// Напишите функцию, getLocalDay(date) которая возвращает день недели для даты date.

// День нужно возвратить в европейской нумерации, т.е. понедельник имеет номер 1, вторник номер 2, …, воскресенье – номер 7.

function getLocalDay(date){
	var days = date.getDay();

	if (days == 0) { days = 7;}
	return days;
}
var date = new Date();
alert (getLocaleDay(date));