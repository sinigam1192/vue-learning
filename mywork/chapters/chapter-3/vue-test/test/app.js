Vue.component('user-login',{
    template: '#login-template',
    data: function () {
        return {
            userid: '',
            password: ''
        }
    },
    methods: {
        login: function(){
            auth.login(this.userid, this.password)
        }
    },
})

var auth = {
    login: function(id, pass){
        window.alert("userid:"+ id + "\n" + "password:"+ pass)
    }
}

var vm = new Vue({
    el: "#login-example",

})
window.vm = vm