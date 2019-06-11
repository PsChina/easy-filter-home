<script>    
    import Vue from 'vue'
    import EasyFilter from 'easy-filter'
    import '@style/style.scss'
    Vue.use(EasyFilter)
    const bus = new Vue()
    Vue.component('runtime-comp',(resolve)=>bus.$on('run',resolve))
    export default {
        data(){
            return {
                code: `{
        template: "<div>{{ 'Hello' | lowercase }}</div>",
    }`
            }
        },
        methods:{
            run(){
                bus.$emit('run', eval(`(function(){ return ${this.code} })()`))
            },
            reload(){
                window.location.reload()
            }
        }
    }
</script>  

## 小字字母

```html
<div>{{ 'Hello' | lowercase }}</div>
<!-- hello -->
```
<div>{{ 'Hello' | lowercase }}</div>
<br/>

## 大写字母

```html
<div>{{ 'Hello' | uppercase }}</div>
<!-- HELLO -->
```
<div>{{ 'Hello' | uppercase }}</div>
<br/>

## 动手尝试


::: tip
每次运行只渲染一次动态组件！（请先编辑好，再点击运行按钮。）

再次编辑将不会生效，请重新打开该页面重试。
:::

<div>
   <textarea v-model="code"/>
</div>

<a class="link" v-on:click="run">运行</a>

<div>
    <runtime-comp/>
</div>

