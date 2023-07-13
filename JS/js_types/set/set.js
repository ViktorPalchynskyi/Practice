function unique(arr) {
   return Array.from(new Set(arr));
}
  
function aclean(arr) {
  const map = new Map();

  for (const word of arr) {
    const sorted = word.toLowerCase().split('').sort().join('');
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

// console.log(unique(values));

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) );