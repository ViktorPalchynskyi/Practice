const buffer = new ArrayBuffer(16);
const view = new Uint32Array(buffer);

console.log(('buffer', {
    betyLength: buffer.byteLength,
    buffer,
    view,
    bytesCount: Uint32Array.BYTES_PER_ELEMENT,
    viewLength: view.length,
    viewByteLength: view.byteLength,
}));
view[0] = 123456;

for(let num of view) {
	console.log(num); 
}

const buffer1 = new Uint8Array([255, 255, 255, 255]).buffer;
const dataView = new DataView(buffer1);

console.log('dataView', {
    dataView,
    int8: dataView.getUint8(0),
    int16: dataView.getUint16(0),
    int32: dataView.getUint32(0),
});