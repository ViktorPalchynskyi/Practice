class PubSub{
    constructor() {
        this.subscribers = {};
    }

    subscribe(eventName, listener) {
        if (!listener || typeof listener !== 'function') {
            throw new Error('Litener must be a function.');
        }

        this.subscribers[eventName] = this.subscribers[eventName] || [];
        this.subscribers[eventName].push(listener);
    }

    publish(eventName, data) {
        if (this.subscribers[eventName]) {
            this.subscribers[eventName].forEach(listener => listener(data));
        }
    }
}

// Использование
const pubSub = new PubSub();

// Подписчик 1
pubSub.subscribe('event1', data => console.log(`Подписчик 1 получил: ${data}`));

// Подписчик 2
pubSub.subscribe('event1', data => console.log(`Подписчик 2 получил: ${data}`));

// Издатель публикует событие
pubSub.publish('event1', 'Привет от event1!');