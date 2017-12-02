// Напишите функцию getSecondsToTomorrow() которая возвращает, сколько секунд осталось до завтра.
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToTomorrow(date) {
	var allSeconds = 24*3600 + 60*60;
	var todaySeconds = date.getHours()*3600 + date.getMinutes()*60 + date.getSeconds();
	var x = allSeconds - todaySeconds;
	return x;
}
var date = new Date(2011, 0, 1, 2, 3, 4);
alert (getSecondsToTomorrow(date));

