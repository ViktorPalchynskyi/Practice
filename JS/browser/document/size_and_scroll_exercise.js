const test = document.querySelector('.test');

test.addEventListener('scroll', () => console.log(test.scrollTop));

const scrollBot = test.scrollHeight - test.scrollTop - test.clientHeight;
console.log(scrollBot);

const ball = document.getElementById('ball');
const field = document.getElementById('field');

console.log(ball);
console.log(field);

ball.style.left = `${Math.round(field.clientWidth / 2 - ball.offsetWidth / 2)}px`;
ball.style.top = `${Math.round(field.clientHeight / 2 - ball.offsetHeight / 2)}px`;