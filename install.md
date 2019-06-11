<script>
    import '@style/style.scss';
    export default {}
</script>

# Installation

### Direct Download

<a href="https://github.com/PsChina/easy-filter/archive/1.4.7.zip">https://github.com/PsChina/easy-filter/archive/1.4.7.zip</a>

The above link will always point to the latest release on github.

Include `easy-filter` after Vue and it will install itself automatically:

```html
<script src="./path/to/vue.js"></script>
<script src="./path/to/easy-filter.min.js"></script>
```

### Npm

```bash
npm install easy-filter --save
```

When used with a module system, you must explicitly install the router via Vue.use():

```js
import Vue from 'vue'
import EasyFilter from 'easy-filter'

Vue.use(EasyFilter)
```

You don't need to do this when using global script tags.

### Install on demand

```js
import Vue from 'vue'
import { 
    number,
    orderBy,
    // ...
  } from 'easy-filter'

Vue.use(number)
Vue.use(orderBy)
// ...
```

### Yarn
```
yarn install easy-filter --save
```