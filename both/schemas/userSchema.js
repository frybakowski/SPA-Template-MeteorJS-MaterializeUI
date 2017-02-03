Schema = Schema || {};
Schema.userSchema = new SimpleSchema({
    username: {
        type: String,
        label: 'Użytkownik'
    },
    password: {
        type: String,
        label: 'Hasło'
    }
});


SimpleSchema.messages({
    required: "Pole jest wymagane"
});