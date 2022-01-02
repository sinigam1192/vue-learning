// 子コンポーネントのカウンターボタン
var counterButton = Vue.extend({
    template: '<span>{{counter}}個<button v-on:click="addToCart">追加</button></span>',
    data: function () {
        return {
            counter: 0
        } 
    },
    methods: {
        addToCart: function() {
            this.counter += 1
            this.$emit('increment') //incrementが発火    
        }
    },
})

// 親コンポーネントのカート
var vm = new Vue({
    el: "#fruits-counter",
    components: {
        'counter-button': counterButton
    },
    data: {
        total: 0,
        fruits: [
            {name: '梨'},
            {name: 'いちご'}
        ]
    },
    methods: {
        incrementCartStatus: function(){
            this.total += 1
        }
    },
})

window.vm = vm