// #appにマウントしてください
var MyButton = {
    template: `
    <button>
        <!-- 親コンポーネントに差し替えられる -->
        <slot>OK</slot>
    </button>
    `
}

var MyPage = {
    template: `
    <div>
        <header>
            <slot name="header">header</slot>
        </header>
        <main>
            <slot>body</slot>
        </main>
        <footer>
            <slot name="footer">footer</slot>
        </footer>
    <div>
    `
}


var vm = new Vue({
    el: '#app',
    components: {
        MyButton: MyButton,
        MyPage: MyPage,
    }
})