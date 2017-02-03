Schema = {};
Schema.booksSchema = new SimpleSchema({
    name: {
        type: String,
        label: 'Nazwa'
    },
    type: {
        type: Number,
        label: 'Typ'
    },
    languages: {
        type: [Number],
        label: 'Tematyka'
    },
    id: {
        type: String,
        optional: true
    }
});

