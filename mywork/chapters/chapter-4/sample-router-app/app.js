// path: usersの時に表示するcomponent　テンプレートは text/x-template形式でそのidは#user-list
var UserList = {
    template: '#user-list',
    data: function(){
        return {
            loading: false,
            users: function(){ return [] }, // 初期値は空配列
            error: null,
        }
    },
    // サイクルフック 初期化時のデータの取得
    created: function(){
        this.fetchData()
    },
    // watch　ルートの変更を感知してデータを再取得する
    watch: {
        '$route': 'fetchData'
    },

    methods: {
        fetchData: function() {
            this.loading = true
            getUsers((function (err, users){
                this.loading = false
                if(err){
                    this.error = err.toString()
                }else{
                    this.users = users
                }
                // bind を確認
            }).bind(this))
        }
    }
}

// 擬似API用の関数
var getUsers = function (callback) {
    setTimeout(function(){
        callback(null, [
            {
                id: 1,
                name: 'ピカチュウ',
            },
            {
                id: 2,
                name: 'ヒトカゲ',
            },
            {
                id: 3,
                name: 'フシギダネ',
            },
            {
                id: 4,
                name: 'ゼニガメ',
            },
        ])
    }, 1000)
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