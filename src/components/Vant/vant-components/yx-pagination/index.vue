<template>
  <ul class="yx-pagination"  v-if="pages">
    <li @click="goto('sub')" >
      <a class="yx-icon-ump-left" href="javascript:;"></a>
    </li>
    <!-- <li v-for="index in pages" @click="goto(index)" :class="{'paginactive':current == index}" :key="index"> -->
    <li>
      <a href="javascript:;">{{current}}／{{pages}}</a>
    </li>
    <li @click="goto('add')">
      <a class="yx-icon-ump-right" href="javascript:;" ></a>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'yx-pagination',  
  props:{
    // 记录总页码
    pages: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      current:1,
    };
  },
  methods:{
    goto:function(type){
      if(type=='sub'){
        if(this.current>1){
            this.current--;
        }else{
            this.current=1;
        }
      }else{
        // debugger;
          if((this.current+1)>this.pages){
            this.current=this.pages
          }else{
            this.current++
          } 
      }

      this.$emit('clickPaging',{currentPageNum:this.current})
      this.$bus.$emit('clickPagingData',{currentPageNum:this.current}) 
    }
  }
};
</script>

<style lang='postcss'>
.van-card {

    .yx-pagination {
      position: relative;
      text-align: center;
      font-size: 12px;
    }
    .yx-pagination li{
      display: inline-block;
      padding: 1px 6px 0px 6px;
      margin: 0px 0px;
      border-radius: 4px;
      line-height: 10px;
      vertical-align: middle;
    }
    .yx-pagination li a{
      display:inline-block;
      background:#fff;
      color:#3296fa;
    }
    .yx-pagination li a:hover{
      // color:red;
    }
    .yx-pagination li.paginactive a{
      // background:#3296fa;
      color:#3296fa;
      vertical-align: text-top;
    }
}


 </style>
