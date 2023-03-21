new Promise((resolve, reject) => {
   setTimeout(() => resolve(123), 2000);
})
   .then(res => {
      return new Promise((resolve, reject) => {
         setTimeout(() => resolve(res * 200), 1000);
      });
   })
   .then(res => {
      console.log('res', res);
   });

const loadScritp = src => {
   return new Promise((reselve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => reselve(script);
      script.onerror = () => reject(new Error('Error during loading script'));
      document.head.append(script);
   });
};

loadScritp('./testFile.js')
   .then(res => {
      // console.log('res', res);
      // console.log(test(2, 3));
      return loadScritp('./testFile2.js');
   })
   .then(res => {
      // console.log('res', res);
      // console.log(test(2, 3));
      // console.log(test2(2, 3));
   })
   .catch(error => console.log('error', error));

fetch('./DB/user.json')
   .then(res => res.json())
   .then(user => fetch(`https://api.github.com/users/${user.name}`))
   .then(res => res.json())
   .then(githubProfile => {
      return new Promise((resolve, reject) => {
         console.log('githubProfile', githubProfile);
         let img = document.createElement('img');
         img.src = githubProfile.avatar_url;
         document.body.append(img);
         setTimeout(() => {
            img.remove();
            resolve(githubProfile); // (**)
         }, 3000);
      });
   })
   .then(githubUser => alert(`Закончили показ ${githubUser.name}`));