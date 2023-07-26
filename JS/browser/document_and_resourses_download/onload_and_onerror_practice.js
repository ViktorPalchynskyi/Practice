const script = document.createElement('script');
script.src = 'my_to_onload_practice.js';

document.head.append(script);

const script2 = document.createElement('script');
script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js';

document.head.append(script2);

script2.onload = () => {
    // alert(_.VERSION);
};

const script3 = document.createElement('script');
script3.src = 'https://example.com/404.js';

document.head.append(script3);

script3.onerror = function() {
    // alert(_.VERSION);
    alert("Ошибка загрузки " + this.src);
};
