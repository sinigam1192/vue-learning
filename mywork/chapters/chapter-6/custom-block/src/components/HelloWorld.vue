<docs>
  # HelloWorldコンポーネント

  ## 概要
  これはHelloWorldコンポーネントの使用方法について書かれたドキュメントです。

  ## 使用方法
</docs>

<template>
  <div class="hello">
    <h1 class="message"></h1>
    <p v-html="docs"></p>
    <button @click="testF">テスト</button>
  </div>
</template>

<script>
import { marked } from 'marked';

export default {
  name: 'HelloWorld',
  data() {
    return {
      docs: marked(this.$options._docs),
    }
  },
  methods: {
    testF() {
        console.log(this.$options._docs);
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message { color: #42b983; }
</style>
