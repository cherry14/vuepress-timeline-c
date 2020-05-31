# vuepress-timeline-c

### 安装
```
npm i vuepress-timeline-c -D
```

### 使用
- 在需要使用时间轴的页面引用(名字可以随便取)
```js
import TimeLineC from 'vuepress-timeline-c'
```

### 在components中注册组件
- 如果自己领取名字则用自己取的名字注册即可
```js
components: {
   TimeLineC 
}
```
### 运用组件
```html
<!-- 上下文代码 -->
------
<time-line-c :testList="array"/>
-----
<!-- 上下文代码 -->
```
### 传入参数
```js
data() {
    return {
        array: [
            {
                time:'2020-05-05',
                text:'内容描述1'
            },
            {
                time:'2020-05-06',
                text:'内容描述2'
            },
            {
                time:'2020-05-07',
                text:'内容描述3'
            },
        ]
    }
}
```
