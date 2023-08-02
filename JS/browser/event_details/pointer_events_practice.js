const thumb = document.querySelector('.thumb');
const slider = document.getElementById('slider');

thumb.onpointerdown = function (event) {
  thumb.setPointerCapture(event.pointerId);
  thumb.onpointermove = function (event) {
    const newLeft = event.clientX - slider.getBoundingClientRect().left;
   
    if (newLeft < 0)newLeft = 0;
 
    let rightEdge = slider.offsetWidth - thumb.offsetWidth;
 
    if (newLeft > rightEdge) newLeft = rightEdge;
    
    thumb.style.left = `${newLeft}px`;
  };

  thumb.onpointerup = function () {
    thumb.onpointermove = null;
    thumb.onpointerup = null;
  };
};
