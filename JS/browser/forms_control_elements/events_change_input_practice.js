const input = document.getElementById('input');
const res = document.querySelector('.res');

input.addEventListener('change', function () {
  // alert(this.value);
});

input.addEventListener('input', function (params) {
  console.log('input =>', {
    value: this.value,
  });

  res.innerHTML = this.value;
});

input.oncut = input.oncopy = input.onpaste = function(event) {
	alert(`Opyat' kopirues', shakal ebuchiy ${event.type} - ${event.clipboardData.getData('text/plain')}`);
	return false;
};