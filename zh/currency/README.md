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

`Currency` 可以给展示金额数字加上货币符号以及分隔符。

## 无参

如果没有参数 currency 会默认加上 `$` 符号并且裁剪数字到百分位。（不足则填充零）

```html
<div>{{ 1000 | currency }}</div>
<!-- 1000 => $1,000.00 -->
```
<div>{{ 1000 | currency }}</div>
<br/>

## 设置货币符

```html
<div>{{ 1000 | currency('¥') }}</div>
<!-- 1000 => ¥1,000.00 -->
```
<div>{{ 1000 | currency('¥') }}</div>
<br/>

## 限制小数位数

```html
<div>{{ 1000 | currency('¥', 0) }}</div>
<!-- 1000 => ¥1,000 -->
```
<div>{{ 1000 | currency('¥', 0) }}</div>
<br/>

## 设置分隔符

```html
<div>{{ 1000 | currency('¥', 0, {separator: '.'}) }}</div>
<!-- 1000 => ¥1.000 -->
```
<div>{{ 1000 | currency('¥', 0, {separator: '.'}) }}</div>
<br/>

## 隐藏分隔符

```html
<div>{{ 1000 | currency('¥', 0, {separator: ''}) }}</div>
<!-- 1000 => ¥1000 -->
```
<div>{{ 1000 | currency('¥', 0, {separator: ''}) }}</div>
<br/>

## 设置符号位置

```html
<div>{{ 1000 | currency('¥', 0, {symbolOnLeft: false}) }}</div>
<!-- 1000 => 1,000¥ -->
```
<div>{{ 1000 | currency('¥', 0, {symbolOnLeft: false}) }}</div>
<br/>

## 设置间隙

```html
<div>{{ 1000 | currency('¥', 0, {addSpace: true}) }}</div>
<!-- 1000 => ¥ 1,000 -->
```
<div>{{ 1000 | currency('¥', 0, {addSpace: true}) }}</div>
<br/>

## 四舍五入

```html
<div>{{ 1000.999 | currency('¥', 2, {round: true}) }}</div>
<!-- 1000.999 => ¥1,001.00 -->
```
<div>{{ 1000.999 | currency('¥', 2, {round: true}) }}</div>
<br/>

## 禁止自动填充

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

## 多个属性同时使用

```html
<div>
    {{ 1000 | currency('¥', 0, {symbolOnLeft: false, addSpace: true}) }}
</div>
<!-- 1000 => 1,000 ¥ -->
```
<div>{{ 1000 | currency('¥', 0, {symbolOnLeft: false, addSpace: true}) }}</div>
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