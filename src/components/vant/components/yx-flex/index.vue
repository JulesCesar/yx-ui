<template>
 <div>
<!-- 两行一列 -->
  <div class="efectivo-flex api-box">
    <div class="efectivo-flex__api-flex  efectivo-flex-texcolor colofontweigh">
      <slot></slot>
    </div>
  </div>

</div>
</template>

<script> 
export default {
  name: 'yx-flex', 
   data() {
    return {
      // numbers: [
      //   {name:'两行三列',phone:'13800138000'},
      //   {name:'两行三列',phone:'13800138000'},
      //   {name:'两行三列',phone:'13800138000'}
      // ],
      // numberdos: [
      //   {name:'两行一列',phone:'13800138000'},
      // ]
    };
  },
  components: {
  },
  props:{
  }
}
</script>
<style lang='postcss'>
.van-card {

  .efectivo-flex-texcolor{
    margin-bottom:8px;
    font-size:16px;
    
  }
  .van-col div:nth-of-type(1) div div .efectivo-flex-texcolor {
    color:#3296fa;
  }
  .efectivo-flex-texcolor div:nth-of-type(2){
    // color:black;
    // margin-bottom:8px;
    font-size:15px;
    font-weight: 600;
  }
  .colofontweigh{
    
  }

  .efectivo-flex{
    text-align: center;
    .api-box {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
    }
    &__api-flex {
    -webkit-box-flex: 1; 
      -webkit-flex: 1;
      flex: 1;
    }
  }
}
 </style>
