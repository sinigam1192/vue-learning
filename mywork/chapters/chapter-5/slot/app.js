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

var ScopeCheckMyButton = {
    data: function(){
        return {
            textLabel: 'child'
        }
    },
    template: `
        <button>
            <slot>OK</slot>
        </button>
    `
}

var ToDoList = {
    props: {
        todos: {
            type: Array,
            required: true,
        }
    },
    template: `
    <div>
        <ul>
            <template v-for="todo in todos">
            <!-- v-bindディレクティブでtodoを親コンポーネントに渡す -->
                <slot :todo="todo">
                    <li :key="todo">
                    {{ todo.text }}
                    </li>
                </slot>
            </template>
        </ul>
    </div>
    `
}


var vm = new Vue({
    el: '#app',
    data: function(){
        return {
            textLabel: 'parent',
            todos: [
                {id: 1, text: "買い物", isCompleted: true},
                {id: 2, text: "掃除", isCompleted: false},
                {id: 3, text: "晩ご飯", isCompleted: true},
                {id: 4, text: "洗濯", isCompleted: false}
            ]
        }
    },
    components: {
        MyButton: MyButton,
        MyPage: MyPage,
        ScopeCheckMyButton: ScopeCheckMyButton,
        TodoList: ToDoList, 
    }
})