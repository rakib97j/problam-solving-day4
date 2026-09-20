// Problem 20: Find Duplicate Values in Array of Objects  [Medium]
// Description: Given an array of objects, write a function findDuplicateNames(arr) that returns names that appear more than once.
// Example:
// Input: [{name:'Ali'},{name:'Sara'},{name:'Ali'}]Output: ['Ali']
// Hint: Use a frequency map (object) to count occurrences.





function findDuplicateNames(arr) {
  let frequency = {};

  for (let obj of arr) {
    let name = obj.name;

    if (frequency[name]) {
      frequency[name]++;
    } else {
      frequency[name] = 1;
    }
  }

  let duplicates = [];

  for (let name in frequency) {
    if (frequency[name] > 1) {
      duplicates.push(name);
    }
  }

  return duplicates;
}

console.log(
  findDuplicateNames([
    { name: "Ali" },
    { name: "Sara" },
    { name: "Ali" }
  ])
);

