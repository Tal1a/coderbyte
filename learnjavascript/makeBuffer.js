/**
 * Created by nkolmakova on 11/22/17.
 */

// Создание объекта: var buffer = makeBuffer();.
// Вызов makeBuffer должен возвращать такую функцию buffer, которая при вызове buffer(value)
// добавляет значение в некоторое внутреннее хранилище, а при вызове без аргументов buffer() – возвращает его.
// Буфер должен преобразовывать все данные к строковому типу
// Решение не должно использовать глобальные переменные.

function makeBuffer(){
	var buffer = '';
	var f = function(value){
		if(value !== undefined){
			buffer += value;
		}else{
			return buffer;
		}
	};
	f.clear = function(){buffer = '';};
	return f;

}
alert( buffer() );

var buffer = makeBuffer();
buffer(0);
buffer(1);
buffer(0);

 confole.log( buffer() ); // '010'