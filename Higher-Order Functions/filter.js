//Higher-order functions are functions passed into other functions


//using .filter

var people = [
	{name: 'Bill', gender: 'male'},
	{name: 'Tina', gender: 'female'},
	{name: 'Jeff', gender: 'male'},
	{name: 'Patty', gender: 'female'},
]

var pMale = people.filter(function(person) {
	return people.gender === "male"
})

var p = people.filter(pMale);

console.log(p);

//pass items into callback function; like using a for loop and push method
//looks at boolean for if item should be included or not


/*without higher-order

var p = []
for (var i = 0; i < people.length; i++) {
	if (people[i].gender === "male")
		p.push(people[i])
}
*/