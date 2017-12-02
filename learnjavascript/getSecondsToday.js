// Напишите функцию getSecondsToday() которая возвращает, сколько секунд прошло с начала сегодняшнего дня.


function getSecondsToday() {
	var date = new Date();
	var hours = date.getHours()*3600;
	var minutes = date.getMinutes()*60;
	return hours + minutes + date.getSeconds();
}
alert (getSecondsToday());
