const concat = (arrays) => {
  const totalLength = arrays.reduce((acc, current) => acc + current.length, 0);

  const arr8 = new Uint8Array(totalLength);
  let byteOffset = 0;

  if (!arrays.length) return arr8;

  for (const chunk of arrays) {
    arr8.set(chunk, byteOffset);
    byteOffset += chunk.length;
    console.log(byteOffset);
  }

  return arr8;
};

let chunks = [
  new Uint8Array([0, 1, 2]),
  new Uint8Array([3, 4, 5]),
  new Uint8Array([6, 7, 8]),
];

console.log(concat(chunks));
