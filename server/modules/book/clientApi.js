import { Book } from './book';

let book = new Book();

Meteor.methods({
    addBook: (data)=>{
        book.add(data);
    },
    removeBook:(id)=> {
        book.remove(id);
    },
    updateBook:(data)=> {
        book.update(data);
    }
});