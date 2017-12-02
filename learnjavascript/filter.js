/**
 * Created by nkolmakova on 11/23/17.
 * Создайте функцию filter(arr, func), которая получает массив arr и возвращает новый, в который входят
 * только те элементы arr, для которых func возвращает true.
 Создайте набор «готовых фильтров»: inBetween(a,b) – «между a,b», inArray([...]) – "в массиве [...]".
 Использование должно быть таким:
 filter(arr, inBetween(3,6)) – выберет только числа от 3 до 6,
 filter(arr, inArray([1,2,3])) – выберет только элементы, совпадающие с одним из значений массива.
 */


function filter(arr, func) {
	let newArr = [];
	for (let i = 0; i <= arr.length; i++) {
		if (func(arr[i])) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}


function inBetween(a, b) {
	return function (e) {
		return e >= a && e <= b;
	}
}


function inArray(arr) {
	return function (e) {
		return arr.indexOf(e) !== -1;
	}
}

// let arr = [];

// filter(arr, function (e) {
// 	return e >=3 && e <= 6;
// });
// var func = inBetween(3, 6);
// filter(arr, func);