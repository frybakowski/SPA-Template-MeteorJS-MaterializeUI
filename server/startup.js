import { Meteor } from 'meteor/meteor';
import { User } from './modules/user/user';

Meteor.startup(() => {
    var user = new User();
    if(!user.exist('user')) {
        user.add('user', 'user');
    }
});

Meteor.publish('books', function() {
    return Books.find();
});