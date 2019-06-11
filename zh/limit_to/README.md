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
        {{ [1,2,3,4,5] | limitTo(3) }}
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

## LimitTo

`LimitTo` 会创建一个新数组或者字符串,

包含指定长度的新数组或字符串。

这些元素取自源数组。

```js
export default {
  methods: {
    limitTo(input, limit, options) {
      return this.easyFilter.limitTo(input, limit, options);
    }
  }
}
```

第一个参数“input”是要过滤的数据，可以是数组、数字或字符串。

第二个参数是想要限制的长度。

| 第二个参数 |   作用   | 参数类型 |         默认参数         |
| :--------: | :------: | :------: | :----------------------: |
|   limit    | 限制长度 |  number  | Number.POSITIVE_INFINITY |

第三个参数是配置项，可以通过它告诉过滤器如何过滤这些数据。

配置项的字段为:

|      属性      |               作用               |    参数类型     | 默认参数  |
| :------------: | :------------------------------: | :-------------: | :-------: |
| startWithIndex | 根据索引开始计算要限制的元素个数 |     number      |     0     |
|   startWith    | 根据元素开始计算要限制的元素个数 |   not number    | undefined |
|     ignore     |      计数时忽略被匹配的元素      | RegExp , object | undefined |
|     cutOut     |             是否截取             |     boolean     |   fasle   |


## 显示指定长度的字符串

```html
<div>{{ 'hello' | limitTo(3) }}</div>
<!-- hel -->
```
<div>{{ 'hello' | limitTo(3) }}</div>
<br/>

## 以某个索引开始计数

```html
<div>{{ 'hello' | limitTo(3, {startWithIndex:1}) }}</div>
<!-- hell -->
```
<div>{{ 'hello' | limitTo(3, {startWithIndex:1}) }}</div>
<br/>

## 以某个元素开始计数

```html
<div>{{ 3.1415 | limitTo(2, {startWith:'.'}) }}</div>
<!-- 3.1 -->
```
<div>{{ 3.1415 | limitTo(2, {startWith:'.'}) }}</div>
<br/>

## 裁剪

```html
<div>{{ 'hello' | limitTo(3, {startWithIndex:1, cutOut: true}) }}</div>
<!-- ell -->
```
<div>{{ 'hello' | limitTo(3, {startWithIndex:1, cutOut: true}) }}</div>
<br/>

## 忽略不进入计数的元素

```html
<div>{{ 3.1415 | limitTo(2, {startWith:'.', ignore: /\./}) }}</div>
<!-- 3.14 -->
```
<div>{{ 3.1415 | limitTo(2, {startWith:'.', ignore: /\./}) }}</div>
<br/>

## 对数组同样生效

```js
limitTo([1, 2, 3, 4, 5], 2);
// [1,2]
```
<div>{{ [1,2,3,4,5] | limitTo(2) }}</div>
<br/>

```js
limitTo([1, 2, 3, 4, 5], 2, { startWith: 3, cutOut: true });
// [3,4]
```
<div>{{ [1,2,3,4,5] | limitTo(2,{ startWith: 3, cutOut: true }) }}</div>
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

