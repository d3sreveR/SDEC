//Odd numbers

let even = null;
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        even = i;
        console.log(even)
    }
}

//===================

// Largest number in the array

let array = [3 , 6, 2, 56, 32, 5, 89, 32];
let largest= 0;

for (i=0; i<=largest;i++){
    if (array[i]>largest) {
        largest=array[i];
    }
}
console.log(largest)
