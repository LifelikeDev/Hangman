const wordsArray = [
  [
    "Bentley",
    "Ford",
    "Toyota",
    "Dodge",
    "Ferrari",
    "Nissan",
    "BMW",
    "Jeep",
    "Hammer",
    "RollsRoyce",
    "Honda",
    "Audi",
    "Bugatti",
    "Chrysler",
    "Hyundai",
    "Jaguar",
    "Lexus",
    "Maserati",
    "Mercedes",
    "Porsche",
    "Ram",
    "Cadillac",
    "Maybach",
    "GMC",
    "Peugeot",
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
    "Chicago",
    "Bangalore",
    "Lagos",
    "Istanbul",
    "Dallas",
    "Madrid",
    "Houston",
    "Atlanta",
    "Tampa",
    "Sydney",
    "Dubai",
    "Athens",
    "Bangkok",
    "Beijing",
    "Miami",
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
    "Hindi",
    "Japanese",
    "Russian",
    "Portuguese",
    "Urdu",
    "Hausa",
    "Polish",
    "Bavarian",
    "Czech",
    "Bengali",
    "Malay",
    "Turkish",
    "Thai",
    "Akan",
    "Telugu",
  ],
  [
    "Hockey",
    "Soccer",
    "Basketball",
    "Rugby",
    "Polo",
    "Boxing",
    "Cricket",
    "Tennis",
    "Baseball",
    "Golf",
    "Bowling",
    "Handball",
    "Volleyball",
    "Badminton",
    "Netball",
    "Hiking",
    "Cycling",
    "Wrestling",
    "Snooker",
    "Frisbee",
    "Polevault",
    "Hurdles",
    "Skiing",
    "Archery",
    "Swimming",
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
    "Chainsaw",
    "Mallet",
    "File",
    "Rake",
    "Ladder",
    "Wrench",
    "Pliers",
    "Clamp",
    "Shears",
    "Shovel",
    "Hoe",
    "Anvil",
    "Plane",
    "Wheelbarrow",
    "Nails",
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
  Math.floor(Math.random() * wordsArray[0].length)
].toLowerCase();
console.log("initial selected word...", chosen);

export { wordsArray, chosen };