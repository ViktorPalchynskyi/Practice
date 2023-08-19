const baseURL = 'http://localhost:3000';
const userURL = new URL('/user', baseURL);
const analyticsURL = new URL('/analytics', baseURL);
const encodedURL = encodeURI('https://site.com/привет');
const encodedURLComponent = encodeURIComponent('Rock&Roll');

const urlWithEncodedComponent = `htpps://google.com/search?q=${encodedURLComponent}`;

userURL.searchParams.append('name', 'Viktor @!:');

console.log('url', {
    userURL,
    analyticsURL,
    urlWithEncodedComponent,
    encodedURL
});

alert(userURL)