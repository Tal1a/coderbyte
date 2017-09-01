/*  Using the JavaScript language, have the function LetterChanges(str)
  take the str parameter being passed and modify it using the following algorithm.
 Replace every letter in the string with the letter following it in the alphabet
 (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string
 (a, e, i, o, u) and finally return this modified string. */

function LetterChanges(str) {
	let change = str.replace(/[a-z]/gi, function (char) {
		return (char === 'z') ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1);
	});

	let capital = change.replace(/o|a|u|e|i/gi, function (vowel) {
		return vowel.toUpperCase();
	});
	return capital;
}

if (LetterChanges("zzzzzz") !== "AAAAAA") {
	throw new Error("LetterChanges('zzzzzz') must return 'AAAAAA'")
}