const baseURL = 'http://localhost:8080';

async function run() {
    await fetch(`${baseURL}/set-cookies`, {
        credentials: 'include',
    });

    const res = await fetch(`${baseURL}/get-cookies`, {
        credentials: 'include',
    });

    const payload = await res.json();
    document.getElementById("content").innerText = JSON.stringify(payload, null, 2);
    console.log('START');
}

run();