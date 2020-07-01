<!--
 * @Page: 
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-05-31 16:23:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-01 11:27:25
--> 
<template>
   <timeline :testList="testList" />
</template>

<script>
// @ is an alias to /src
import timeline from '@/components/timeline.vue'

export default {
  name: 'Home',
  components: {
    timeline
  },
  data() {
    return {
      testList: [
        {
          text:'内容1rfrfrfrfrfrfrfrfrfrfrfrfrfrfrf',
          time:'2020-02-02'
        },
        {
          text:'内容2frrrrrrrrr',
          time:'2020-02-02'
        },
          {
          text:'内容3frrrrrr',
          time:'2020-02-02'
        },
        {
          text:'内容4',
          time:'2020-02-02'
        },
        {
          text:'内容5dfewwwwwwwww',
          time:'2020-02-02'
        },
      ]
    }
  }
}
</script>
