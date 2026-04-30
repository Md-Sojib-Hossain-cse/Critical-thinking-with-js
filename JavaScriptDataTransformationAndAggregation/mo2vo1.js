const course1 = { name: "level1" };
const course2 = { name: "level2" };

const map = new Map();

map.set(course1, { userId: 1 });
map.set(course2, { userId: 2 });

map.has(course1);

map.forEach((value, key) => (key.name = `Shohoj shoro ${key.name}`));

console.log(map);
console.log(map.keys(), map.values());
