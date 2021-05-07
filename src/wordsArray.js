const wordsArray = [
  [
    "Bentley",
    "Ford",
    "Toyota",
    "Dodge",
    "Ferrari",
    "Nissan",
    "Jeep",
    "Hammer",
    "RollsRoyce",
    "Honda",
  ],
  [
    "London",
    "Accra",
    "Manchester",
    "Toronto",
    "Vienna",
    "Paris",
    "Tokyo",
    "Barcelona",
    "Moscow",
    "Rome",
  ],
  [
    "Chinese",
    "English",
    "Spanish",
    "Greek",
    "Latin",
    "Hebrew",
    "German",
    "Korean",
    "French",
    "Arabic",
  ],
  [
    "Hockey",
    "Soccer",
    "BasketBall",
    "Rugby",
    "Polo",
    "Boxing",
    "Cricket",
    "Tennis",
    "Baseball",
    "Golf",
  ],
  [
    "Knife",
    "Drill",
    "Hammer",
    "Chisel",
    "Brush",
    "Axe",
    "Screwdriver",
    "Saw",
    "Lawnmower",
    "Machete",
  ],
];

// const wordsArray = [
//   "Knife",
//   "Drill",
//   "Hammer",
//   "Chisel",
//   "Brush",
//   "Axe",
//   "Screwdriver",
//   "Saw",
//   "Lawnmower",
//   "Machete",
// ];

let chosen = wordsArray[0][
  Math.floor(Math.random() * wordsArray.length)
].toLowerCase();
console.log("initial selected word...", chosen);

export { wordsArray, chosen };
