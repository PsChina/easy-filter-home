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
        template: "<div>{{ 1000 | currency }}</div>",
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

## Currency

`Currency` can add a currency symbol and a separator to a number.

## Without parameters

If there is no parameter, currency will add the `$` symbol by default and crop the number to the percentile. (Insufficient fills in zero)

```html
<div>{{ 1000 | currency }}</div>
<!-- 1000 => $1,000.00 -->
```
<div>{{ 1000 | currency }}</div>
<br/>

## Set currency symbols

```html
<div>{{ 1000 | currency('¥') }}</div>
<!-- 1000 => ¥1,000.00 -->
```
<div>{{ 1000 | currency('¥') }}</div>
<br/>

## Limit decimal places

```html
<div>{{ 1000 | currency('¥', 0) }}</div>
<!-- 1000 => ¥1,000 -->
```
<div>{{ 1000 | currency('¥', 0) }}</div>
<br/>

## Set separators

```html
<div>{{ 1000 | currency('¥', 0, {separator: '.'}) }}</div>
<!-- 1000 => ¥1.000 -->
```
<div>{{ 1000 | currency('¥', 0, {separator: '.'}) }}</div>
<br/>

## Hidden separator

```html
<div>{{ 1000 | currency('¥', 0, {separator: ''}) }}</div>
<!-- 1000 => ¥1000 -->
```
<div>{{ 1000 | currency('¥', 0, {separator: ''}) }}</div>
<br/>

## Set symbol position

Let the symbol appear on the right.

```html
<div>{{ 1000 | currency('¥', 0, {symbolOnLeft: false}) }}</div>
<!-- 1000 => 1,000¥ -->
```
<div>{{ 1000 | currency('¥', 0, {symbolOnLeft: false}) }}</div>
<br/>

## Set gap

Add a space between the symbol and the number.

```html
<div>{{ 1000 | currency('¥', 0, {addSpace: true}) }}</div>
<!-- 1000 => ¥ 1,000 -->
```
<div>{{ 1000 | currency('¥', 0, {addSpace: true}) }}</div>
<br/>

## Rounding

```html
<div>{{ 1000.999 | currency('¥', 2, {round: true}) }}</div>
<!-- 1000.999 => ¥1,001.00 -->
```
<div>{{ 1000.999 | currency('¥', 2, {round: true}) }}</div>
<br/>

## Disable autofill

```html
<div>{{ 1000.5 | currency('¥', 2, {pad: false}) }}</div>
<!-- 1000.5 => ¥1,000.5 -->
```
<div>{{ 1000.5 | currency('¥', 2, {pad: false}) }}</div>
<br/>

```html
<div>{{ 1000.123 | currency('¥', 2, {pad: false}) }}</div>
<!-- 1000.123 => ¥1,000.12 -->
```
<div>{{ 1000.123 | currency('¥', 2, {pad: false}) }}</div>
<br/>

## Multiple attributes

```html
<div>
    {{ 1000 | currency('¥', 0, {symbolOnLeft: false, addSpace: true}) }}
</div>
<!-- 1000 => 1,000 ¥ -->
```
<div>{{ 1000 | currency('¥', 0, {symbolOnLeft: false, addSpace: true}) }}</div>
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

