class EventEmitter {
    constructor() {
        this.events = {};
    }

    addEventListener(eventName, func) {
        if (typeof func !== 'function') {
            throw Error('Listener must be a fucntion.');
        }
        
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(func);
    }    

    removeEventListener(eventName, func) {
        if (!this.events[eventName]) {
            throw Error('There is no such event in the system.')
        }

        this.events[eventName].filter((listener) => listener !== func);
    }

    on(eventName, func) {
        this.addEventListener(eventName, func);
    }

    off(eventName, func) {
        this.removeEventListener(eventName, func);
    }

    once(eventName, func) {
        const wrapper = () => {
            func();
            this.off(eventName, func);
        };

        this.on(eventName, wrapper);
    }

    emit(eventName, data) {
        if (!this.events[eventName]) {
            throw Error('There is no such event in the system.')
        }

        this.events[eventName].forEach(listener => listener.call(null, data));
    }
}