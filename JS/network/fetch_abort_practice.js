const controller = new AbortController();
const signal = controller.signal;

signal.addEventListener('abort', () => console.log('abort!!!'));

(async () => {
  try {
    const urls = ['./test.jpg','./test.jpg','./test.jpg','./test.jpg','./test.jpg','./test.jpg','./test.jpg','./test.jpg','./test.jpg','./bleach.jpg', './bleach.jpg','./bleach.jpg','./bleach.jpg','./bleach.jpg','./bleach.jpg','./bleach.jpg','./bleach.jpg'];
    const fechJobs = urls.map((url) => fetch(url, {
      signal: controller.signal,
    }))
    const res = await Promise.all(fechJobs);
    console.log(res);
    controller.abort();
  } catch (error) {
    console.log('here');
    if (error.name === 'AbortError') {
      console.log(error);
    } else {
      throw error;
    }
  }
})();
