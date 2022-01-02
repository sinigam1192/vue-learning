// userDataをjsonで
var userData = [
    {
        id: 1,
        name: 'ピカチュウ',
        skills: [
            {name: 'でんきショック' },
            {name: 'しっぽをふる' },
            {name: 'たいあたり' },
            {name: 'でんこうせっか' }
        ]
    },
    {
        id: 2,
        name: 'ヒトカゲ',
        skills: [
            {name: 'たいあたり' },
            {name: 'ひのこ' },
            {name: 'なきごえ' },
            {name: 'ひっかく' }
        ]
    },
    {
        id: 3,
        name: 'フシギダネ',
        skills: [
            {name: 'はっぱカッター' },
            {name: 'こうごうせい' },
            {name: 'ねむりごな' },
            {name: 'あまいかおり' }
        ]
    },
    {
        id: 4,
        name: 'ゼニガメ',
        skills: [
            {name: 'からにこもる' },
            {name: 'あわ' },
            {name: 'みずでっぽう' },
            {name: 'ハイドロポンプ' }
        ]
    },
]

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

var UserDetail = {
    template: '#user-detail',
    data: function(){
        return {
            loading: false,
            error: null,
            user: null,
        }
    },
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
            getUser(this.$route.params.userId, (function (err, user){
                this.loading = false
                if(err){
                    this.error = err.toString()
                }else{
                    this.user = user
                }
                // bind を確認
            }).bind(this))
        }
    } 
}

// 擬似API用の関数
var getUsers = function (callback) {
    setTimeout(function(){
        callback(null, userData)
    }, 1000)
}

var getUser = function (userId, callback){
    setTimeout(function(){
        var filterdUsers = userData.filter(function(user){
            return user.id === parseInt(userId, 10)
        })
        console.log(filterdUsers)
        callback(null, filterdUsers && filterdUsers[0])
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
        {
            path: '/users/:userId',
            component: UserDetail,
        },
    ]
})

app = new Vue({
    router: router
}).$mount('#app')

window.app = app