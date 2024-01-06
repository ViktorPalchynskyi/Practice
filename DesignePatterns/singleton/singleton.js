class Singleton {
    static getInstance() {
        if(!Singleton.instance) {
            Singleton.instance = this;
        }

        return Singleton.instance;
    }
}


const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true