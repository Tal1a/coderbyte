/**
 * Created by nkolmakova on 11/29/17.
 *
 * На входе массив чисел, например: arr = [1,2,3,4,5].

 Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.

 Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов, в котором на
 каждой позиции должна
 быть сумма элементов arr до этой позиции включительно.

 Функция не должна модифицировать входной массив.
 В решении используйте метод arr.reduce.
 */



function getSums(arr) {
	var result = [];
	if (!arr.length) return result;

	var totalSum = arr.reduce(function(sum, item) {
		result.push(sum);
		return sum + item;
	});
	result.push(totalSum);

	return result;
}

alert(getSums([1,2,3,4,5]));
alert(getSums([-2,-1,0,1]));