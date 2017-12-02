/**
 * Created by nkolmakova on 11/29/17.
 *
 * Перепишите выделенный участок: уберите цикл, используйте вместо него метод map
 */


var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = arr.map(function(item) {
	return item.length;
});

alert( arrLength ); 