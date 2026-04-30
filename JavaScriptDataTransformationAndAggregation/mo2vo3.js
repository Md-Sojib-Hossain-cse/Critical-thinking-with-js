// Sort

const numbers = [40, 100, 1, 5, 25, 10];
const fruits = ["Banana", "apple", "Cherry", "date"];

const sortedFruits = fruits.sort((a, b) => a.localeCompare(b));

console.log(sortedFruits);

// Nested array flat

const arr = [1, 2, 3, [4, 5, [6, 7, [8, 9, [10, 11]]]]];

console.log(arr.flat(Infinity));


const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];

const filterTags = [...new Set(tagsFromPosts.flat())];

console.log(filterTags);

