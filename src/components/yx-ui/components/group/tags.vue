<template>
        <div class="parapublico">
        
        <template  v-for= '(item,index) in tags'>
              <b class="pullleft" :class="{active:item.isActive}" @click="btnClick(index)">{{item.name}}</b>
        </template>
       
        </div>
</template>
<script>
    export default {
        name: 'yx-tags', 
        props: { 
            'tags':Array
        }, 
        data(){
            return{
                atctiveTags:{}
            }
        },
        methods: {
            btnClick(id) {
                this.atctiveTags =  this.tags.filter(val=>val.isActive)
                debugger
                if(this.atctiveTags.length>1 || !this.tags[id].isActive){ 
                    this.$emit('tagsClick',{'tags':this.tags,'clickTagId':id})
                }
            }
        }
    }
</script>
<style lang='postcss'>

.van-card {

  margin: 10px;
  .parapublico{
    margin-bottom:10px;
    .active {
            color:#3296fa;
            border:0.5px solid #3296fa;
            position: relative;
            background: url(../../../../../static/xuanzhong.svg) no-repeat 0 0;
            background-position: right 12px;
        }
    .active:after{
        content: "";
        display: block;
        position: absolute;
        left: -50%;
        width: 200%;
        height: 1px;
        -webkit-transform:scale(0.5);
    }
      b{
        margin-left: 6px;
        border: 0.5px solid #fff;
        color: #767676;
        background-color: #f5f5f5;
        padding: 4px 12px 4px 12px;
        border-radius: 2px;
        font-size: 12px;
      }
      b:first-child{
          margin-left:0px;
      }
  }
    .yxiconttitle{
        
        // font-size:16px;
        // // line-height: 30px;
        // margin-right: 4px;
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

