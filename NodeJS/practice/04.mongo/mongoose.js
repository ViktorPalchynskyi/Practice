const { Schema, model, connect } = require('mongoose');

async function main() {
    // 1. Define schema/model
    const productSchema = new Schema({
        title: {
            type: Schema.Types.String,
            required: true,
        },
        // etr: {
        //     type: Schema.Types.String,
        //     required: true,
        //     unique: true,
        // },
        image: {
            type: Schema.Types.String,
            required: true,
            // validate: {
            //     validator: function(v) {
            //         return /https:\/\/www.\google\.com\/images/.test(v);
            //     },
            //     message: 'invalid image url',
            // }
        },
        price: {
            type: Schema.Types.Number,
            required: true,
        },
        currency: {
            type: Schema.Types.String, // 'usd', 'rub'
            required: true,
            enum: ['usd', 'rub', 'eur'],
        },
    });

    const publisherSchema = new Schema({
        name: {
            type: Schema.Types.String,
        },
        country: {
            type: Schema.Types.String,
        }
    });

    const bookSchema = new Schema({
        title: {
            type: Schema.Types.String,
            required: true,
        },
        publisher: {
            type: Schema.Types.ObjectId,
            ref: 'Publisher',
        }
    });

    const authorSchema = new Schema({
        name: {
            type: Schema.Types.String,
            required: true,
        },
        book: [{
            type: Schema.Types.ObjectId,
            ref: 'Book',
        }],
    })

    const Product = model('Product', productSchema);
    const Publisher = model('Publisher', publisherSchema);
    const Book = model('Book', bookSchema);
    const Author = model('Author', authorSchema);

    Product.deleteMany({});
    Publisher.deleteMany({});
    Book.deleteMany({});
    Author.deleteMany({});
    // 2. Connect to the database
    await connect('mongodb://localhost:27017', {
        dbName: 'ecommerce-shop'
    });

    // 2.5. Create index

    productSchema.index({ currency: 1, price: 1 });

    // 3 Use!
    await Product.create({
        title: 'Apple stock',
        image: 'https://e7.pngegg.com/pngimages/674/71/png-clipart-apple-logo-apple-logo-material-logo-computer-wallpaper.png',
        price: 16938,
        currency: 'eur',
    });

    const product = await Product.find({
        price: {$gte: 10000},
        currency: 'eur',
    });

    const oreily = await Publisher.create({
        name: 'O\'Reilly Media, Inc.',
        country: 'USA',
    });

    const warAndPeace = await Book.create({ title: 'War and peace', publisher: oreily });
    const annaKarenina = await Book.create({ title: 'Anna Karenina', publisher: oreily });
    const hadjiMurad = await Book.create({ title: 'Hadji Murad', publisher: oreily });

    const lev = await Author.create({
        name: 'Lev Tolstoy',
        book: [warAndPeace, annaKarenina, hadjiMurad],
    });

    const autor = await Author.findOne({ name: 'Lev Tolstoy' }).populate({
        path: 'book', 
        populate: {
            path: 'publisher',
        },
    });
    console.log('autor', autor);
    // console.log('product', product);
}

main();