function extractElements(arr) {
    // Destructure the array to get the first and second elements
    const [first, second] = arr;
    
    // Get the last element of the array
    const last = arr[arr.length - 1];
    
    // Return an array with the first, second, and last elements
    return [first, second, last];
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const extracted = extractElements(numbers);
console.log(extracted); // Output: [1, 2, 5]
