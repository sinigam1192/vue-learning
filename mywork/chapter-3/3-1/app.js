// global components
// var FruitsListTitle = Vue.extend({
//     template: '<h1>フルーツ一覧</h1>' 
// })

// new FruitsListTitle().$mount('#fruits-title')

Vue.component('fruits-description', {
    template: '<p>季節の代表的なフルーツです。</p>' 
})

Vue.component('furits-list-table', {
    template: `
        <table>
            <tr>
                <th>季節</th>
                <th>フルーツ</th>
            </tr>
            <tr>
                <td>春</td>
                <td>さくらんぼ</td>
            </tr>
            <tr>
                <td>夏</td>
                <td>スイカ</td>
            </tr>
            <tr>
                <td>秋</td>
                <td>ぶどう</td>
            </tr>
            <tr>
                <td>冬</td>
                <td>みかん</td>
            </tr>
            
        </table>
    `,
    data: function () {
        return {content: 'bar'}
    }
})

var vm = new Vue ({
    el: '#fruits-list',
    components: {
        'fruits-list-title': {
            template: '<h1>フルーツ一覧</h1>'
        },
    }
})

window.vm = vm