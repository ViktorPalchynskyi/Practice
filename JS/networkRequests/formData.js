const formElem = document.getElementById('formElem');
console.log('formElem', formElem);
const canvasElem = document.getElementById('canvasElem');

canvasElem.onmouseup = function(e) {
  let ctx = canvasElem.getContext('2d');
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
 };

formElem.addEventListener('submit', async event => {
   event.preventDefault();
   const imageBlob = await new Promise(resolve => canvasElem.toBlob(resolve, 'image/png'));
   console.log('imageBlob', imageBlob);
   const formData = new FormData(formElem);
   formData.append('name12', 'VK')
   console.log(formData.has('name12'));
   console.log(formData);
   formData.append('image', imageBlob, 'image.png');
   const response = await fetch('/article/formdata/post/user', {
      method: 'POST',
      body: formData,
   });
   const result = await response.json();
})
