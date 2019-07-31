<script>
    import '@style/style.scss';
    export default {}
</script>

# 安装

### 直接下载

<a href="https://github.com/PsChina/easy-filter/archive/1.5.6.zip">https://github.com/PsChina/easy-filter/archive/1.5.6.zip</a>

上面的链接会一直指向在 Github 发布的最新版本。

在 Vue 后面加载 `easy-filter`，它会自动安装的：

```html
<script src="./path/to/vue.js"></script>
<script src="./path/to/easy-filter.min.js"></script>
```

### Npm

```bash
npm install easy-filter --save
```

如果在一个模块化工程中使用它，必须要通过 `Vue.use()` 明确地安装过滤器功能：

```js
import Vue from 'vue'
import EasyFilter from 'easy-filter'

Vue.use(EasyFilter)
```

如果使用全局的 script 标签，则无须如此 (手动安装)。


### 按需引入

```js
import {
 number,
 orderBy,
 //...
} from "easy-filter";
Vue.filter('number', number);
Vue.filter('orderBy', orderBy);
const easyFilter = {
  number,
  orderBy,
};
Vue.prototype.$easyFilter = Vue.easyFilter = easyFilter;
```

### Yarn
```
yarn install easy-filter --save
```