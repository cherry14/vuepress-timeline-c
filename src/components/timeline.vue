
<!--
 * @Page: 
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-04-26 16:55:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-01 12:36:42
 -->

<template>
  <div class="time">
    <div class="text-content">
      <div :class="themeColor">
        <div  v-for="(item, index) in testList" :key="index" :class="`time-line-div ${location}`">
          <p>{{item.time}}</p>
          <p class="circle" ref="circular"></p>
          <p>{{item.text}}</p>
        </div>
        <!-- <div class="img-dotted" ref="dotted"></div> -->
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
      default: 'right'
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
$lightCircleColor: rgb(180, 223, 152);;
.text-center {
  text-align: center;
}
.time h2 {
  color: #ff6600;
  margin: 20px auto 30px auto;
}
.time-line-light {
  width: 500px;
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
      padding: 10px;
      background: $lightContentbgColor;
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
.time-line-dark {
 width: 500px;
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
