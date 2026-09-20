// Problem 17: Merge Two Objects  [Easy]
// Description: Write a function mergeObjects(obj1, obj2) that merges two objects into one. If keys conflict, the second object's values win.
// Example:
// Input: {a:1}, {b:2}  → Output: {a:1, b:2}
// Hint: Use the spread operator or Object.assign().




function mergeObjects(obj1, obj2) {

  const firstObj = obj1 
  const secondObj = obj2

  const result = {...firstObj ,...secondObj}

  return result
}

console.log(mergeObjects({ a: 1 }, { b: 2 }));