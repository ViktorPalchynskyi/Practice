const squre = document.querySelector('.squre');
const small = document.querySelector('.small');

squre.addEventListener('mouseover', function (e) {
    e.target.style.backgroundColor = 'skyblue';
    // console.log(`mouseover relatedTarget ${e.relatedTarget.className}`);
});

squre.addEventListener('mouseout', function (e) {
    e.target.style.backgroundColor = 'coral';
    // console.log(`mouseover relatedTarget ${e.relatedTarget.className}`);
    // console.log(`mouseout target ${e.target.className}`);

    if (e.relatedTarget.tagName !== 'BODY') e.relatedTarget.style.backgroundColor = 'coral';

});

squre.addEventListener('mousemove', (e) => {
    console.log(`pointer x: ${e.clientX}, y:${e.clientY}`);
});