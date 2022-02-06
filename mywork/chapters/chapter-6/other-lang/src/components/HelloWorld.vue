
<docs>
## test
</docs>

<template>
  <div class=""hello>
    <p class="message">メッセージ:{{ msg }}</p>
    <p v-html="docs"></p>
  </div>
</template>

<script lang="ts">
import marked from 'marked';
import { Options, Vue } from 'vue-class-component';

export default { 
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      docs: marked(this.$options.__docs),
      msg: 'こんにちは！',
    }
  }
}

</script>

<style scoped>
  .message {
    color: cyan;
  }
</style>

