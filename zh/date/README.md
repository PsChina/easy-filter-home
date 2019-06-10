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
        template: "<div>{{ 1523169365575 | date('yyyy/MM/dd HH:mm:ss EEE') }}</div>",
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
## date

`date` 可以帮我们将时间戳转换成字符串。

以 `1523169365575` (2018/04/08 02:36:05 星期日) 为例:


```html
<div>{{ 1523169365575 | date('yyyy/MM/dd HH:mm:ss EEE') }}</div>
<!-- 2018/04/08 14:36:05 Sunday -->
```

<div>{{ 1523169365575 | date('yyyy/MM/dd HH:mm:ss EEE') }}</div>

<br/>

显示中文版的星期数。


```html
<div>{{ 1523169365575 | date('yyyy/MM/dd HH:mm:ss EEE','cn') }}</div>
<!-- 2018/04/08 14:36:05 星期日 -->
```

<div>{{ 1523169365575 | date('yyyy/MM/dd HH:mm:ss EEE','cn') }}</div>

<br/>

## 年/月/日

`yyyy/MM/dd`

### 年

通过 `yyyy` 显示完整的年。

```html
<div>{{ 1523169365575 | date('yyyy') }}</div>
<!-- 2018 -->
```

<div>{{ 1523169365575 | date('yyyy') }}</div>

<br/>

通过 `yy` 简写年。

```html
<div>{{ 1523169365575 | date('yy') }}</div>
<!-- 18 -->
```

<div>{{ 1523169365575 | date('yy') }}</div>

<br/>


### 月

`MM` 显示月份。

```html
<div>{{ 1523169365575 | date('MM') }}</div>
<!-- 04 -->
```

<div>{{ 1523169365575 | date('MM') }}</div>

<br/>

### 日

`dd` 显示天数。

```html
<div>{{ 1523169365575 | date('dd') }}</div>
<!-- 08 -->
```

<div>{{ 1523169365575 | date('dd') }}</div>

<br/>

## 时/分/秒

`HH:hh:ss`

### 时

`HH` 按照24小时制显示。

```html
<div>{{ 1523169365575 | date('HH') }}</div>
<!-- 14 -->
```

<div>{{ 1523169365575 | date('HH') }}</div>

<br/>

`hh` 按照12小时制显示。

```html
<div>{{ 1523169365575 | date('hh') }}</div>
<!-- 02 -->
```

<div>{{ 1523169365575 | date('hh') }}</div>

<br/>

### 分

`mm` 显示分钟。

```html
<div>{{ 1523169365575 | date('mm') }}</div>
<!-- 36 -->
```

<div>{{ 1523169365575 | date('mm') }}</div>

<br/>

### 秒

`ss` 显示秒钟。

```html
<div>{{ 1523169365575 | date('ss') }}</div>
<!-- 05 -->
```

<div>{{ 1523169365575 | date('ss') }}</div>

<br/>

## 星期

`EEE` 显示星期几。

```html
<div>{{ 1523169365575 | date('EEE') }}</div>
<!-- Sunday -->
```

<div>{{ 1523169365575 | date('EEE') }}</div>

<br/>

`EE` 简写星期几。

```html
<div>{{ 1523169365575 | date('EE') }}</div>
<!-- Sun -->
```

<div>{{ 1523169365575 | date('EE') }}</div>

<br/>

## 任意分隔符与组合

年/月/日

```html
<div>{{ 1523169365575 | date('yyyy/MM/dd') }}</div>
<!-- 2018/04/08 -->
```

<div>{{ 1523169365575 | date('yyyy/MM/dd') }}</div>

<br/>

时/分/秒

```html
<div>{{ 1523169365575 | date('hh:mm:ss') }}</div>
<!-- 02:36:05 -->
```

<div>{{ 1523169365575 | date('hh:mm:ss') }}</div>

<br/>

任意分隔符

```html
<div>{{ 1523169365575 | date("yyyy*MM*dd HH_mm_ss EEE") }}</div>
<!-- 2018*04*08 14_36_05 Sunday -->
```
<div>{{ 1523169365575 | date("yyyy*MM*dd HH_mm_ss EEE") }}</div>

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

