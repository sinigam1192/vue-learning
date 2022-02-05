// #appにマウントしてください

var Sharable = {
    data: function() {
        return {
            _isProcessing: false,
        }
    },
    created: function() {
        console.log("sharableのフック呼び出し");
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

var IconShareButton = {
    mixins: [Sharable],
    template: `
    <button @click="share"><i class="fas fa-share-square"/></button>
    `,
    created: function() {
        console.log("IconShareButtonのフック呼び出し");
    },
}

var TextShareButton = {
    mixins: [Sharable],
    template: `
    <button @click="share">{{ buttonLabel }}</button> 
    `,
     data: function() {
        return {
            buttonLabel: 'シェアする',
        }
     },
     created: function() {
        console.log("TextShareButtonのフック呼び出し");
    },
    methods: {
        share: function() {
            window.alert('TextShareButtonのshareメソッド');
        }
    }
}

new Vue({
    el: '#app',
    components: {
        IconShareButton,
        TextShareButton,
    },
})