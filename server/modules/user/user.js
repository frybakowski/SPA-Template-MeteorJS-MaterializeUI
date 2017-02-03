export class User {
    exist(username) {
        return typeof(Accounts.findUserByUsername(username)) !== 'undefined'
    }

    add(name, pass) {
        return Accounts.createUser({
            username: name,
            password: pass
        });
    }
}