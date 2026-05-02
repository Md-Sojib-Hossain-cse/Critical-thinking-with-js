//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];

//TODO : initiate empty object
//TODO : check if the response already exists or not
//TODO : if it exist then increment the count
//TODO : if not then initialized it with 1

//? Output
// { A: 5, C: 3, B: 5, D: 1 }

const result = surveyResponses.reduce((table, response) => {
  //   if (!table[response]) {
  //     table[response] = 1;
  //   } else {
  //     table[response] = table[response] + 1;
  //   }
  table[response] = (table[response] || 0) + 1;
  return table;
}, {});

console.log(result);
