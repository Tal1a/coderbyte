/**
 * Created by nkolmakova on 11/29/17.
 *
 * Поправьте код, чтобы стрелки работали как задумано. Предложите несколько вариантов исправления.
 */


function makeArmy() {

	var shooters = [];

	for (var i = 0; i < 10; i++) {

		var shooter = function me() {
			alert( me.i );
		};
		shooter.i = i;

		shooters.push(shooter);
	}

	return shooters;
}

var army = makeArmy();

army[0]();
army[1]();