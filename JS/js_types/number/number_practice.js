const milNum = 1e6;
const fraction = 1e-6;

console.log('Writing nums', { milNum, fraction });

const numbToSting = 255;

console.log('Parse num to string', { 2: numbToSting.toString(2), 8: numbToSting.toString(8), 16: numbToSting.toString(16), 36: numbToSting.toString(36), shortLink: 123456e4.toString(36) });

const numToRound = 2.3489;

console.log('Rounded nums', { floor: Math.floor(numToRound), ceil: Math.ceil(numToRound), round: Math.round(numToRound), trunc: Math.round(numToRound), fixed: Number(numToRound.toFixed(3)) });

console.log('Precision lost', { a: 0.1 + 0.2, b: 0.1.toFixed(20) });

console.log('isFinite & isNaN', { nan: isNaN('2'), isNanStrict: Number.isNaN('2sadf' / 2), isfinite: isFinite('123'), isFiniteStrict: Number.isFinite(23 / 0) });

const stringWithInt = '10px';
const stringWithFloat = '10.23$';

console.log('parseInt & parseFloat', { int: parseInt(stringWithInt), float: parseFloat(stringWithFloat), parseIntWithFloat: parseFloat(stringWithInt) });

console.log('Math', { random: Math.round(Math.random() * 1000), max: Math.max(10, 100, 1000, 1), min: Math.min(-12, 2, 0, -100, 23, 555), pow: Math.pow(2, 64) });