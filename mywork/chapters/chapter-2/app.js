var items = [
    {
        name: '鉛筆',
        price: 300,
        quantity: 0,
    },
    {
        name: 'ノート',
        price: 400,
        quantity: 0,
    },
    {
        name: '消しゴム',
        price: 500,
        quantity: 0,
    }
]

vm = new Vue ({
    el: '#app',
    data: {
        items: items,
    },
    filters: {
        numberWithDelimiter: function (value){
            if(!value){
                return '0'
            }
            return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
        }
    },
    computed: {
        totalPrice: function () {
            return this.items.reduce(function (sum, item){
                return sum + (item.price * item.quantity)
            }, 0)
        },

        totalPriceWithTax: function () {
            return Math.floor(this.totalPrice * 1.1)
        },

        totalPriceTax: function () {
            return Math.floor(this.totalPrice * 0.1)
        },
        
        canBuy: function () {
            // 1000円以上の場合、購入できるようにする。
            return this.totalPrice >= 1000
        },

        errorMessageClass: function () {
            return {
                error: !this.canBuy
            }
        },

        errorMessageStyle: function () {
            return {
                border: this.canBuy ? '' : '1px solid red',
                color: this.canBuy ? '' : 'red'

            }
        }
    },
    methods:{
        doBuy: function(){
            // 本来はここでHTTPリクエストを行う。
            alert(this.totalPriceWithTax + '円のお買い上げ！')
            this.items.forEach(function (item){
                item.quantity = 0
            })
        },
    },
});

window.vm = vm;
