// Создайте функцию getWeekDay(date), которая выводит текущий день недели в коротком формате „пн“, „вт“, … „вс“.



function getWeekDay(date){
	var days = ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
	
	return days[date.getDay()];
}
var date = new Date();
alert (getWeekDay(date));