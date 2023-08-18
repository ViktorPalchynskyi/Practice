const blob = new Blob(['<html>...</html>'], { type: 'text/html' });
const hello = new Uint8Array([72, 101, 108, 108, 111]);
const blob2 = new Blob([hello, ' ', 'world! Its nice to be here!'], { type: 'text/plain' });
const link = document.getElementById('link');

link.href = URL.createObjectURL(blob2)

const innerLink = document.createElement('a');
innerLink.download = 'hello1.txt';

// innerLink.href = URL.createObjectURL(new Blob([blob2, blob, 'jaja']));
const reader = new FileReader();
reader.readAsDataURL(new Blob([blob2, blob, 'jaja']))

reader.onload = () => {
  innerLink.href = reader.result;
  console.log(reader.result);
  // innerLink.click();
};

URL.revokeObjectURL(innerLink.href);

const img = document.querySelector('img');
const canvas = document.createElement('canvas');
canvas.width = img.clientWidth;
canvas.height = img.clientHeight;

const context = canvas.getContext('2d');
context.drawImage(img, 0, 0);
let imageBlob;

(async () => {
  imageBlob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
  console.log(imageBlob);
  const link = document.createElement('a');
  link.href = URL.createObjectURL(imageBlob);
  link.download = 'exapmle.png';
  link.innerHTML = 'Download Urahara';
  document.body.append(link);


const fileReader = new FileReader();
fileReader.readAsArrayBuffer(imageBlob)

fileReader.onload = () => {
  console.log('fileReader res', fileReader.result);
};
})();


setTimeout(() => {
  console.log(('blob', {
    blob,
    blob2,
    imageBlob
  }));
}, 3 * 1000);
