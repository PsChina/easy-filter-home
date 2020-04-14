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

`Number` can format a number as a string.

When you enter a decimal, you get a string type number.

You can also change the number of decimal places by passing parameters.

And configure the third parameter to determine if you want to round off and if you need to autofill zeros.

@parameter 1 input

@parameter 2 digits

@parameter 3 options {round:false, pad:false}

## Without parameters

Do nothing without any params.

```html
<div>{{ 3.14 | number }}</div>
<!-- 3.14 -->
```

<div>{{ 3.14 | number }}</div>
<br/>

Up to 8 decimal places are displayed by default and will not be rounded off.

```html
<div>{{ 0.123456789 | number }}</div>
<!-- 0.12345678 -->
```

<div>{{ 0.123456789 | number }}</div>
<br/>

## Limit the number of decimal places

```html
<div>{{ 3.1415926 | number(4) }}</div>
<!-- 3.1415 -->
```

<div>{{ 3.1415926 | number(4) }}</div>
<br/>

## Conversion science notation

```html
<div>{{ 5.2e-7 | number(8) }}</div>
<!-- 0.00000052 -->
```

<div>{{ 5.2e-7 | number(8) }}</div>
<br/>

## Autofill zero

```html
<div>{{ 1 | number(2, {pad:true}) }}</div>
<!-- 1.00 -->
```

<div>{{ 1 | number(2, {pad:true}) }}</div>
<br/>

## Rounding

```html
<div>{{ 3.1415 | number(3, {round: true}) }}</div>
<!-- 3.142 -->
```

<div>{{ 3.1415 | number(3, {round: true}) }}</div>
<br/>

## Set separator

```html
<div>{{ 10000 | number(1, {separator: ','}) }}</div>
<!-- 10,000 -->
```

<div>{{ 10000 | number(1, {separator: ','}) }}</div>
<br/>

## Mathematical symbol

Add a mathematical symbol to the positive number.

```html
<div>{{ 100.123456 | number(5, {round: true, sign: true}) }}</div>
<!-- +100.12346 -->
```

<div> {{ 100.123456 | number(5, {round: true, sign: true}) }} </div>
<br/>

Processing of zero

::: tip
Zero is neither a positive nor a negative, so specify its symbol in the configuration item.
:::

Zero plus positive sign:

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

Zero plus minus sign:

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

## Use with v-for

::: tip
Use a monospaced font to align numbers.

Common monospace fonts are: Helvetica, Arial, sans-serif.
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

## Extra long decimal

The number of decimal places is required to exceed the default 8-bit decimal

```html
<div>{{ 3.14e-20 | number(21) }}</div>
<!-- 0.000000000000000000031 -->
```

<div>{{ 3.14e-20 | number(21) }}</div>
<br/>

## Try it out

::: tip
Render dynamic components only once per run! (Please edit it first, then click the Run button.)

Editing the run again will not take effect, please reopen the page and try again.
:::

<div>
   <textarea style="height:260px" v-model="code"/>
</div>

<a class="link" v-on:click="run">Run</a>

<div>
    <runtime-comp/>
</div>


