// MEMO: <transition></transition>はvue.jsに備わっているラッパーコンポーネント
// アニメーションの定義として、開始と終了の状態、開始から終了までの遷移するかということ。
// デフォルトでクラス名に　v- とプレフィックスが付いているが、name属性で書き換え可能。
// ex). default: v-enter   nameがfadeの時: fade-enter

// クラスの植え替えのタイミングはP151参照
// v-enter 要素の挿入前に追加〜アニメーション開始時に削除
// v-enter-to アニメーション開始時に追加〜アニメーション終了時に削除
// v-enter-active 要素の挿入前からアニメーションの終了時まである。設定用
// c-leave 削除用アニメーション開始前に追加〜削除用アニメーション開始時まで削除
// v-leave-to 削除用アニメーションの開始に追加〜削除アニメーション終了後に削除
// v-leave-active 削除アニメーション開始前から削除用アニメーション終了後まである。
var PullDownMenu ={
    data: function () {
        return {
            isShownJava: false,
            name: 'めにゅう',
            items: [
                '1-1',
                '1-2',
                '1-3'
            ]
        }
    },
    template: `
        <div class="javascript" @mouseleave="isShownJava = false">
            <p class="javascript" @mouseover="isShownJava = true"><a href="#" class="menu javascript">{{name}}</a></p>
            <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @leave="leave"
                :css="false"
            >
                <ul v-if="isShownJava" class="javascript" >
                    <li v-for="item in items" :key="item" class="javascript">
                        <a href="#" class="menu-item javascript">{{ item }}</a>
                    </li>
                </ul>
            </transition>
        </div>
    `,
    methods: {
        beforeEnter: function(el){
            el.style.height = '0px'
            el.style.opacity = '0'
        },
        enter: function(el, done){
            anime({
                targets: el,
                opacity: 1,
                height: el.scrollHeight + 'px',
                duration: 3000,
                complete: done,
            })
        },
        leave: function(el, done){
            anime({
                targets: el,
                opacity: 0,
                height: '0px',
                duration: 300,
                complete: done,
            })
        }
    }
}


var vm = new Vue({
    el: '#app',
    data: function (){
        return {
            isShown: false,
            isShownAnime: false,
            animationClass: 'bounce'
        }
    },
    computed: {
        activeClass: function(){
            return this.animationClass + ' animated'
        }
    },
    components: {
        PullDownMenu,
    }
})

window.vm = vm