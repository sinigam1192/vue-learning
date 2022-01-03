// #appにマウントしてください
var MyButton = {
    template: `
    <button>
        <!-- 親コンポーネントに差し替えられる -->
        <slot>OK</slot>
    </button>
    `
}


var vm = new Vue({
    el: '#app',
    components: {
        MyButton: MyButton,
    }
})