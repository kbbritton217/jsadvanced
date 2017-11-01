// using .reduce

// multi-tool, can be used for other transformations

var persons = [
	{name: 'Bill', gender: 'male', age: 20},
	{name: 'Tina', gender: 'female', age: 45},
	{name: 'Jeff', gender: 'male', age: 38},
	{name: 'Patty', gender: 'female', age: 27},
]


var totalAge = persons.reduce(function(sum, person) {
	return sum + person.age
}, 0)


// without Higher-order

// var totalAge = 0
// for (var i = 0; i < persons.length; i++) {
// 	totalAge += persons[i].age
// }

console.log(totalAge);