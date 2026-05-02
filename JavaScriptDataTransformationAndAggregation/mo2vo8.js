//* Grouping and Aggregating Data

// Scenario: You have a flat array of sales data, and you need to group the sales by category,
// calculating the total revenue and the number of items sold for each.

const sales = [
  { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
  { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
  { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
  { category: "Home", item: "Chair", price: 150, quantity: 1 },
  { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
  { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
];

//TODO : initialize empty object
//TODO : check if current category exists or not
//TODO : if exists add quantity and calculate totalRevenue
//TODO : if not exists then set current quantity and calculate totalRevenue

//? Output
// {
//   Electronics: {
//     totalRevenue: 1330,
//     itemCount: 4,
//   },
//   Books: {
//     totalRevenue: 110,
//     itemCount: 3,
//   },
//   Home: {
//     totalRevenue: 150,
//     itemCount: 1,
//   },
// };

const result = sales.reduce((table, sale) => {
  const { category, price, quantity } = sale;
  //   if (!table[category]) {
  //     table[category] = {
  //       itemCount: quantity,
  //       totalRevenue: price * quantity,
  //     };
  //   } else {
  //     table[category] = {
  //       itemCount: table[category].itemCount + quantity,
  //       totalRevenue: table[category].totalRevenue + price * quantity,
  //     };
  //   }

  if (!table[category]) {
    table[category] = {
      itemCount: 0,
      totalRevenue: 0,
    };
  }

  table[category].itemCount += quantity;
  table[category].totalRevenue += price * quantity;
  return table;
}, {});

console.log(result);
