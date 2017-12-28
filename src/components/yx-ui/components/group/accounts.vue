<template>
 <div>
<!-- 两行一列 --> 
          <div class="clearfix">
         <div class="calculate" v-for="(item,index) in accounts" >
          <div class="calulate-title">
            <!-- <span class="yx-icon yx-icon-contact"></span>  -->
             <i v-show="item.type=='现金账户'" class="yx-icon yx-icon-ump-cash_account"></i>
             <i v-show="item.type=='银行账户'" class="yx-icon yx-icon-ump-bank_account"></i>
             <i v-show="item.type=='第三方支付平台'" class="yx-icon yx-icon-ump-third_party_account"></i>

            <!-- <span class="calposition" @click="tipInfoShow = true" style="color:#464648;">{{item.name}} -->
              <span class="calposition" style="color:#464648;">{{item.name}}
              <div class="calabslute">
                <!-- <a class="calabslute__tagsurround"> -->
              </div>
            </span>
            
          </div> 
          <p style="border-bottom:1px solid #e8e8e8;padding-left:24px;padding-bottom:6px;margin-bottom:8px;">
            {{item.type}}
          </p>
          <p>当前余额:
          
            </br>
            <strong>
              {{item.curamount+item.value|currency2}}
              <a class="calabslute__tagsurround" style="position:relative;bottom: 4px;left: 4px;">
                  <!-- 付款时显示此条 -->
                <template  v-if='item.ischeck'>
                  <yx-tagmini class="tags-sanjiao">{{info[1]}}</yx-tagmini>
                  </template>
                <template  v-else>
                  <!--当未付款时候显示此条  -->
                  <yx-tagmini  class="tags-sanjiao1">{{info[0]}}</yx-tagmini>
                </template>
              </a> 
            </strong> 
          </p>
        </div>
      </div>
      <van-popup>
       <yx-info   />
      </van-popup>
  </div>
</template>

<script> 
// import testButton from './yxtestbutton';
// document.body.addEventListener('touchstart', function () {});
export default {
  name: 'yx-accounts', 
   data() {
    return { 
      info:['未对账','已对账'], 
      tipInfoShow:false
    };
  },
  methods: {
    tipInfo(obj) { 
      this.tipInfoShow = true;
      // this.$router.replace(""); 
      // alert("我会跳转");
    }
  },
  props:{
    accounts: {
      type: Array,
      default:()=>{
        return [
          {name:'中国银行',type:'银行帐户',curamount:'120,000',ischeck:0},
        ]
      }  
    }
  } 
}
</script>

