# vuex_demo1

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 访问Store数据的两种方式：
1:{{$store.state.count}}
2: 通过mapState()函数。
（1）：按需引入 import { mapState } from 'vuex'
（2）：将区局数据映射为当前组件的计算属性。
  computed: {
    ...mapState(['count'])
  }
  也可以：
  // computed: mapState({
  //   count: 'count'
  // })
  （3）：使用.直接使用即可{{count}}