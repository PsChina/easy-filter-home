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

`Json` will convert a js object into a JSON-formatted string object using JSON.stringify.

```html
<div>{{ {name:'foo',getName:()=>'foo'} | json }}</div>
<!-- {"name":"foo"} -->
```
<div>{{ {name:'foo',getName:()=>'foo'} | json }}</div>
<br/>

## Try it out


::: tip
Render dynamic components only once per run! (Please edit it first, then click the Run button.)

Editing the run again will not take effect, please reopen the page and try again.
:::

<div>
   <textarea style="height:90px" v-model="code"/>
</div>

<a class="link" v-on:click="run">Run</a>

<div>
    <runtime-comp/>
</div>


