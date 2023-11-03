const controller = new AbortController();
const signal = controller.signal;

signal.addEventListener('abort', () => console.log('abort!!!'));

(async () => {
  try {
    const urls = ['./test.jpg','./test.jpg','./test.jpg','./test.jpg','./test.jpg','./test.jpg','./test.jpg','./test.jpg','./test.jpg','./bleach.jpg', './bleach.jpg','./bleach.jpg','./bleach.jpg','./bleach.jpg','./bleach.jpg','./bleach.jpg','./bleach.jpg'];
    const fechJobs = urls.map((url) => fetch(url, {
      signal: controller.signal,
    }))
    await Promise.all(fechJobs);
    controller.abort();
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log(error);
    } else {
      throw error;
    }
  }
})();
