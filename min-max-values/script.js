function findMaxMin(array) {
    // Use Math.max and Math.min with the spread operator to find max and min values
    const max = Math.max(...array);
    const min = Math.min(...array);
    
    // Return an object with max and min properties
    return { max, min };
}

// Example usage:
const numbers = [5, 2, 7, 1, 9];
const result = findMaxMin(numbers);
console.log(result); // Output: { max: 9, min: 1 }
