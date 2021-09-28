const array = [];
const size = 20;
const max = 50;
const min = 25;

let alreadyThere = false;

for (let i = 0; i < size; ) {
    alreadyThere = false;
    const candidate = Math.trunc(Math.random() * (max - min) + min);

    for (const prev of array)
        if (prev === candidate) 
            alreadyThere = true;

    if (!alreadyThere)
        console.log(`${i + 1}: ${(array[i++] = candidate)}`);
}
console.log('Array is now filled with unique random values');

// Sum of the elements of the array
let sum = 0;

for (const n of array) 
    sum += n;

console.log(`Sum of the array elements is ${sum}`);

for (let i = 0; i < size; i++) {
    for (let j = 1; j < i; j++) {
        if (array[j - 1] > array[j]) {
            const temp = array[j - 1];
            array[j - 1] = array[j];
            array[j] = temp;
        }
    }
}

for (const n of array)
    console.log(n);

console.log('Array is now sorted with bubblesort!');

