class Handler {
    constructor(next) {
        this.next = next;
    }

    handle(request) {
        if (this.next) {
            this.next.handle(request);
        }
    }
}

class AuthHandler extends Handler {
    handle(request) {
        console.log(`AuthHandler ${JSON.stringify(request)}`);
        if (!request.isAuthenticated) {
            console.log('User is not authenticated');
        }

        request.userToken = '123123l1h2312h3hasdlhfh21h3hh98693h692h43';
        request.isAdmin = Math.floor(Math.random() * 100) > 50;

        super.handle(request);
    }
}

class ValidationHandler extends Handler {
    handle(request) {
        console.log(`ValidationHandler ${JSON.stringify(request)}`);
        if (!request.isValid) {
            console.log('User is not valid');
        }

        super.handle(request);
    }
}

class LoggingHandler extends Handler {
    handle(request) {
        console.log(`LoggingHandler ${JSON.stringify(request)}`);
        console.log('Logger attached');

        super.handle(request);
    }
}

class AdminHandler extends Handler {
    handle(request) {
        console.log(`AdminHandler ${JSON.stringify(request)}`);
        if (request.isAdmin && request.userToken) {
            console.log('user is Admin');
            return;
        } else {
            console.log('user in not Admin');
        }

        super.handle(request);
    }
}

const chain = new LoggingHandler(new ValidationHandler(new AuthHandler(new AdminHandler(null))));
const request = { isAuthenticated: true, isValid: true };

chain.handle(request);