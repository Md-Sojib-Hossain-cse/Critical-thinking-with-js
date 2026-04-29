// console.time("task")

// for (let i = 0; i < 5000; i++) {
//   console.log(i);
// }

// console.timeEnd("task")

const firstArray = [];
const secondArray = [];

for (let i = 0; i < 1000; i++) {
  if (i < 500) {
    firstArray.push(i);
  }
  secondArray.push(i);
}
console.time("map1");
const firstUserList = firstArray.map((a) => {
  userId: a;
});
console.timeEnd("map1");

console.time("map2");
const secondUserList = secondArray.map((a) => {
  userId: a;
});

console.timeEnd("map2");

