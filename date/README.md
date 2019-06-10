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

`Date` can help us convert the timestamp to a string.

Take `1523169365575` (2018/04/08 02:36:05 Sunday) as an example:


```html
<div>{{ 1523169365575 | date('yyyy/MM/dd HH:mm:ss EEE') }}</div>
<!-- 2018/04/08 14:36:05 Sunday -->
```

<div>{{ 1523169365575 | date('yyyy/MM/dd HH:mm:ss EEE') }}</div>

<br/>

Display the number of weeks in Chinese.

```html
<div>{{ 1523169365575 | date('yyyy/MM/dd HH:mm:ss EEE','cn') }}</div>
<!-- 2018/04/08 14:36:05 星期日 -->
```

<div>{{ 1523169365575 | date('yyyy/MM/dd HH:mm:ss EEE','cn') }}</div>

<br/>

## Year/month/date

`yyyy/MM/dd`

### Year

Show the full year with `yyyy` 。

```html
<div>{{ 1523169365575 | date('yyyy') }}</div>
<!-- 2018 -->
```

<div>{{ 1523169365575 | date('yyyy') }}</div>

<br/>

Shorten the year with `yy`.

```html
<div>{{ 1523169365575 | date('yy') }}</div>
<!-- 18 -->
```

<div>{{ 1523169365575 | date('yy') }}</div>

<br/>


### Month

`MM` shows the month.

```html
<div>{{ 1523169365575 | date('MM') }}</div>
<!-- 04 -->
```

<div>{{ 1523169365575 | date('MM') }}</div>

<br/>

### Date

`dd` shows the date.

```html
<div>{{ 1523169365575 | date('dd') }}</div>
<!-- 08 -->
```

<div>{{ 1523169365575 | date('dd') }}</div>

<br/>

## Hour/minute/second

`HH:hh:ss`

### Hour

`HH` is displayed in 24-hour format.

```html
<div>{{ 1523169365575 | date('HH') }}</div>
<!-- 14 -->
```

<div>{{ 1523169365575 | date('HH') }}</div>

<br/>

`hh` is displayed in 12-hour format.

```html
<div>{{ 1523169365575 | date('hh') }}</div>
<!-- 02 -->
```

<div>{{ 1523169365575 | date('hh') }}</div>

<br/>

### Minute

`mm` shows the minute.

```html
<div>{{ 1523169365575 | date('mm') }}</div>
<!-- 36 -->
```

<div>{{ 1523169365575 | date('mm') }}</div>

<br/>

### Second

`ss` shows the second.

```html
<div>{{ 1523169365575 | date('ss') }}</div>
<!-- 05 -->
```

<div>{{ 1523169365575 | date('ss') }}</div>

<br/>

## Day of the week

`EEE` shows the day of the week.

```html
<div>{{ 1523169365575 | date('EEE') }}</div>
<!-- Sunday -->
```

<div>{{ 1523169365575 | date('EEE') }}</div>

<br/>

`EE` shorthand for the day of the week.

```html
<div>{{ 1523169365575 | date('EE') }}</div>
<!-- Sun -->
```

<div>{{ 1523169365575 | date('EE') }}</div>

<br/>

## Combined usage

Year/month/date

```html
<div>{{ 1523169365575 | date('yyyy/MM/dd') }}</div>
<!-- 2018/04/08 -->
```

<div>{{ 1523169365575 | date('yyyy/MM/dd') }}</div>

<br/>

Hour/minute/second

```html
<div>{{ 1523169365575 | date('hh:mm:ss') }}</div>
<!-- 02:36:05 -->
```

<div>{{ 1523169365575 | date('hh:mm:ss') }}</div>

<br/>

Arbitrary separator

```html
<div>{{ 1523169365575 | date("yyyy*MM*dd HH_mm_ss EEE") }}</div>
<!-- 2018*04*08 14_36_05 Sunday -->
```
<div>{{ 1523169365575 | date("yyyy*MM*dd HH_mm_ss EEE") }}</div>

## Try it out

::: tip
Render dynamic components only once per run! (Please edit it first, then click the Run button.)

Editing the run again will not take effect, please reopen the page and try again.
:::

<div>
   <textarea v-model="code"/>
</div>

<a class="link" v-on:click="run">Run</a>

<div>
    <runtime-comp/>
</div>

