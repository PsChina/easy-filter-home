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
              code:`{
      template: \`
      <div>
      <!-- <input type="text" style="outline:none" v-model="match" /> -->
      <table>
          <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Sex</th>
          </tr>
          <tr
          v-for="value in filter(personArray, matchFn)"
          :key="value.id"
          >
          <!-- v-for="value in filter(personArray, match)" -->
          <td v-text="value.id"></td>
          <td v-text="value.name"></td>
          <td v-text="value.age"></td>
          <td v-text="value.sex"></td>
          </tr>
      </table>
      </div>\`,
      data(){
        return {
          match: "",
          personArray: [
            { name: "Kimi", sex: "male", age: 8, id: 1 },
            { name: "Cindy", sex: "female", age: 4, id: 2 },
            { name: "Angela", sex: "female", age: 6, id: 3 },
            { name: "Shitou", sex: "male", age: 7, id: 4 },
            { name: "Tiantian", sex: "male", age: 5, id: 5 }
          ]
        }
      },
      methods:{
        filter (input, match) {
          return this.$easyFilter.filter(input, match);
        },
        matchFn (value) {
            return value.age >= 6;
        }
      }
    }
              `,
              match: "",
              personArray: [
                { name: "Kimi", sex: "male", age: 8, id: 1 },
                { name: "Cindy", sex: "female", age: 4, id: 2 },
                { name: "Angela", sex: "female", age: 6, id: 3 },
                { name: "Shitou", sex: "male", age: 7, id: 4 },
                { name: "Tiantian", sex: "male", age: 5, id: 5 }
              ],
              ignore: new Set(),
              options: {
                match: '',
                ignore:[]
              },
            }
        },
        methods:{
          run(){
              bus.$emit('run', eval(`(function(){ return ${this.code} })()`))
          },
          reload(){
              window.location.reload()
          },
          filter (input, options) {
            return this.$easyFilter.filter(input, options);
          },
          matchFn (value) {
              return value.age >= 6;
          },
          select(event) {
            if (event.target.checked) {
              this.ignore.add(event.target.value);
            } else {
              this.ignore.delete(event.target.value);
            }
            this.options.ignore = Array.from(this.ignore)
            console.log(this.options);
          }
        },
        watch:{
          match(match, oldVal){
            this.options.match = match;
          }
        }
    }
</script>

## Filter

`Filter` 过滤器能筛选数组符合条件的元素。

## 模糊搜索

<div>
<input type="text" style="outline:none" v-model="match" />
<div>
  <div>ignore property:</div>
  <div v-for="key in ['name','sex','age','id']">
    <label :for="key">
      <span v-text="key"></span><input type="checkbox" :value="key" v-on:change="select">
    </label>
  </div>
</div>
<table>
    <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Age</th>
    <th>Sex</th>
    </tr>
    <tr
    v-for="value in filter(personArray, options)"
    :key="value.id"
    >
    <td v-text="value.id"></td>
    <td v-text="value.name"></td>
    <td v-text="value.age"></td>
    <td v-text="value.sex"></td>
    </tr>
</table>
</div>


```html
<template>
  <div>
    <input type="text" style="outline:none" v-model="match" />
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Sex</th>
      </tr>
      <tr
        v-for="value in filter(personArray, new RegExp(match,'i'))"
        :key="value.id"
        >
        <td v-text="value.id"></td>
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
        match: "",
        personArray: [
          { name: "Kimi", sex: "male", age: 8, id: 1 },
          { name: "Cindy", sex: "female", age: 4, id: 2 },
          { name: "Angela", sex: "female", age: 6, id: 3 },
          { name: "Shitou", sex: "male", age: 7, id: 4 },
          { name: "Tiantian", sex: "male", age: 5, id: 5 }
        ]
      };
    },
    methods: {
      filter(input, match) {
        // 在js中使用
        return this.$easyFilter.filter(input, match);
        // 使用其他过滤器
        // this.$easyFilter.lowerCase('WORLD')
        // this.$easyFilter.currency(1000,'¥')
        // this.$easyFilter.date(1523169365575,'yy-MM-dd')
        // ...
      }
    }
  };
</script>
```


## 筛选符合条件的数据

filter 过滤器还支持范围过滤。

例如: 筛选出上一个例子中所有年龄大于或等于六岁的数据。

```html
<div v-for="item in filter(personArray, matchFn)" :key="item.id">
  {{item}}
</div>
```

<div v-for="item in filter(personArray, matchFn)" :key="item.id">{{item}}</div>

```js
  // <div v-for="item in filter(personArray, matchFn)" :key="item.id">
  //   {{item}}
  // </div>
  data () {
      return {
        personArray: [
          {name: 'Kimi', sex: 'male', age: 8, id: 1},
          {name: 'Cindy', sex: 'female', age: 4, id: 2},
          {name: 'Angela', sex: 'female', age: 6, id: 3},
          {name: 'Shitou', sex: 'male', age: 7, id: 4},
          {name: 'Tiantian', sex: 'male', age: 5, id: 5}
        ]
      }
  },
  methods: {
    matchFn (value) {
    // 选择age大于或等于6的元素
        return value.age >= 6;
    },
    filter (input, matchFn) {
      return this.$easyFilter.filter(input, matchFn);
    }
  }
  //...
```

## 忽略不参与筛选的属性

```js
    methods: {
      filter(input, match) {
        const option = {
          match,
          ignore: ['id']
        }
        return this.$easyFilter.filter(input, option);
      }
```

## 动手尝试

::: tip
每次运行只渲染一次动态组件！（请先编辑好，再点击运行按钮。）

再次编辑将不会生效，请重新打开该页面重试。
:::

<div>
   <textarea style="height:500px" v-model="code"/>
</div>

<a class="link" v-on:click="run">运行</a>

<div>
    <runtime-comp/>
</div>

