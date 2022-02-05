<template>
    <div id="root">
        <h1 class="header">Rootコンポーネント</h1>
        <p>これはRootコンポーネントです。</p>
        <p>root, foo, barそれぞれにscopeのcssと通常のcssを指定しているが、scopeが優先される。</p>
        <p>とくにscopeで指定しない場合は、このp要素のようにscopeの指定のない要素全て反映される。</p>
        <foo />
        <bar />
    </div>
</template>

<script>
import Foo from './foo'
import Bar from './bar'

export default {
    components: {
        Foo,
        Bar,
    },
}
</script>

// rootコンポーネントのstyleブロックについてはscopeを付与しない場合、どうなるか確認。
<style>
    #root{
       border: solid 1px blue;
       margin: 4px;
       padding: 4px; 
    }
    .header {
        font-size: 200%;
        background-color: cyan;
    }
    p {
        text-decoration: underline;
    }
</style>
