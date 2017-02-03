export class Book {
    add(data) {
        Books.insert(data);
    }
    remove(id) {
        Books.remove({_id: id});
    }
    update(data) {
        Books.update({_id: data.id}, data);
    }
}