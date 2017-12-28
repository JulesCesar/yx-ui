<template>  
    <div class="footer-popup-card"> 
        <div class="footer-popup-title">{{title}}</div>
        <div class="footer-popup-content">
        <p>{{cardTitle}}</p>
        <p>{{cardInfo}}</p>
        <p>{{cardInfobox}}</p>
        
        </div>
        <div  class="footer-popup-fottert">
         
        <p>{{dataTitle}}</p>
        
          <p>{{dataInfo}}</p>
         <p>{{dataInfouno}}</p>
         <p>{{dataInfodos}}</p>
        </div>
        <!-- <div class="footer-popup-heid" @click="closeTipInfo()">
        我已了解
        </div>  -->
        <div class="footer-popup-heid" @click="closeTip()">
          我已了解
        </div> 
    </div>   
</template> <!--  -->
<script>
export default {
  name: 'yx-info', 
  props:{
    title:{
      type: String,
      default:'',
    },
    cardTitle:{
      type: String,
      default:'',
    },
    cardInfo:{
      type: String,
      default:'',
    },
    cardInfobox:{
      type:String,
      default:'',
    },
    dataInfouno:{
      type:String,
      default:'',
    },
    dataInfodos:{
      type:String,
      default:'',
    },
    dataTitle:{
      type: String,
      default:''
    },
    dataInfo:{
      type: String,
      default: ''
    },
    
  },
  data() {
    return {
     isShow:true,
    }
  },
  methods:{
    closeTip(){ 
      this.isShow = !this.isShow;
        this.$emit('closeTipInfo');
    },
    // closeTipInfo1:function(){
    //   this.isShow = !this.isShow;
    //   this.closeTip();
      
    // }
  }
};
</script>
<style lang='postcss'>
.van-card {

    &__footer{
      .footer-yiwen{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #e9e9e9;
        border: 1px solid #e9e9e9;
        color: #fff;
        text-align: center;
        line-height: 19px;
        padding: 0;
      }
      .footer-popup{ 
      }
      
    }

}
</style>




