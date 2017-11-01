//switch the first letter of the first string with the last letter of the second string

function sw(string1, string2) {
	var o = string1.slice(0,1);
	string1 = string2.slice(-1) + string1.slice(1,string1.length);
	console.log(string1);
	string2 = string2.slice(0, string2.length-1) + o;
	console.log(string2);
}

sw('car', 'love');