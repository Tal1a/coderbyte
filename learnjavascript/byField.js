/**
 * Created by nkolmakova on 11/23/17.
 * У нас есть массив объектов
 * Мы хотели бы упростить синтаксис до одной строки
 *
 * То есть, вместо того, чтобы каждый раз писать в sort function... – будем использовать byField(...)

 Напишите функцию byField(field), которую можно использовать в sort
 для сравнения объектов по полю field, чтобы пример выше заработал.
 */


var users = [{
	name: "Вася",
	surname: 'Иванов',
	age: 20
}, {
	name: "Петя",
	surname: 'Чапаев',
	age: 25
}, {
	name: "Маша",
	surname: 'Медведева',
	age: 18
}];

function byField(field) {
	return function (a, b) {
		return a[field] > b[field] ? 1 : -1;
	}
}

users.sort(byField('name'));
users.forEach(function (user) {
	alert(user.name);
}); // Вася, Маша, Петя

users.sort(byField('age'));
users.forEach(function (user) {
	alert(user.name);
}); // Маша, Вася, Петя