console.log('Hello Git!');
console.log('Hello JS!');

if (10 % 2 == 0) console.log('10 is even value!');

let x = 0;
console.log(++x);

for (let i = 0; i < 5; i++) {
	console.log(i);
}

const arr = [];
const arrSize = 10;

for (let i = 0; i < arrSize; i++) {
	arr[i] = Math.random() * 10;
	if (arr[i] % 2 === 0) console.log(`Even value! ${arr[i]}`);
}

