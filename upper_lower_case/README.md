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
## Lowercase letters

```html
<div>{{ 'Hello' | lowercase }}</div>
<!-- hello -->
```
<div>{{ 'Hello' | lowercase }}</div>
<br/>

## Uppercase letters

```html
<div>{{ 'Hello' | uppercase }}</div>
<!-- HELLO -->
```
<div>{{ 'Hello' | uppercase }}</div>
<br/>

## Try it out


::: tip
Render dynamic components only once per run! (Please edit it first, then click the Run button.)

Editing the run again will not take effect, please reopen the page and try again.
:::

<div>
   <textarea v-model="code"/>
</div>

<a class="link" v-on:click="run">Run</a>

<div>
    <runtime-comp/>
</div>

