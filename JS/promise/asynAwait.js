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

const fetchJson = async (url) => {
   const res = await fetch(url);
   return res.json();
};

const showAvater = async () => {
  try {
   const user = await fetchJson('./DB/user.json');
   const githubProfile = await fetchJson(`https://api.github.com/users/${user.name}`);
   console.log('githubProfile', githubProfile);
   let img = document.createElement('img');
   img.src = githubProfile.avatar_url;
   document.body.append(img);
   setTimeout(() => {
      img.remove();
      alert(`Закончили показ ${githubProfile.name}`);
   }, 3000);
  } catch(error) {
      console.log('error', error);
  }
};