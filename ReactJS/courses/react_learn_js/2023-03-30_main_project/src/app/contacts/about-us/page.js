async function getData() {
    const res = await fetch('http://localhost:3001/api/restaurants');

    if (!res.ok) {
        throw new Error('Failed to fetch data.');
    }

    return await res.json();
}

export default async function Adresses() {
    const restaurants = await getData();
    console.log(restaurants);
    return <div>About Us {restaurants[0].name}</div>;
}
