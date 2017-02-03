Template.login.events({
    'submit #loginForm': (e)=>{
        e.preventDefault();
        let username = e.target.username.value;
        let password = e.target.password.value;
        Meteor.loginWithPassword(username, password, (e) => {
               if(!e) {
                   FlowRouter.go("/overview");
               } else {
                    $('#badLogging').show();
               }
            });
    }
});


