
<template> 
        <div>
          <van-button class="footer-yiwen" @click="show1 = true">?</van-button>
          <van-popup class="footer-popup" v-model="show1">

              <div class="footer-popup__title">{{info}}</div>
              <div class="footer-popup__content">
                <p>{{titular}}</p>
                <p>{{content}}</p>
              </div>
              <div  class="footer-popup__fottert">
                <p>{{fotterTitle}}</p>
                <p>{{fotterContent}}</p>
              </div>
              <div class="footer-popup__heid" @click="show1 = false">
                我已了解
              </div>
          </van-popup>
        </div> 
    </template> <!--  -->
<script>
export default {
  props:{
    info:{
      type: String,
      default:'收付款人信息！',
    },
    titular:{
      type: String,
      default:'卡片用途：',
    },
    content:{
      type: String,
      default:'该卡片以最全面的计算方式，计算整个公司账面的收入和支出的情况。',
    },
    fotterTitle:{
      type: String,
      default:'数据解释：'
    },
    fotterContent:{
      type: String,
      default: '利润*：等于选定时间段的收入-支出。收入*：对应时间段内，资金流水的流入+预计时间在时间段内的应收总额。支出*：对应时间段内，资金流水的流出+预计时间在时间段内的应付总额。'
    }

  },
  data() {
    return {
      show1: false,
    }
  },
};
</script>
<style lang='postcss'>
.van-card {

  
    &__footer{
      .footer-yiwen{
        width:20px;
        height:20px;
        border-radius:50%;
        border:1px solid #3296fa;
        color:#3296fa;
        text-align:center;
        line-height:19px;
        padding:0;
      }
      .footer-popup{
        width: 60%;
        padding: 20px;
        border-radius: 20px;
        box-sizing: border-box;
        
          &__title{
            text-align: center;
            color:#0f0f0f;
            margin-bottom: 14px;
            // font-size: 12px;
          }
          &__content{
            text-align: left;
            color:#bbb;
            font-size: 12px;
            margin-bottom: 20px;
            line-height: 20px;
          }
          &__fottert{
            text-align: left;
            color: rgb(187, 187, 187);
            font-size: 12px;
            line-height: 20px;
            margin-bottom: 40px;
          }
          &__heid{
            color:#3296fa;
            text-align:center;
            font-size: 14px;
            font-weight: normal;
            font-style: normal;
          }
      }
      
    }

}
</style>




