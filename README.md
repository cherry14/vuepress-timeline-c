<!--
 * @Page: 
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-05-31 16:23:51
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-01 11:57:39
--> 
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
- 如果自己取名字则用自己取的名字注册即可
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
                time:'2020-02-02',
                text:'内容描述1'
            },
            {
                time:'2020-02-02',
                text:'内容描述2'
            },
            {
                time:'2020-02-27',
                text:'内容描述3'
            },
        ]
    }
}
```
