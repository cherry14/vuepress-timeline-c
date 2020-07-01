<!--
 * @Page: 
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-05-31 16:23:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-01 14:36:20
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
}
</script>
