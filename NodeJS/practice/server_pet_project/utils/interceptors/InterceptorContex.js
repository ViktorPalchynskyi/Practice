module.exports = class InterceptorContex {
    constructor(strategy, axiosInstence) {
        this.strategy = strategy;
        this.axiosInstence = axiosInstence;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    configInterceptors() {
        return this.strategy.configInterceptors(this.axiosInstence);
    }
};
