

const schema = {
    key: {
        type: 'String',
        unique: true,
    },
    key: {
        type: 'mongoose.Types.ObjectId',
        ref: 'User',
    },
    ua: {
        type: 'String',
        required: true,
    },
};

const Session = {
    async create({ key, user, ua }) {
        return new Promise((res, rej) => res(schema));
    },
    async findOne({ key }) {
        return new Promise((res, rej) => res(schema));
    },
}

function uuid() {
    return 'asdfa3141rasdfg';
}

(async() => {
    const ctx = {};
    const key = uuid();
    await Session.create({ key: 'asdf', user: 'Viktor', ua: 'Chrome' });

    ctx.body = key;
})()

(async(next) => {
    const ctx = { 
        get(key) { 
            const obj = { 'authorization': uuid() }

            return obj[key]
        } 
    };
    const key = ctx.get('authorization');

    if(!key) return next();
    // const key = ctx.cookies.get('session');

    await Session.findOne({ key });
    // ...
})()