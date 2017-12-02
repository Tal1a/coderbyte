//Напишите функцию formatDate(date), которая выводит дату date в формате дд.мм.гг:


function formatDate(date) {
	var day = date.getDate().toString();
	if (day.length == 1) {
		day = '0' + day;
	}
	var month = (date.getMonth() + 1).toString();
	if (month.length == 1) {
		month = '0' + month;
	}
	var year = date.getFullYear().toString().slice(2);

	return day + '.' + month + '.' + year;

}
var date = new Date();
alert(formatDate(date));