


// function countProperties(obj) {

//     const keys = Object.keys(obj);

//     const result = keys.length



//   return result
// }






// function mergeObjects(obj1, obj2) {

//   const firstObj = obj1 
//   const secondObj = obj2

//   const result = {...firstObj ,...secondObj}

//   return result
// }

// console.log(mergeObjects({ a: 1 }, { b: 2 }));




function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);














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

