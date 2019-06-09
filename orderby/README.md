<script>
    import Vue from 'vue'
    import EasyFilter from 'easy-filter'
    import '@style/style.scss'
    Vue.use(EasyFilter)
    const bus = new Vue()
    Vue.component('runtime-comp',(resolve)=>bus.$on('run',resolve))
    export default {
        data() {
          return {
            code:`{
  template:\`<div>
<table>
    <tr>
    <th :style="{ color: rule === 'name' ? '#3eaf7c' : (rule === '-name' ? '#e2777a' : 'black'),cursor: 'pointer' }" @click="click('name')">name</th>
    <th :style="{ color: rule === 'age' ? '#3eaf7c' : (rule === '-age' ? '#e2777a' : 'black'),cursor: 'pointer' }" @click="click('age')">age</th>
    <th :style="{ color: rule === 'sex' ? '#3eaf7c' : (rule === '-sex' ? '#e2777a' : 'black'),cursor: 'pointer' }" @click="click('sex')">sex</th>
    </tr>
    <tr v-for="value in orderBy(personArray, rule)" :key="value.id">
    <td v-text="value.name"></td>
    <td v-text="value.age"></td>
    <td v-text="value.sex"></td>
    </tr>
</table>
</div>\`,
  data(){
    return {
      personArray: [
        { name: "Kimi", sex: "male", age: 8, id: 1 },
        { name: "Cindy", sex: "female", age: 4, id: 2 },
        { name: "Angela", sex: "female", age: 6, id: 3 },
        { name: "Shitou", sex: "male", age: 7, id: 4 },
        { name: "Tiantian", sex: "male", age: 5, id: 5 }
      ],
      rule: null,
      reverse: false,
    }
  },
  methods:{
    click(rule) {
      if(this.reverse){
        this.rule = '-' + rule
      } else {
        this.rule = rule;
      }
      this.reverse = !this.reverse
    },
    orderBy(input, rule, reverse) {
      return this.easyFilter.orderBy(input, rule, reverse);
    }
  }
}
            `,
            personArray: [
              { name: "Kimi", sex: "male", age: 8, id: 1 },
              { name: "Cindy", sex: "female", age: 4, id: 2 },
              { name: "Angela", sex: "female", age: 6, id: 3 },
              { name: "Shitou", sex: "male", age: 7, id: 4 },
              { name: "Tiantian", sex: "male", age: 5, id: 5 }
            ],
            rule: null
          }
        },
        methods:{
          run(){
              bus.$emit('run', eval(`(function(){ return ${this.code} })()`))
          },
          reload(){
              window.location.reload()
          },
          click(rule) {
            this.rule = rule;
          },
          orderBy(input, rule, reverse) {
            return this.easyFilter.orderBy(input, rule, reverse);
          }
        }
    }
</script>
<style scoped lang="scss">
  @import '~@style/global.scss';
  .active {
    color:$themeColor;
  }
  th {
    cursor:pointer;
  }
</style>
## orderBy

`OrderBy` can help us sort the array. (default ascending order)

## Sort by attribute

<div>
<table>
    <tr>
    <th :class="{active: rule === 'name' }" @click="click('name')">name</th>
    <th :class="{active: rule === 'age' }" @click="click('age')">age</th>
    <th :class="{active: rule === 'sex' }" @click="click('sex')">sex</th>
    </tr>
    <tr v-for="value in orderBy(personArray, rule)" :key="value.id">
    <td v-text="value.name"></td>
    <td v-text="value.age"></td>
    <td v-text="value.sex"></td>
    </tr>
</table>
</div>

```html
<template>
  <div>
    <table>
      <tr>
        <th @click="click('name')">name</th>
        <th @click="click('age')">age</th>
        <th @click="click('sex')">sex</th>
      </tr>
      <tr v-for="value in orderBy(personArray, rule)" :key="value.id">
        <td v-text="value.name"></td>
        <td v-text="value.age"></td>
        <td v-text="value.sex"></td>
      </tr>
    </table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        personArray: [
          { name: "Kimi", sex: "male", age: 8, id: 1 },
          { name: "Cindy", sex: "female", age: 4, id: 2 },
          { name: "Angela", sex: "female", age: 6, id: 3 },
          { name: "Shitou", sex: "male", age: 7, id: 4 },
          { name: "Tiantian", sex: "male", age: 5, id: 5 }
        ],
        rule: null
      }
    },
    methods: {
      click(rule) {
        this.rule = rule;
      },
      orderBy(input, rule, reverse) {
        return this.easyFilter.orderBy(input, rule, reverse);
      }
      // Custom sort function (array sort callback)
      // orderBy(input, callBack = (v1,v2)=> v1.att > v2.att ? 1 : -1) {
      //   return this.easyFilter.orderBy(input, callBack)
      // }
    }
  };
</script>
```

## descending sort

The result above is ascending, and the reverse parameter can be set to true if you want to reverse.

Or add a '-' to the sorting condition.

For example: `<th @click="click('-name')">name</th>`.

## Custom sort function

orderBy accepts custom sort function.

```js
orderBy(input, callBack = (v1,v2)=> v1.att > v2.att ? 1 : -1) {
  return this.easyFilter.orderBy(input, callBack)
}
```

## Try it out

::: tip
Render dynamic components only once per run! (Please edit it first, then click the Run button.)

Editing the run again will not take effect, please refresh the page and try again.
:::

<div>
   <textarea style="height:380px" v-model="code"/>
</div>

<a class="link" v-on:click="run">Run</a>

<div>
    <runtime-comp/>
</div>

<a class="link" v-on:click="reload">Reload</a>