const baseUrl = './server/';
// const res = fetch(url);

// res
//    .then(res => console.log(res))
//    .catch(error => console.error(error));


const getImage = async () => {
   // console.log('here');
   const response = await fetch(`${baseUrl}above-fog.jpg`);
   // console.log('response', response);
   const blob = await response.blob();
   // console.log('blob', blob);
   const img = document.createElement('img');
   img.style = 'position:fixed;top:10px;left:10px;width:100px';
   document.body.append(img);
   img.src = URL.createObjectURL(blob);
   // console.log(response.headers.get('Content-Type')); // application/json; charset=utf-8
   for (let [key, value] of response.headers) {
      // console.log(`${key} = ${value}`);
   }
   setTimeout(() => {
      img.remove();
      URL.revokeObjectURL(img.src);
    }, 3000);
};

getImage();

const postUser = async () => {
   const user = {
      name: 'Misha',
      age: 25,
   };
   const response = await fetch(`${baseUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user)
    });
   // console.log('response', response);
   const result = await response.json();
   // console.log('postUser ==> result', result);
};

postUser();