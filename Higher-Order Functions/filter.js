//Higher-order functions are functions passed into other functions


//using .filter

let people = [
	{name: "Bill", gender: "male"},
	{name: "Tina", gender: "female"},
	{name: "Jeff", gender: "male"},
	{name: "PAtty", gender: "female"},
]

let p = people.filter(function(person) {
	return people.gender === "male"
})

console.log(p);

//pass items into callback function; like using a for loop and push method


/*without higher-order

var p = []
for (var i = 0; i < people.length; i++) {
	if (people[i].gender === "male")
		p.push(people[i])
}
*/