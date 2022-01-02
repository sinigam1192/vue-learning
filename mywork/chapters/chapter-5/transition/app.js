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
    }
})

window.vm = vm