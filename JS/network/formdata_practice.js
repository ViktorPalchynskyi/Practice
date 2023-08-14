const localURL = 'http://localhost:3000/user';

document.forms.formElem.addEventListener('submit',  async (e) => {
    e.preventDefault();
    const formData = new FormData(document.forms.formElem);

    for (const [key, value] of formData) {
        console.log(`${key} = ${value}`);
    }

    console.log(formData);

    const res = await fetch(localURL, {
        method: 'POST',
        body: formData,
      });

      const result = await res.json();
      alert(result);
});