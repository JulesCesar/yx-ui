<template>
 <div>
      <div class="clearfix">
         <div class="calculate" v-for="(item,index) in contacts"   @click="clickContactsDetail(item)">
          <div class="contacts-title">
            <span v-show="item.type=='个人'" class="yx-icon yx-icon-ump-invoice"></span>
            <span v-show="item.type=='公司'" class="yx-icon yx-icon-ump-tag"></span>
 
            <span class="calposition" >{{item.name}}
              <div class="calabslute">
                <!-- 付款时显示此条 -->
                <a class="calabslute__tagsurround"></a>
                <!--当未付款时候显示此条  -->
                <!-- <a class="calabslute__tagsurround"><yx-tagmini type="danger">{{TageInfono}}</yx-tagmini></a> -->
              </div>
            </span>
            
          </div>
          <template>
              <p>毛利:{{item.curamount|currency1}}</p> 
              <p>收入:{{item.curincome|currency}}</p>
              <p>支出:{{item.curexpense|currency}}</p>
           </template>
           <!-- <template v-if="contactType=='receiver'">
              <h5>毛利:{{item.curamount|currency1}}</h5> 
              <p>收入:{{item.curincome|currency}}</p>
              <p>支出:{{item.curexpense|currency}}</p>
           </template>
           <template v-else>
              <h5>{{item.curamount|setLabeName}}{{item.curamount|currency}}</h5>  
           </template> -->
        </div>
      </div> 
</div>
</template>
<script> 
export default {
  name: 'yx-ciudad', 
  props:{
    contactType:String,
    contacts: {
      type: Array,
      default:()=>{
        return [
            {"id": 1, "type": "公司", 
        "name": "美国客户1", "cname": "无", 
        "account": "花旗银行（122131224213123）", 
        "atype": "对公账户", "alast4": "0987", 
        "phone": "18623212342","email": "18623212342@qq.com",
        "desc": "测试1", "linkman": "1", "linkphone": "",
        "curamount": 0, "curincome": 0, "curexpense": 0}
        ]
      }  
    }
  },
  data() {
    return { 
    };
  },
  filters: {
    // setLabeName(val){
    //   if(val>0){
    //     return '累计应收:'
    //   }else{
    //     return '累计应付:'
    //   }
    // } 
  },
  methods: {
   clickContactsDetail(item) {
      // this.$router.replace(""); 
      // alert("我会跳转"+item.name);
      this.$emit('cardDetailClick',item);
    },
    test() {
      
    }
  }
}
</script>
 
<style lang='postcss'>
.van-card {

  .pullleft {float: left;}
  .pullright {float: right;}
  .clearfix:after{content: ' '; display: block; clear: both; visibility:hidden; line-height: 0; height:0;}
  .parapublico{
    display: flex;
    flex-direction: row;
    text-align: left;
    margin-bottom:10px;
      span{
        margin-left: 6px;
        // border:1px solid #3296fa;
        // color:#3296fa;
        border:1px solid #9ea2a3;
        color:#9ea2a3;
        padding: 4px 12px 4px 12px;
        border-radius:6px;
        font-size:12px;
      }
  }
  .calculate{
    margin: 0; padding: 12px;
    width: calc(100%/2 - 5px); 
    float: left;
    color: #333;
    text-align: left; 
    margin-bottom: calc(10px*2 /2); 
    font-size: 18px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
      h5{
        color:#464648;
      }
      p{
        color:#b5b5b7;
        margin-bottom:6px;
      }
      .calposition{
        position: relative;
        color: #3296fa;
        height: 21px;
        line-height: 26px;
        width: 80px;
        display: inline-block;
        overflow: hidden;
          .calabslute{
            position: absolute;
            top: -8px;
            right: -58px;
            // right:0;
            display: inline-block;
            line-height: 14px;
            padding: 1px 5px;
            border-radius: 2px;
            font-size: 10px;
            
              &__tagsurround-blue{
                position: relative;
                font-size:10px;
                font-style:normal;
                color:#fff;
                padding: 2px;
                  &:after, &:before {
                    border: solid transparent;
                    transform:rotate(180deg);
                    content: ' ';
                    height: 0;
                    right: 100%;
                    position: absolute;
                    top:5px;
                    width: 0;
                  }
                  &:after {
                    border-width: 4px;
                    top: 6px;
                  }
                  &:before {
                    border-width: 4px;
                    top: 6px;
                  }
              }
              &__tagsurround{
               
                position: relative;
                font-size:10px;
                color:#fff ;
                display: block;
                font-style:normal;
                padding: 2px;
                &:after, &:before {
                  border: solid transparent;
                  transform:rotate(180deg);
                  content: ' ';
                  height: 0;
                  right: 100%;
                  position: absolute;
                  top:5px;
                  width: 0;
                }
                &:after {
                  border-width: 4px;
                  top: 6px;
                }
                &:before {
                  border-width: 4px;
                  top: 6px;
                }
              }
          }
      }
     

  }
 
  .contacts-title span:nth-of-type(2){
   color:#3296fa;
   font-size: 15px;
  }
  .calculate:nth-child(odd){
    margin-right: calc(10px*2 /2); 
  }
  .efectivo-flex-texcolor{
    margin-bottom:8px;
    position: relative;
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
}
 </style>
