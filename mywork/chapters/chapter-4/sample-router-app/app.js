// path: usersの時に表示するcomponent　テンプレートは text/x-template形式でそのidは#user-list

var UserList = {
    template: '#user-list',
}

router = new VueRouter({
    routes: [
        {
            path: '/top',
            component: {
                template:'<div>トップページ</div>'
            }
        },
        {
            path: '/users',
            component: UserList,
        },
    ]
})

app = new Vue({
    router: router
}).$mount('#app')

window.app = app