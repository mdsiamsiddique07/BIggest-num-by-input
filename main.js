
let biggest = 0;
let numbers = prompt("Please enter the numbers separated by commas: ");
let array = numbers.split(",").map(Number);

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (biggest < array[i]) {
        biggest = array[i];
    }
}

console.log("The biggest number is: " + biggest);
