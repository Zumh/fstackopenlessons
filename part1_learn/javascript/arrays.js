const t = [1, -1, 3]
console.log('PUSH');
t.push(5);

console.log(t.length) // 4 is printed
console.log();
console.log(t[1]) // -1 is printed
console.log();
t.forEach(value => {
	console.log(value) // numbers 1, -1, 3, 5 are printed, each on its own line
});
console.log();
console.log('CONCAT');

const t0 = [1, -1, 3];
const t2 = t0.concat(5); // creates new array

console.log(t0); // [1, -1, 3] is printed
console.log(t2) // [1, -1, 3, 5] is printed

console.log();
console.log('Functional');
const funct = [1,2,3]

const m1 = funct.map(value => value * 2);

console.log(m1); // [2, 4, 6] is printed

console.log();

const m2 = funct.map(value => '<li>' + value + '</li>');
console.log(m2);

console.log()
console.log('Destructing')
const t4 = [1,2,3,4,5]

const [first, second, ...rest] = t4

console.log(first, second) // 1, 2, is printed
console.log(rest) // [3,4,5] is printed
