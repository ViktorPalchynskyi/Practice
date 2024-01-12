function readOnly(target, key, descriptor) {
    console.log('readOnly arguments', { target, key, descriptor });
    descriptor.writable = false;
    console.log(descriptor);
    return descriptor;
}

class User {
    constructor(name) {
        this.name = name;
    }

    // @readOnly
    sayHi() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

Object.defineProperty(User.prototype, 'sayHi', readOnly(User.prototype, 'sayHi', Object.getOwnPropertyDescriptor(User.prototype, 'sayHi')));

const user = new User('Elizaveta');
user.sayHi = function() { console.log(`Changed name`); };
user.sayHi();