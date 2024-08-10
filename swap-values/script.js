function swapValues(x, y) {
    // Use array destructuring to swap the values
    [x, y] = [y, x];
    
    // Return an array with the swapped values
    return [x, y];
}

// Example usage:
let x = 5;
let y = 10;

let swappedValues = swapValues(x, y);
console.log(swappedValues); // Output: [10, 5]
