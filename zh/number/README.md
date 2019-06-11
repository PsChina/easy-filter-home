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
                arr:[
                    1,
                    2.2,
                    3.33,
                    4.444,
                    5.5555
                ],
                option1:{
                    sign:{
                        zero:'+'
                    }
                },
                option2:{
                    sign:{
                        zero:'-'
                    }
                },
                code: `{
        template: \`<div>
            <div :style="{width: '70px', textAlign: 'right', color: num > 0 ? '#e2777a' : '#3eaf7c'}" v-for='num in nums'>{{ num | number(4, options) }}</div>
        </div>\`,
        data(){
            return {
                nums: [3.14,0,-9.7],
                options:{
                    pad:true,
                    sign:{
                        zero:'-'
                    }
                }
            }
        }
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

## Number

`Number` 能将数字格式化为字符串。

当您传入一个整数时，默认值会有一位值为 0 的小数位，

当您输入一个小数，您会得到字符串类型的数字。

您也可以通过传递参数来改变小数位数。

并配置第三个参数以确定是否要四舍五入，以及是否需要自动填充零。

@参数 1 input

@参数 2 digits

@参数 3 options {round:false, pad:false}

## 无参

```html
<div>{{ 3.14 | number }}</div>
<!-- 3.14 -->
```

<div>{{ 3.14 | number }}</div>
<br/>

负号会被默认保留

```html
<div>{{ -0 | number }}</div>
<!-- -0.0 -->
```

<div>{{ -0 | number }}</div>
<br/>

整数默认补足十分位的零

```html
<div>{{ 3 | number }}</div>
<!-- 3.0 -->
```

<div>{{ 3 | number }}</div>
<br/>

默认最多显示 8 位小数并且不会四舍五入

```html
<div>{{ 0.123456789 | number }}</div>
<!-- 0.12345678 -->
```

<div>{{ 0.123456789 | number }}</div>
<br/>

## 限制小数位数

```html
<div>{{ 3.1415926 | number(4) }}</div>
<!-- 3.1415 -->
```

<div>{{ 3.1415926 | number(4) }}</div>
<br/>

## 转换科学计数法

```html
<div>{{ 5.2e-7 | number(8) }}</div>
<!-- 0.00000052 -->
```

<div>{{ 5.2e-7 | number(8) }}</div>
<br/>

## 自动填充零

```html
<div>{{ 1 | number(2, {pad:true}) }}</div>
<!-- 1.00 -->
```

<div>{{ 1 | number(2, {pad:true}) }}</div>
<br/>

## 四舍五入

```html
<div>{{ 3.1415 | number(3, {round: true}) }}</div>
<!-- 3.142 -->
```

<div>{{ 3.1415 | number(3, {round: true}) }}</div>
<br/>

## 设置分隔符

```html
<div>{{ 10000 | number(1, {separator: ','}) }}</div>
<!-- 10,000.0 -->
```

<div>{{ 10000 | number(1, {separator: ','}) }}</div>
<br/>

## 数学符号

为正数加上数学符号。

```html
<div>{{ 100.123456 | number(5, {round: true, sign: true}) }}</div>
<!-- +100.12346 -->
```

<div> {{ 100.123456 | number(5, {round: true, sign: true}) }} </div>
<br/>

对零的处理

::: tip
零既不是正数也不是负数，所以要在配置项中指定它的符号。
:::

为零加上正号:

```jsx
export default {
  data(){
    return {
      option2:{
        sign:{
          zero:'+'
        }
      },
    }
  }
}
<div> {{ 0 | number(5, option1) }} </div>
// +0
```

<div> {{ 0 | number(5, option1) }} </div>
<br/>

为零加上负号:

```jsx
export default {
  data(){
    return {
      option2:{
        sign:{
          zero:'-'
        }
      },
    }
  }
}
<div> {{ 0 | number(5, option2) }} </div>
// -0
```

<div> {{ 0 | number(5, option2) }} </div>
<br/>

## 配合 v-for 使用

::: tip
对齐数字请使用等宽字体。

常见等宽字体有: Helvetica、Arial、sans-serif。
:::

```jsx
export default {
  data(){
    return {
      arr:[
        1,
        2.2,
        3.33,
        4.444,
        5.5555
      ],
    }
  }
}
<template>
  <div v-for="num in arr">
    {{ num | number(3, {pad: true, round: true} )}}
  </div>
</template>
// 1.000
// 2.200
// 3.330
// 4.444
// 5.556
```

<div v-for="num in arr" >{{ num | number(3, {pad: true, round: true} )}}</div>
<br/>

## 超长小数

超过默认 8 位的小数需要传入小数位数

```html
<div>{{ 3.14e-20 | number(21) }}</div>
<!-- 0.000000000000000000031 -->
```

<div>{{ 3.14e-20 | number(21) }}</div>
<br/>

## 动手尝试

::: tip
每次运行只渲染一次动态组件！（请先编辑好，再点击运行按钮。）

再次编辑将不会生效，请重新打开该页面重试。
:::

<div>
   <textarea style="height:260px" v-model="code"/>
</div>

<a class="link" v-on:click="run">运行</a>

<div>
    <runtime-comp/>
</div>


