Vue.component('fruits-item-name', {
    props: {
        fruitsItem: {
            type: Object,
            requred: true,
        }
    },
    template: `<li>{{ fruitsItem.name }}</li>`,
})

var vm = new Vue ({
    el: '#fruits-component',
    data: {
        fruitsItems: [
            {name: '梨'},
            {name: '苺'},
        ]
    
    },
})

window.vm = vm