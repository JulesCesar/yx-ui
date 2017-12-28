<template>

        <div class="clearfix detall">
           
          <div class="detall__detallesli">
            <div class="pullleft">
              <div  style="text-align: left;">
                <yx-icon name="API" /><name class="nameheight">{{listname.name}}</name>
              </div>
              <p>备注：{{listdesc.desc}}</p>
            </div>
            <div class="pullright">
              <div><name class="nameheight">{{listvalue.value}}</name></div>
              <p>日期：{{listfecha.fecha}}</p>
            </div>
          </div>
          
        </div>

</template>

<script> 
export default {
  name: 'yx-detalles', 
   props: {
    listname:Object,
    listdesc: Object,
    listfecha:[Object, Number],
    listvalue: [Object, Number]
  },
  // components: {
  //   [Icon.name]: Icon
  // },
   data() {
    return {
      tags:[{name:11,isActive:true},{name:22,isActive:false}],
    };
  },
  methods: {
 
  },
  
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
  }
  .detall{
    border-bottom: 1px solid #f8f8f8;
    &__detallesli{
      padding:10px 0 10px 0;
        div{
          color:#494652;
        }
        p{
          color:#aca4a4;
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
    font-size: 12px;
    margin-bottom: 8px;

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
