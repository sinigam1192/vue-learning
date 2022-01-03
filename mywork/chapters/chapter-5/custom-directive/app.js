// #appにマウントしてください

Vue.directive('fallback-image', {
    // カスタムディレクテブをここでフックに応じた処理ができる。
    // bind: 紐づいた時に１回だけ呼ばれる。
    // inserted: 要素が挿入されたタイミングで呼ばれる。
    // update: コンボーネントのVNodeが更新されるたび呼ばれる。
    // componentUpdated: 更新後に呼ばれる。
    // unbind: 要素が取り除かれた時、呼ばれる。
    bind: function(el, binding){
        console.log("bind", binding)
        var once = binding.modifiers.once
        el.addEventListener('error', function(){
            
            el.src = binding.value
            if (once) {
                el.removeEventListener('error', noError)
            }
        })
    },
    update: function(el, binding){
        console.log("update", binding)
        if (binding.oldValue !== binding.value && binding.oldValue === el.src){
            el.src = binding.value
        }
    }
})

var vm = new Vue({
    el: '#app',
    data: function(){
        return {
            altText: 'logo',
            noImageURL: 'https://dummyimage.com/400x400/000/ffffff.png&text=no+image'
        }
    },
})

// Devtoolsで　vm.altText = 'change';と打つとupdateが発火する。
window.vm = vm