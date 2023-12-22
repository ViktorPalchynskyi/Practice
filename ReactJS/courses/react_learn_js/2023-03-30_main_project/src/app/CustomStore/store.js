class Store {
    rootReducer;
    state;
    subscribers = new Map();
    
    constructor(rootReducer) {
        this.rootReducer = rootReducer;
        this.state = this.rootReducer();
    }

    subscribe(callback) {
        this.subscribers.set(callback, callback);
    }

    unsubscribe(callback) {
        this.subscribers.delete(callback); 
    }

    dispatch(action) {
        console.log('dispatch this', this);
        this.state = this.rootReducer(this.state, action);

        this.subscribers.forEach(callback => {
            callback(this.state);
        }); 
    }

    getState() {
        return this.state;  
    }
}

export const createStore = (function () {
    let store;

    return (rootReducer) => {
        if(!store) {
            store = new Store(rootReducer);
        }

        return store;
    }
})();
