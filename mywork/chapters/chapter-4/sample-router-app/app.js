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

// path: users/:userIdの時に表示するcomponent　テンプレートは text/x-template形式でそのidは#user-detail
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
            }).bind(this))
        }
    } 
}

// path: users/newの時に表示するcomponent　テンプレートは text/x-template形式でそのidは#user-create
var UserCreate = {
    template: '#user-create',
    data: function(){
        return {
            sending: false,
            error: null,
            user: this.defaultUser(),
        }
    },
    created: function(){
    },
    // watch　ルートの変更を感知してデータを再取得する
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        defaultUser: function() {
            return {
                name: '',
                skills: [
                    {name: ''},
                    {name: ''},
                    {name: ''},
                    {name: ''}
                ]
            }
        },

        createUser: function() {
            if (this.user.name.trim() === ''){
                this.error = '名前は必須です。'
                return
            }
            if(this.user.skills.length === 0){
                this.error = '使える技は1つは必要です。'
                return
            }
            postUser(this.user, (function (err, user){
                this.sending = false
                if (err){
                    this.error = toString()
                } else {
                    this.error = null
                    this.user = this.defaultUser()
                    alert('ユーザーが作成されました。')
                    this.$router.push('/users')
                }
            }).bind(this))
        }
    } 
}

var Login = {
    template: '#login',
    data: function(){
        return {
            email: 'vue@example.com',
            pass: '',
            error: false,
        }
    },
    methods: {
        login: function(){
            Auth.login(this.email, this.pass, function(loggedIn){
                if(!loggedIn){
                    this.error = true
                } else {
                    this.$router.replace(this.$route.query.redirect || '/')
                }
            }.bind(this))
        }
    }
}
 
// 擬似認証
var Auth = {
    login: function (email, pass, cb){
        // ダミーデータからの擬似ログイン
        setTimeout(function(){
            if (email === 'vue@example.com' && pass === 'vue'){
                // localStrageで
                localStorage.token = Math.random().toString(36).substring(7)
                if(cb){ cb(true)}
            }else{
                cb(false)
            }
        }, 0)
    },
    logout: function(){
        delete localStorage.token
    },
    loggedIn: function(){
        return !!localStorage.token
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
        callback(null, filterdUsers && filterdUsers[0])
    }, 1000)
}

// 擬似API経由で情報を更新したようにする 擬似POST
var postUser = function (params, callback){
    setTimeout(function(){
        params.id = userData.length + 1
        userData.push(params)
        callback(null, params)
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
            path: '/users/new',
            component: UserCreate,
            beforeEnter: function(to, from, next){
                // ログイン済であれば登録を表示するようにする
                if(!Auth.loggedIn()){
                    // 未ログインの場合
                    next({
                        path: '/login',
                        query: { redirect: to.fullPath }
                    })
                } else {
                    // ログイン済の場合
                    next()
                }
            }
        },
        {
            path: '/users/:userId',
            name: 'user',
            component: UserDetail,
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/logout',
            beforeEnter: function(to, from, next){
                Auth.logout()
                next('/')
            },
        },
        {
            path: '*',
            redirect: '/users',
        }
    ]
})

app = new Vue({
    data: {
        Auth: Auth,
    },
    router: router
}).$mount('#app')

window.app = app

// MEMO:
// $route や　$routerはインスタンスを示す。
// それぞれプロパティやネストしたルーティングも可能。
// ネストする場合は、children: {}　内に明示する。

// SPAの場合、ブラウザの戻るボタンなどないためクライアント側で管理が必要。以下や他の検討が必要？
// ex). URL Hash
// ex). HTML-5 History API　など

