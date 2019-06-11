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
                arr: [1, 2, 3, 4, 5],
                code:`{
        template:\`
        <div>
            {{ {name:'foo',getName:()=>'foo'} | json }}
        </div>\`
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
## Json

`Json` 将会把一个 js 对象转换为一个 JSON 格式的字符串对象，它使用了 JSON.stringify。

```html
<div>{{ {name:'foo',getName:()=>'foo'} | json }}</div>
<!-- {"name":"foo"} -->
```
<div>{{ {name:'foo',getName:()=>'foo'} | json }}</div>
<br/>

## 动手尝试

::: tip
每次运行只渲染一次动态组件！（请先编辑好，再点击运行按钮。）

再次编辑将不会生效，请重新打开该页面重试。
:::

<div>
   <textarea style="height:90px" v-model="code"/>
</div>

<a class="link" v-on:click="run">运行</a>

<div>
    <runtime-comp/>
</div>


