class Publisher {
    constructor() {
        this.subscribers = [];
    }

    subscribe(observer) {
        if (!(observer instanceof Observer)) {
            throw Error('Expected Observer to be instance of class Observer.')
        }

        if (!this.subscribers.includes(observer)) {
            this.subscribers.push(observer);
        }
    }

    unsubscribe(observer) {
        if (this.subscribers.includes(observer)) {
            this.subscribers = this.subscribers.filter(subscriber => subscriber !== observer);
        }
    }

    notify(data) {
        this.subscribers.forEach(subscriber => subscriber.update(data));
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }

    update(data) {
        console.log(`The observer ${this.name} recieved data ${data} from the Publisher`);
    }
}

const publisher = new Publisher();

const observer1 = new Observer('Наблюдатель 1');
const observer2 = new Observer('Наблюдатель 2');

publisher.subscribe(observer1);
publisher.subscribe(observer2);
publisher.subscribe('asdf');
publisher.notify('Привет, мир!'); // Оба наблюдателя получат уведомление

publisher.unsubscribe(observer1);

publisher.notify('Другое сообщение'); // Только Наблюдатель 2 получит уведомление