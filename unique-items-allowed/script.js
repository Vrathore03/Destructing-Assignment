function removeDuplicates(array) {
    // Create a new Set from the array
    const uniqueSet = new Set(array);

    // Return the Set containing unique elements
    return uniqueSet;
}

// Example usage:
const numbers = [1, 2, 3, 4, 2, 3, 5, 1];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers);
