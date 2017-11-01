//using .map

let people = [
	{name: 'Bill', gender: 'male'},
	{name: 'Tina', gender: 'female'},
	{name: 'Jeff', gender: 'male'},
	{name: 'Patty', gender: 'female'},
]


let names = people.map(function(person) {
	return people.name
})

//without Higher-Order function

// var names = [];
// for (var i =0; i < people.length; i++) {
// 	names.push(people[i].name)
// }

console.log(names);