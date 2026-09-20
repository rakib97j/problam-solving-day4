// Problem 16: Count Object Properties  [Easy]
// Description: Write a function countProperties(obj) that returns the number of properties in an object.
// Example:
// Input: {a: 1, b: 2, c: 3}  → Output: 3
// Hint: Use Object.keys().length.



function countProperties(obj) {

    const keys = Object.keys(obj);

    const result = keys.length



  return result
}

console.log(countProperties({ a: 1, b: 2, c: 3 ,d:423 }));
