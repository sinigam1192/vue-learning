// #appにマウントしてください

// 描画関数を使用しない使いづらいコンポーネント
// １：templateが
var MyButton = {
    props: ['href', 'tag'],
    template: `
    <a v-if="!tag && href || tag === 'a'" href="href || '#'">
        <slot></slot>
    </a>
    <span v-else-if="tag === 'span'">
        <slot></slot>
    </span>
    <button v-else>
        <slot></slot>
    </button>
    ` 
}

var RenderMyButton = {
    props: ['href', 'tag'],
    render: function (createElement) {
        var tag = this.tag || (this.href ? 'a' : 'button')

        return createElement(tag, {
            attrs: {
                href: this.href || '#',
            }
        }, this.$slots.default)
    }
}



var vm = new Vue({
    el: '#app',
    components:{
        MyButton: MyButton,
        RenderMyButton: RenderMyButton, 
    } 
})

window.vm =vm;