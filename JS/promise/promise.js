const promise = new Promise((resolve, reject) => {
   setTimeout(() => resolve('done'), 2000);
   setTimeout(() => reject('oshybochka'), 1000);
});

// promise
//    .then(res => console.log(res))
//    .finally(() => {
//       console.log('finally');
//       throw new Error('Finally error');
//    })
//    .catch(error => console.log(error));

function loadScript(src) {
   return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(script);
      script.onerror = () => reject(new Error('Error during loading script'));
      document.head.append(script);
   });
}

loadScript('./testFile.js')
   .then(script => console.log('script.src', script.src))
   .finally(() => console.log('close connection'))
   .catch((error) => console.log('error', error));