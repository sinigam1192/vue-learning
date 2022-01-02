var router = new VueRouter({
    routes: [
        {
            path: '/',
            component:{
                template: '<h1>root</h1>'
            }
        },
        {
            path: '/top',
            component:{
                template: '<h1>top</h1>'
            }
        },
        {
            path: '/users',
            component:{
                template: '<h1>users</h1>'
            }
        },
    ]
})


var app = new Vue({
  router: router  
}).$mount("#app")
