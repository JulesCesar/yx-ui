<template>
    <div class="pararitbutton">
        <div class="clearfix parabt" >  
        <!-- 切换按钮 -->
            <div class="clearfix pullright flowmeter">
                <b v-for= '(item,index) in buttons'  class="pullleft" :class="{activeretbutton:item.isActive}" @click="btnClick(index)">{{item.name}}</b>
            </div>
        </div>
        <!-- 时间 -->
        <!-- <p class="">
            由高到底排序<i class="yx-icon yx-icon-ump-swap topybottom"></i>
        </p>  -->
    </div>
</template>
<script>

export default {
    name: 'yx-sort-button', 
    props: { 
        'buttonTypeId':{
            'type':String,
            default:()=>{
                return 'dataSort'
            }
        }
    }, 
    data(){
        return{
            buttonTypes:{  
                dataSort:[{name:'总量',isActive:true,value:'all'},{name:'流入',isActive:false,value:'inflow'},{name:'流出',isActive:false,value:'outflow'}]
            },  
            atctiveButtons:{}
        }
    },
    computed:{
        buttons(){
            return  this.buttonTypes[this.buttonTypeId]; 
        }, 
    },
    methods: {
        btnClick(id) { 
            if(!this.buttons[id].isActive){
                let _selectButton =  this.buttons.filter(val=>val.isActive)
                _selectButton[0].isActive=false
                this.buttons[id].isActive=true
            }
            this.atctiveButtons=this.buttons[id];

            this.$emit('buttonClick',{'btn':this.atctiveButtons})
        }
    }
}
</script>
<style lang='postcss'>

.van-card {

  .pararitbutton{
    // margin-bottom:10px;
    p{
        color:#bbb;
        font-size:12px;
            text-align: right;
    }
    .parabt{
        margin-bottom: 2px;
    }
    // border:1px solid #ccc;
    .activeretbutton {
            color:#3296fa !important;
            // border:1px solid #3296fa;
            // background: url(../../../../../static/xuanzhong.svg) no-repeat 0 0;
            background-position: right 12px;

            
        }
        .flowmeter{
            // border: 1px solid #afabb2;
            border-radius: 4px;
            b{
                // margin-left: 6px;
                // border-right: 1px solid #afabb2;
                color: #afabb2;
                padding: 1px 6px 0px 6px;
                // border-radius: 6px;
                font-size: 16px;
            }
            b:last-child{
                border-right:none;
            }
        }
        .topybottom{
            transform:rotate(90deg);
            transform-style: preserve-3d;
        }
      
  }
   
     
  .calculate1:active{
    border:1px solid #3296fa;
    background:#f0f0f0;
  }
  .pullleft {float: left;}
  .pullright {float: right;}
  .clearfix:after{content: ' '; display: block; clear: both; visibility:hidden; line-height: 0; height:0;}
}
 </style>

