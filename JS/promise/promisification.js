const promisify = (func, manyArgs = false) => function (...args) {
   return new Promise((resolve, reject) => {
      function callback(error, ...results) {
         if (error) reject(error)
         else resolve(manyArgs ? results : results[0]);
      }

      args.push(callback);
      func.call(this, ...args);
   });
};

function loadScript(src, callback) {
   const script = document.createElement('script');
   script.src = src;
   script.onload = () => callback(null, script);
   script.onerror = () => callback(new Error('Error during loading script'));
   document.head.append(script);
}

const promisifyLoadScript = promisify(loadScript);
promisifyLoadScript('./testFile.js')
   .then(res => console.log('res', res.src));