// #appにマウントしてください

var IconShareButton = {
    template: `
    <button @click="share"><i class="fas fa-share-square"/></button>
    `,
    data: function() {
        return {
            _isProcessing: false,
        }
    },
    methods: {
        share: function() {
            if(this._isProcessing){
                return
            }
            if(!window.confirm('シェアしますか？')) {
                return
            }
            this._isProcessing = true
            setTimeout(() => {
                window.alert('シェアしました')
                this._isProcessing = false
            }, 300)
        }
    }
}

var TextShareButton = {
    template: `
    <button @click="share">{{ buttonLabel }}</button> 
    `,
    data: function() {
        return {
            buttonLabel: 'シェアする',
            _isProcessing: false,
        }
    },
    methods: {
        share: function() {
            if(this._isProcessing){
                return
            }
            if(!window.confirm('シェアしますか？')) {
                return
            }
            this._isProcessing = true
            setTimeout(() => {
                window.alert('シェアしました')
                this._isProcessing = false
            }, 300)
        }
    }, 
}

new Vue({
    el: '#app',
    components: {
        IconShareButton,
        TextShareButton,
    },
})