const uint8Array = new Uint8Array([72, 101, 108, 108, 111]);
const uint8Array2 = new Uint8Array([228, 189, 160, 229, 165, 189]);
const uint8Array3 = new Uint8Array([0, 72, 101, 108, 108, 111, 0]);
const uint8Array5 = new Uint8Array([116, 104, 101, 114, 101]);
const subArr = uint8Array3.subarray(1, -1);

const string = new TextDecoder().decode(uint8Array);
const string2 = new TextDecoder().decode(uint8Array2);
const string3 = new TextDecoder().decode(subArr);
const string5 = new TextDecoder().decode(uint8Array5);

const encoder = new TextEncoder();
const uint8Array4 = encoder.encode('Hello there');

console.log('strings', {
  string,
  string2,
  string3,
  uint8Array4,
  string5
});
