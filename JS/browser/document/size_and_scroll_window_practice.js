console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);

console.log(window.scrollX);
console.log(window.scrollY);

const button = document.createElement("button");
button.innerHTML = "Click me";
button.addEventListener("click", () => window.scrollBy(0, 100));

document.body.prepend(button);

const button2 = document.createElement("button");
button2.innerHTML = "Click me now";
button2.addEventListener("click", () => window.scrollTo(0, 0));

document.body.append(button2);

const scrollOne = document.getElementById("into1");
const scrollTwo = document.getElementById("into2");

scrollOne.addEventListener("click", () => document.body.scrollIntoView(true));

scrollTwo.addEventListener("click", () => document.body.scrollIntoView(false));


