Template.addBook.onRendered(()=> {
    $('select').material_select();
});

Template.editBook.onRendered(()=> {
    $('select').material_select();
});

Template.editBook.helpers({
    bookToEdit() {
        return FlowRouter.getParam("bookId") === 'new'? null:Books.findOne({_id: FlowRouter.getParam("bookId")})
    }
});

Template.bookManage.helpers({
    bookToEdit() {
        return FlowRouter.getParam("bookId") === 'new'? null:Books.findOne({_id: FlowRouter.getParam("bookId")})
    }
});

AutoForm.addHooks('bookManageForm', {
    onSuccess: function(formType, result) {
        MaterializeModal.close();
        Materialize.toast('Dane zostały zapisane pomyslnie', 4000)
    },

    onError: function(formType, error) {
        Materialize.toast('Wystąpił błąd podczas przetwarzania. Dane nie zostały zapisane', 4000)
    },
    formToDoc: function(doc) {
        if(doc.name && doc.type && doc.languages) {
            $('#bookFormFailed').hide();
            $('#submitButton').attr('disabled', false);
            return doc;
        } else {
            $('#submitButton').attr('disabled', true);
            $('#bookFormFailed').show();
        }
    }
});