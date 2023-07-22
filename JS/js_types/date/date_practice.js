const now = new Date();
const birthDay = new Date(1998, 0, 2);
let date = new Date(2016, 0, 2);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());
// console.log(now.getTime());
// console.log(now.getTimezoneOffset() / 60);
// console.log(now.getUTCDate());
// console.log(birthDay);

// console.log(new Date(now.setFullYear(2024)));
// console.log(new Date(now.setDate(1)));
// const tmp = now.setFullYear(2024);
// now.setHours(0, 0, 0, 0);
console.log(date);
// console.log(tmp);

const start = Date.now();

// for (let i = 0; i < 1e5; i++) {
//   const some = i * i * 212;
// }

const end = Date.now();

// console.log(`Loop proccesed for ${(end - start) / 1000} sec`);

function diffSubtract(date1, date2) {
  return date2 - date1;
}

function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

function bench(f) {
  let date1 = new Date(0);
  let date2 = new Date();
  let start = Date.now();
  for (let i = 0; i < 100000; i++) f(date1, date2);
  return Date.now() - start;
}

// console.log("Время diffSubtract: " + bench(diffSubtract) + "мс");
// console.log("Время diffGetTime: " + bench(diffGetTime) + "мс");

const ms = Date.parse('2016-02-10T13:24:21.231-03:00')
console.log(ms);
console.log(new Date(ms));