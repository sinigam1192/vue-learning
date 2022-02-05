<template>
    <div>
        <p class="message">メッセージ:{{ msg }}</p>
        <p>上記の要素にdata-vとスコープIDが付与される。</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'こんにちは!!!'
        }
    }
}
</script>

// scopeでこの単一ファイル
<style scoped>
    .message { color: red; }
</style>