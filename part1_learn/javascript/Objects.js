const object1 = {
	name: 'Arto Hellas',
	age: 35,
	education: 'Phd',
}

const object2 = {
	name: 'Full stack web application development',
	level: 'intermediate studies',
	size: 5,
}

const object3 = {
	name: {
		first: 'Dan',
		last: 'Abramov',
	},
	grades: [2,3,5,3],
	department: 'Stanford University',
}

console.log(object1.name); // Arto Hellas is printed
const fieldName = 'age';
console.log(object1[fieldName]);

object1.address = 'Helsinki'
object1['secret number'] = 12341;
