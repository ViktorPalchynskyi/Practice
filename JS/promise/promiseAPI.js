const urls = [
   'https://api.github.com/users/iliakan',
   '123https://api.github.com/users/remy',
   'https://api.github.com/users/jeresig'
];

const request = urls.map(url => fetch(url));

// Promise.all(request)
//    .then(responses => Promise.all(responses.map(res => res.json())))
//    .then(data => console.log('Promise.all' ,data))
//    .catch(error => console.log('Promise.all' ,error));

// Promise.allSettled(request)
//    .then(responses => {
//       console.log('responses', responses);
//       return Promise.allSettled(
//          responses.map(res => res.status === 'fulfilled' && res.value.json())
//       );
//    })
//    .then(data => console.log('Promise.allSettled' ,data))
//    .catch(error => console.log('Promise.allSettled' ,error));

// Promise.race(request)
//    .then(res => res.json())
//    .then(data => console.log('Promise.race' ,data))
//    .catch(error => console.log('Promise.race' ,error));

   
Promise.any(request)
   .then(res => res.json())
   .then(data => console.log('Promise.any' ,data))
   .catch(error => console.log('Promise.any' ,error));