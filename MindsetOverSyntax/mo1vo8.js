// const set = new Set();

// set.add("apple");
// set.add("banana");
// set.add("mango");
// set.add("apple");

// console.log(set.size);

// const test = Array.from(set);

// test.push("tomato");

// console.log(test);

// console.log(set.has("tomato"));
// console.log(set.has("banana"));
// console.log(set.delete("apple"))

// set.forEach((value) => console.log(value));

const arr = ["a", "e", "i", "o", "a", "i", "u"];

const removeDupArr = (arr) => {
  const newArr = [];

  arr.forEach((item) => {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  });

  return newArr;
};

const removeDupSet = (arr) => {
  const set = new Set(arr);

  return Array.from(set);
};

console.log(removeDupArr(arr));
console.log(removeDupSet(arr));
