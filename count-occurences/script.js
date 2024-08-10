function wordCountGenerator(text) {
    // Split the text into words based on spaces
    const words = text.split(' ');

    // Create an empty object to store the word counts
    const wordCount = {};

    // Iterate through the list of words
    words.forEach(word => {
        // Convert the word to lowercase to ensure case insensitivity
        word = word.toLowerCase();

        // If the word is already in the object, increment its count
        if (wordCount[word]) {
            wordCount[word]++;
        } 
        // If the word is not in the object, add it with a count of 1
        else {
            wordCount[word] = 1;
        }
    });

    return wordCount;
}

// Example usage:
const text = "This is a simple example of a word count generator example";
const wordCounts = wordCountGenerator(text);
console.log(wordCounts);
