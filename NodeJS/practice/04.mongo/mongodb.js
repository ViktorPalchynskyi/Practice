const users = [
    { id: 1, name: 'Ivan' },
    { id: 2, name: 'Anna' },
    { id: 3, name: 'Sergey' },
    { id: 5, name: 'Alex' },
];

const usersByName = {
    Ivan: users[0],
    Anna: users[1],
    Sergey: users[3],
    Alex: users[4],
};


function findByName(name) {
    // return users.find(u => u.name === name);
    return usersByName[name];
}

console.log(findByName('Ivan'));
console.log(findByName('Dmitry'));