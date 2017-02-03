Template.overview.onCreated(()=> {
    Meteor.subscribe('books');

    let bookId = FlowRouter.getParam("bookId");
    if(bookId && bookId !== 'new') {
        editBook(bookId);
    } else if(bookId && bookId === 'new') {
        addBook();
    }
});

Template.overview.events({
   'click #logout': ()=>{
       Meteor.logout((e)=>{
           FlowRouter.go("login");
       })
   },

    'click #add': ()=> {
        FlowRouter.go("/overview/new");
        addBook();
    },

    'click #bookRemove': (e)=> {
        let bi = e.target.getAttribute('data-bi');
        MaterializeModal.message({
            title: 'Usuń książkę',
            message: '<div>Czy na pewno chcesz usunąć książkę</div>' +
            '<div class="center-align">' +
            '<button type="submit" id="submitButton" class="btn btn-primary">Usuń</button>' +
            '<button id="closeButton" class="waves-effect btn-flat">Anuluj</button>' +
            '</div>',
            dismissible: false,
            closeLabel: 'Anuluj',
            submitLabel: 'Usuń',
            callback: (e, d)=> {
                if(d.submit) {
                    Meteor.call('removeBook', bi);
                }
            }
        });
    },

    'click #bookEdit': (e)=> {
        let bi = e.target.getAttribute('data-bi');
        FlowRouter.go("/overview/" + bi);
        editBook(bi);
    }
});

Template.overview.helpers({
   books() {
       return Books.find();
   }
});

function addBook() {
    MaterializeModal.message({
        title: 'Dodaj książkę',
        bodyTemplate: 'bookManage',
        dismissible: false,
        closeLabel: 'Anuluj',
        callback: (e, d)=> {
            FlowRouter.go("/overview");
        }
    });
    $('select').material_select();
}

function editBook(bookId)  {
    MaterializeModal.message({
        title: 'Edytuj książkę',
        bodyTemplate: 'bookManage',
        dismissible: false,
        closeLabel: 'Anuluj',
        callback: (e, d)=> {
            FlowRouter.go("/overview");
        }
    });
    $('select').material_select();
}