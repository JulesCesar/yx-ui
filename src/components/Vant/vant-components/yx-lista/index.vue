<template>
 <div>
  <div class="efectivo-flex">
     <!-- <div class="parapublico">
       <yx-testbutton :tags="tags"></yx-testbutton> 
     </div> -->
      <div class="clearfix">
        <yx-pequena></yx-pequena>
      </div>
  </div>
</div>
</template>

<script> 
// import testButton from './yxtestbutton';

export default {
  name: 'yx-lista', 
   data() {
    return {
      tags:[{name:11,isActive:true},{name:22,isActive:false}],
      
      numberdos: [
        {name:'蓝天集团',Excedente:'13800138000',Entrada:'-120,000，000',Salida:'120,000，000，000'},
        {name:'荒野行动',Excedente:'13800138000',Entrada:'120,000',Salida:'120，000，000，000'},
        {name:'暴雪',Excedente:'13800138000',Entrada:'120,000,000,000',Salida:'120，000，000，000'},
        {name:'星际争霸',Excedente:'13800138000',Entrada:'120,000,000,000',Salida:'120，000，000，000'}
      ],
      
    };
  },
  methods: {
   tzclick() {
    },
    test() {
      
    }
  },
  components: {
    // testButton
  },
  props:{
  }
}
</script>
<style lang='postcss'>
.van-card {

  .calculate:active{
    border:1px solid #3296fa;
    background:#f0f0f0;
  }
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
    border: 1px solid #ccc;
    border-radius: 4px;
      h5{
        color:#464648;
      }
      p{
        color:#b5b5b7;
      }
      .calposition{
        position: relative;
          .calabslute{
            position: absolute;
            top: -2px;
            right: -28px;
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
 
  .calulate-title span:nth-of-type(2){
   color:#3296fa;
   font-size: 15px;
  }
  .calculate:nth-child(odd){
    margin-right: calc(10px*2 /2); 
  }
  .efectivo-flex-texcolor{
    margin-bottom:8px;
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
