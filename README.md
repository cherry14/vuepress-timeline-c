<!--
 * @Page: 
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-05-31 16:23:51
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-01 15:26:29
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

## Props
| 参数      | 介绍           |  类型   |      可选值        | 默认值 |
| -------  | -------------- | ------  | ------------       | ------  |
| testList     | 传入数组        | Array   | -                 | [ ]       |
| mode     | 布局模式        | String   | left / right / alternate   | left      |
| theme     | 主题颜色        | String   | dark / light              | light      |


## Events
| 事件      | 介绍           |  返回值   |      
| -------  | -------------- | ------  | 
| handleClick | 点击内容回调   |  item， index |

