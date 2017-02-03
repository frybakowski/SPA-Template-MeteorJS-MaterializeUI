Template.registerHelper('booksSchema', () => {
    return Schema.booksSchema;
});

Template.registerHelper('userSchema', ()=> {
    return Schema.userSchema;
});

Template.registerHelper('types', ()=> {
    return [{
        label: 'Kryminał',
        value: 1
    }, {
        label: 'Powieść',
        value: 2
    }, {
        label: 'Fantastyka',
        value: 3
    }, {
        label: 'Thriller',
        value: 4
    }]
});

Template.registerHelper('languages', ()=> {
    return [{
        label: 'angielski',
        value: 1
    }, {
        label: 'niemiecki',
        value: 2
    }, {
        label: 'polski',
        value: 3
    }, {
        label: 'francuski',
        value: 4
    }, {
        label: 'włoski',
        value: 5
    }]
});