const fileInput = document.getElementById('file');

fileInput.onchange = function() {
  const file = this.files[0];
  const reader = new FileReader();
  console.log(file);
  reader.readAsDataURL(file);

  reader.onload = function() {
    console.log(reader.result);
  }

  reader.onerror = function() {
    console.log(reader.error);
  }
}