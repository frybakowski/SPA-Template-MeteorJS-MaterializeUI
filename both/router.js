FlowRouter.route('/login', {
    action: function() {
        BlazeLayout.render("login");
    }
});


FlowRouter.route('/overview', {
    action: function() {
        if(Meteor.userId()){
            BlazeLayout.render("overview");
        } else {
            FlowRouter.go("/login");
        }
    }
});

FlowRouter.route('/overview/:bookId', {
    action: function() {
        if(Meteor.userId()){
            BlazeLayout.render("overview");
        } else {
            FlowRouter.go("/login");
        }
    }
});

FlowRouter.notFound = {
    action: function() {
        FlowRouter.go("/overview");
    }
};