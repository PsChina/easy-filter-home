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

orderBy 能帮我们排序数组。(默认升序排列)

## 根据属性排序

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
      // 或者自定义排序函数 (数组 sort 回调)
      // orderBy(input, callBack = (v1,v2)=> v1.att > v2.att ? 1 : -1) {
      //   return this.easyFilter.orderBy(input, callBack)
      // }
    }
  };
</script>
```

## 降序排列

上面的结果是升序，如果想倒序可以把 reverse 参数设置为 true。

或者在排序条件上添加 '-' 号。

比如: `<th @click="click('-name')">name</th>`.

## 自定义排序函数

orderBy 接受自定义排序函数

```js
orderBy(input, callBack = (v1,v2)=> v1.att > v2.att ? 1 : -1) {
  return this.easyFilter.orderBy(input, callBack)
}
```

## 动手尝试

::: tip
每次运行只渲染一次动态组件！（请先编辑好，再点击运行按钮。）

再次编辑将不会生效，请重新打开该页面重试。
:::

<div>
   <textarea style="height:380px" v-model="code"/>
</div>

<a class="link" v-on:click="run">运行</a>

<div>
    <runtime-comp/>
</div>

