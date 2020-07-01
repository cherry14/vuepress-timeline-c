
<!--
 * @Page: 
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-04-26 16:55:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-01 14:37:55
 -->

<template>
   <div class="time-container">
      <div :class="themeColor">
        <div  v-for="(item, index) in testList" :key="index" :class="`time-line-div ${location}`">
          <p>{{item.time}}</p>
          <p class="circle" ref="circular"></p>
          <p>{{item.text}}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name:'timeline',
  props: {
    // 参数
    testList: {
      type: Array,
      default: () => []
    },
    // 布局模式
    mode: {
      type: String,
      default: 'alternate'
    },
    // 主题颜色
    theme: {
      type: String,
      default: 'light'
    }
  },
  computed: {
    location() {
      // 根据传入的mode属性确定不同位置的样式class
      if (this.mode == 'left') {
        return 'time-line-div-left'
      } else if (this.mode == 'right') {
        return 'time-line-div-right'
      } else if (this.mode == 'alternate') {
        return 'time-line-div-alternate'
      }
    },
    themeColor() {
      if (this.theme == 'dark') {
         return 'time-line-dark'
      } else {
         return 'time-line-light'
      }
    }
  },
};
</script>

<style scoped lang="scss">
$contentColor: #333;
$contentbgColor: #ccc;
$lightContentbgColor:linear-gradient(0deg, pink 0%, rgb(245, 205, 223) 100%);
$timeColor: #333;
$lightTimeColor: rgb(212, 102, 153);
$circleColor: #999;
$lightCircleColor: rgb(180, 223, 152);
.time-container {
  width: 100%;
  display: flex;
}
.time-line-light {
  margin: 20px auto;
  color: $lightTimeColor;
  // background-color: #eee;
  .circle {
    margin: 20px;
  }
  .time-line-div {
     display: flex;
     min-height: 85px;
     margin-bottom: 30px;
      p:nth-child(2) {
      width: 15px;
      height: 15px;
      top: 10px;
      background: $lightCircleColor;
      border-radius: 50%;
      z-index: 10;
    }
     p:nth-child(3) {
      width:185px;
      word-break:break-all; // 英文换行
      white-space:pre-wrap; // 中文换行
      padding: 10px;
      background: $lightContentbgColor;
      font-size: 0.8rem;
      text-align: left;
      color: #fff;
      border-radius: 10px;
    }
  }
  /**
  mode: left 样式
  */
  .time-line-div-left {
    justify-content: start;
  }
  /**
    mode: right 样式
  */
  .time-line-div-right {
      justify-items: flex-end;
      flex-direction: row-reverse;
  }
  /**
    mode: alternate 样式
  */
  .time-line-div-alternate {
      justify-content: flex-end;
      &:nth-child(odd) {
        flex-direction: row-reverse;
        margin-right: 180px;
      }
       &:nth-child(even) {
        margin-left: 180px;
      }
    }
}
.time-line-dark {
  margin: 20px auto;
  color: $timeColor;
  // background-color: #eee;
  .circle {
    margin: 20px;
  }
  .time-line-div {
     display: flex;
     min-height: 85px;
     margin-bottom: 30px;
      p:nth-child(2) {
      width: 15px;
      height: 15px;
      top: 10px;
      background: $circleColor;
      border-radius: 50%;
      z-index: 10;
    }
     p:nth-child(3) {
      padding: 10px;
      background: $contentbgColor;
      font-size: 0.8rem;
      color: #fff;
      border-radius: 10px;
    }
  }
  /**
  mode: left 样式
  */
  .time-line-div-left {
    justify-content: start;
  }
  /**
    mode: right 样式
  */
  .time-line-div-right {
      justify-items: flex-end;
      flex-direction: row-reverse;
  }
  /**
    mode: alternate 样式
  */
  .time-line-div-alternate {
      justify-content: flex-end;
      &:nth-child(odd) {
        flex-direction: row-reverse;
      }
    }
}



.circle {
  animation: circleAnime 1s infinite alternate;
}
@keyframes circleAnime {
  from {
    transform: translateX(5px);
  }

  to {
    transform: translateX(0);
  }
}

</style>
