<template>
        <div class="parapublico">
        
        <template  v-for= '(item,index) in selfTags'>
              <b class="pullleft" :class="{ active:item.isActive}" @click="btnClick(index)">{{item.name}}</b>
        </template>
       
        </div>

</template>
<script>
    export default {
        name: 'yx-testbutton', 
        props: {
            'title':String,
            tags:[]
        },
        data() {
            return {  
                 selfTags: this.tags,
            }
        },
        methods: {
            btnClick(id) {
                console.log(id);
                 this.selfTags[id].isActive = !this.selfTags[id].isActive;

            }
        }
    }
</script>
<style lang='postcss'>

.van-card {

  .parapublico{
    margin-bottom:10px;
    .active {
            color:#fff;
            border:1px solid #3296fa;
        },
      b{
        margin-left: 6px;
        border: 1px solid #9ea2a3;
        color: #9ea2a3;
        padding: 4px 12px 4px 12px;
        border-radius: 6px;
        font-size: 12px;
      }
      b:first-child{
          margin-left:0px;
      }
  }
    
  .calculate:active{
    border:1px solid #3296fa;
    background:#f0f0f0;
  }
  .pullleft {float: left;}
  .pullright {float: right;}
  .clearfix:after{content: ' '; display: block; clear: both; visibility:hidden; line-height: 0; height:0;}
}
 </style>

