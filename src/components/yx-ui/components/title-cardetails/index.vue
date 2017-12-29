<template>  
    <div class="mu-flex">
      <div class="code-examples-content">
        <div class="mu-flexbox mu-flex-row">
            <div class="mu-flexbox-item1 flex-demo mu-flex-foculs" style=""></div> 
            <div class="mu-flexbox-item1 flex-demo" style="text-align: right;margin-right: 16px;">
              由高到底排序
            </div> 
            
        </div> 
      </div>
    </div>  
</template> <!--  @click="fun($event)" -->
<script> 

export default {
  name: 'yx-cardetails', 
  props:{
    timaData:{
      type:String,
      default:'',
    }
  },
};
</script>
<style lang='postcss'>
.van-card {

  .coll-time{
    padding: 2px 6px;
    border-radius: 4px;
    text-align: center;
    line-height: 18px;
    font-size: 12px;
  }
  .activeretbutton{
    position: relative;
  }
  .activeretbutton:after{
    content: '';
    position: absolute;
    top: 34px;
    left: 18px;
    width: 10px;
    height: 10px;
    background: #fff;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .activeretbutton:before{
    content: '';
    position: absolute;
    top: 32px;
    left: 18px;
    width: 10px;
    height: 10px;
    background: #f4f4f4;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}
</style>




