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
          <!-- v-for="value in filter(personArray, new RegExp(match,'i'))" -->
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
          return this.easyFilter.filter(input, match);
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
              ]
            }
        },
        methods:{
          run(){
              bus.$emit('run', eval(`(function(){ return ${this.code} })()`))
          },
          reload(){
              window.location.reload()
          },
          filter (input, match) {
            return this.easyFilter.filter(input, match);
          },
          matchFn (value) {
              return value.age >= 6;
          }
        }
    }
</script>

## Filter

The `Filter` filter filters the elements of the array that match the criteria.

## Fuzzy search

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
        // Used in js
        return this.easyFilter.filter(input, match);
        // Use other filters
        // this.easyFilter.lowerCase('WORLD')
        // this.easyFilter.currency(1000,'¥')
        // this.easyFilter.date(1523169365575,'yy-MM-dd')
        // ...
      }
    }
  };
</script>
```


## Filter eligible data

The filter filter also supports range filtering.

Example: 

Filter all data in the previous example that is older than or equal to six years old.

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
    // Select an element with age greater than or equal to 6.
        return value.age >= 6;
    },
    filter (input, matchFn) {
      return this.easyFilter.filter(input, matchFn);
    }
  }
  //...
```

## Try it out

::: tip
Render dynamic components only once per run! (Please edit it first, then click the Run button.)

Editing the run again will not take effect, please reopen the page and try again.
:::

<div>
   <textarea style="height:500px" v-model="code"/>
</div>

<a class="link" v-on:click="run">Run</a>

<div>
    <runtime-comp/>
</div>

