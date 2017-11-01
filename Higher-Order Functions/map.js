//using .map

var persons = [
	{name: 'Bill', gender: 'male'},
	{name: 'Tina', gender: 'female'},
	{name: 'Jeff', gender: 'male'},
	{name: 'Patty', gender: 'female'},
]


var names = people.map(function(person) {
	return person.name
})

// With arrow functions
//let names = people.name((person) => person.name)

//without Higher-Order function

// var names = [];
// for (var i =0; i < people.length; i++) {
// 	names.push(people[i].name)
// }

console.log(names);