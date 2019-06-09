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
        template: "<div>{{ 'Hello' | lowerCase }}</div>",
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
<div>{{ 'Hello' | lowerCase }}</div>
<!-- hello -->
```

## 大写字母

```html
<div>{{ 'Hello' | upperCase }}</div>
<!-- HELLO -->
```

## 动手尝试


::: tip
每次运行只渲染一次动态组件！（请先编辑好，再点击运行按钮。）

再次编辑将不会生效，请刷新该页面重试。
:::

<div>
   <textarea v-model="code"/>
</div>

<a class="link" v-on:click="run">运行</a>

<div>
    <runtime-comp/>
</div>

<a class="link" v-on:click="reload">刷新当前页</a>