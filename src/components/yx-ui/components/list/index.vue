<template>
  <div class="clearfix detall">
    <div class="detall__detallesli">

      <template v-if="getIcon">
      <div class="pullleft" >
        <div  style="text-align: left;">
          <!-- 应收时图标 -->
          <!-- <yx-icon name="apple1"  class="pullleft yxicnphone"/><div class="nameheight">{{name}}</div> -->
          <!-- 应付时图标 -->
          <yx-icon  class="pullleft" :name="getIcon"/>
          <div class="nameheight">{{name}}</div>
        </div>
        <p>备注：{{desc}}</p>
      </div>

       <div class="pullright">
        <div><div class="nameheight">{{amount|currency}}</div></div>
        <p>日期：{{creatDate}}</p>
      </div>
  </template>
<template v-else>
      <div class="pullleft"  >
        <div> 
          <div class="nameheight">备注:{{name}}</div>
        </div>
        <p>{{desc}}</p>
      </div>


      <div class="pullright">
        <div><div class="nameheight">{{amount|currency1}}</div></div>
        <p>日期：{{creatDate}}</p>
      </div>

      </template>
    </div>
  </div>
</template>

<script>  
export default {
  name: 'yx-list', 
   props: {
    iconType:String,
    name:String,
    desc: String,
    amount:[String, Number],
    creatDate: String,
  },
  computed:{
    getIcon(){
      let _icon = ''
      switch (this.iconType){
        case "流水账":
          _icon='liushuizhangyueduizhang'
        break

        case "未结清应收":
          _icon='yingshou'
        break
      
        case "未结清应付":
          _icon='yingfu'
        break

       case "个人":
          _icon='geren'
        break

        case "公司":
          _icon='gongsi'
        break

        
      } 
      return _icon
    } 
  }
}
</script>
<style lang='postcss'>
.van-card {
  .yxicnphone{
        // color:red;
        font-size:16px;
        line-height: 18px;
        margin-right: 4px;
      }
  .pullleft {float: left;}
  .pullright {float: right;}
  .clearfix:after{content: ' '; display: block; clear: both; visibility:hidden; line-height: 0; height:0;}
  .parapublico{
    display: flex;
    flex-direction: row;
    text-align: left;
    margin-bottom:14px;
  }
  .detall{
    // border-bottom: 2px solid #f0f0f0;
    padding-bottom: 10px;
    &__detallesli{
      // border-bottom: 2px solid #f0f0f0;
      padding:10px 0 10px 0;
        div{
          color:#575757;
        }
        div:nth-of-type(1) p{
          color: #bababa;
          text-align: left;
          // padding-left: 32px;
        }
        div:nth-of-type(2) p{
          color: #bababa;
          text-align: left;
        }
        .nameheight{
          display: inline-block;
          height: 30px;
          vertical-align: middle;
        }
        .yx-icon{
          color:#aca4a4 ;
          font-size: 22px;
          margin-right:10px ;
        }
        

    }
    
    &__detallesli div:nth-of-type(1){
      text-align: right;
    }
    &__detallesli div:nth-of-type(2){
      text-align: right;
    }
    &__detallesli:last-child{
      border-bottom: none;
    }
  }
  .decis{
   
  }
  .efectivo-flex{
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
  .detall:last-child{
      border-bottom: none;
    }
    
}
 </style>
