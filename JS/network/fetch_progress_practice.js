const url =
  'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100';

(async () => {
  const response = await fetch(url);
  const reader = response.body.getReader();
  const contentLength = Number(response.headers.get('Content-Length'));
  let receivedLength = 0;
  let chunks = [];

  while (true) {
    const { done, value } = await reader.read();

    if (done) break;
    console.log({ done, value });
    chunks.push(value);
    receivedLength += value.length;

    console.log(`Получено ${receivedLength} из ${contentLength}`);
  }
  const chunksAll = new Uint8Array(receivedLength);
  const blob = new Blob(chunks);
  console.log({ chunksAll, chunks, blob, contentLength, reader });
  let position = 0;

  for (const chunk of chunks) {
    chunksAll.set(chunk, position);
    position += chunk.length;
  }

  const result = new TextDecoder('utf-8').decode(chunksAll);
  const commits = JSON.parse(result);
  console.log({ commits });
})();
