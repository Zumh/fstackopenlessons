
console.log('Arrow function two parameter');
const sum = (p1, p2) => {
	console.log(p1);
	console.log(p2);
	return p1 + p2;

}

const result = sum(1, 5);
console.log(result)

console.log();
const square1 = p => {
	console.log(p);
	return p * p
}
console.log('Arrow function one parameter');
console.log(square1(10))

console.log();
const square2 = p => p * p
console.log('Arrow function one parameter no parentheses');
console.log(square2(20));

console.log();
const t = [1, 2, 3]
const tSquared = t.map(p => p * p)
console.log('Arrow function with map');
console.log(tSquared);
