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

## limitTo

`LimitTo` will create a new array or string,

Contains a new array or string of the specified length.

These elements are taken from the source array.

```js
export default {
  methods: {
    limitTo(input, limit, options) {
      return this.easyFilter.limitTo(input, limit, options);
    }
  }
}
```

The first parameter "input" is the data to be filtered, which can be an array, a number, or a string.

The second parameter is the length you want to limit.

| Second Parameter | Function | Parameter Type | Default Parameter |
| :--------: | :------: | :------: | :----------------------: |
| Limit | limit length | number | Number.POSITIVE_INFINITY |

The third parameter is the configuration item, which tells the filter how to filter the data.

The fields of the configuration item are:

| Properties | Role | Parameter Type | Default Parameters |
| :------------: | :---------------------------------: | :-------------: | :-------: |
| startWithIndex | Calculates the number of elements to limit based on the index | number | 0 |
| startWith | Calculate the number of elements to limit based on the element | not number | undefined |
| ignore | Ignore matched elements when counting | RegExp , object | undefined |
| cutOut | Whether to intercept | boolean | fasle |


## Display a string of the specified length

```html
<div>{{ 'hello' | limitTo(3) }}</div>
<!-- hel -->
```
<div>{{ 'hello' | limitTo(3) }}</div>
<br/>

## Start counting with an index

```html
<div>{{ 'hello' | limitTo(3, {startWithIndex:1}) }}</div>
<!-- hell -->
```
<div>{{ 'hello' | limitTo(3, {startWithIndex:1}) }}</div>
<br/>

## Start counting with an element

```html
<div>{{ 3.1415 | limitTo(2, {startWith:'.'}) }}</div>
<!-- 3.1 -->
```
<div>{{ 3.1415 | limitTo(2, {startWith:'.'}) }}</div>
<br/>

## Crop

```html
<div>{{ 'hello' | limitTo(3, {startWithIndex:1, cutOut: true}) }}</div>
<!-- ell -->
```
<div>{{ 'hello' | limitTo(3, {startWithIndex:1, cutOut: true}) }}</div>
<br/>

## Ignore elements that do not enter the count

```html
<div>{{ 3.1415 | limitTo(2, {startWith:'.', ignore: /\./}) }}</div>
<!-- 3.14 -->
```
<div>{{ 3.1415 | limitTo(2, {startWith:'.', ignore: /\./}) }}</div>
<br/>

## Same as array

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

## Try it out


::: tip
Render dynamic components only once per run! (Please edit it first, then click the Run button.)

Editing the run again will not take effect, please reopen the page and try again.
:::

<div>
   <textarea style="height:100px" v-model="code"/>
</div>

<a class="link" v-on:click="run">Run</a>

<div>
    <runtime-comp/>
</div>

