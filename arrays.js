const array = [];
const size = 20;
const max = 50;
const min = 25;

let alreadyThere = false;

for (let i = 0; i < size; ) {
    alreadyThere = false;
    const candidate = Math.trunc(Math.random() * (max - min) + min);

    for (let prev of array)
        if (prev === candidate) 
            alreadyThere = true;

    if (!alreadyThere)
        console.log(`${i + 1}: ${(array[i++] = candidate)}`);
}

