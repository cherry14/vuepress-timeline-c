<!--
 * @Page: 
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-05-31 16:23:51
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-01 15:57:22
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
                text:'内容1rfrfrfrfrfrfrfrfrf分WFFFCEDFCEf',
                time:'2020-02-02'
            },
            {
                text:'内容2frrrrrrrr',
                time:'2020-02-02'
            },
            {
                text:'内容3frrrrrrgqerrrrrrrrrrr',
                time:'2020-02-02'
            },
            {
                text:'内容4',
                time:'2020-02-02',
            },
            {
                text:'内容5dfewwwwwwwwwg',
                time:'2020-02-02'
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
| handleClick | 点击内容回调   |  item, index |


## 效果图
> 主题（theme）
- light
![light](https://github.com/cherry14/vuepress-timeline-c/raw/master/assets/timeline5.png)
- dark
![dark]('./src/assets/timeline1.png')
> 布局（mode）
- left
![left]('./src/assets/timeline1.png')
- right
![right]('./src/assets/timeline2.png')
- alternate
![alternate]('./src/assets/timeline3.png')

