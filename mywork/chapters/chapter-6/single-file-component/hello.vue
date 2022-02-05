<template>
    <p class="message">メッセージ:{{ msg }}</p>
</template>

<script>
export default {
    data() {
        return { msg: 'hellow, world!' }
    },
}
</script>

<style>
    .message {color: #42b983; }
</style>
