/*
 * @Page: 
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-05-31 16:44:26
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-31 17:07:37
 */ 
import Vue from "vue"
import TimeC from "./timeline.vue"
const Components = {
    TimeC
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
})


export default Components;