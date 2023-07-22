const d = new Date(2012, 1, 20, 3, 12);
// console.log(new Date('2012-02-20T03:12:00.000Z'));
// console.log(d);

const date = new Date(2012, 0, 3);

function getWeekDay(date) {
  const daysArr = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
  const currentDay = date.getDay();

  return daysArr[currentDay];
}

const getWeekDayShort = (date) =>
  ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"][date.getDay()];

// console.log(getWeekDay(date));
// console.log(getWeekDay(new Date()));
// console.log(getWeekDay(new Date(0)));

// console.log(getWeekDayShort(date));
// console.log(getWeekDayShort(new Date()));
// console.log(getWeekDayShort(new Date(0)));

function getLocalDay(date) {
  let day = date.getDay();

  if (day === 0) day = 7;

  return day;
}

let date12 = new Date(2012, 0, 8);
// console.log(getLocalDay(date12));

let date15 = new Date(2015, 0, 2);

function getDateAgo(date, days) {
  const copy = new Date(date);

  copy.setDate(copy.getDate() - days);
  return copy.getDate();
}

// console.log(getDateAgo(date15, 1));
// console.log(getDateAgo(date15, 2));
// console.log(getDateAgo(date15, 365));

const getLastDayOfMonth = (year, month) =>
  new Date(year, month + 1, 0).getDate();

// console.log(getLastDayOfMonth(2012, 1));

const getSecondToday = () => {
  const now = new Date();

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  return Math.round((now - today) / 1000);
};

const getSecondToday2 = () => {
  const now = new Date();

  return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
};

// console.log(getSecondToday());
// console.log(getSecondToday2());

const getSecondsToTomorrow = () => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const secondsToday = Math.round((now - today) / 1000);
  const allDaySecond = 24 * 3600;

  return allDaySecond - secondsToday;
};

console.log(getSecondsToTomorrow());

function formatDate(date) {
  let d = date;
  d = [
    "0" + d.getDate(),
    "0" + (d.getMonth() + 1),
    "" + d.getFullYear(),
    "0" + d.getHours(),
    "0" + d.getMinutes(),
    "0" + d.getSeconds(),
  ].map((component) => component.slice(-2));

  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');;
}

console.log(formatDate(new Date(new Date() - 86400 * 1000)));
