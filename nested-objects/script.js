function extractNameAndStreet(person) {
    // Destructure the name and street properties from the person object
    const { name, address: { street } } = person;
    
    // Return an object with the extracted properties
    return { name, street };
}

// Example usage:
const person = {
  name: "Mithun",
  age: 21,
  address: {
    street: "B8, Block B, Industrial Area.",
    city: "Sector 62, Noida",
    state: "Uttar Pradesh",
  },
};

const result = extractNameAndStreet(person);
console.log(result); // Output: { name: "Mithun", street: "B8, Block B, Industrial Area." }
