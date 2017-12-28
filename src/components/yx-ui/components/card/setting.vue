<template>
 
 <div> 
   
    <div class="agrega-una-carta">
       <h3>添加卡片</h3>
       <p>方便每日管理与决策，可根据需要选择定制的卡片，公司后台录入更多数据，可定制更多</p>
    </div>
    <div class="yx-semuestra">已显示卡片</div>
      
      <van-cell-group v-for="(item,index) in cardDate" style="padding-right:16px;">
        <van-cell yxicon='minuscircle' :title='item.title' @click="subCard(index)"  is-link style="border-bottom:1px solid #d9d9d9;"></van-cell> 
      </van-cell-group>
    <div class="yx-semuestra">可显示卡片</div>
      <van-cell-group v-for="(item,index) in useCards" style="padding-right:16px;">
        <van-cell yxicon='pluscircle' :title='item.title'  @click="addCard(index)"  name="pluscircle" is-link style="border-bottom:1px solid #d9d9d9;"></van-cell> 
      </van-cell-group>
      <div class="yx-semuestra">未激活卡片</div>
    <van-cell-group v-for="item in disableCards" style="padding-right:16px;">
      <van-cell yxicon='pluscircle' :title='item.title'  is-link  class="yx-wjhkp"></van-cell> 
    </van-cell-group>
 </div>
 
</div>
</template>

<script>    
export default {
  name: 'yx-card-setting', 
  components: { 

  },
  props:{
    title:String,
    desInfo:String,
    cardDate:Array,
    useCards:Array,
    disableCards:Array
  },
 
  data() {
    return { 
      activeName: '',
      tipInfoShow:false
    } 
  },
  computed:{
 
  },
  methods:{
    subCard: function(index) {
      if(this.cardDate.length){
         let _arr =   this.cardDate.splice(index,1); 
        this.useCards.unshift(_arr[0])
        this.$bus.$emit('editcardshow');
      }else{
        this.$tosta('至少保留一张卡片')
      } 
    },
    addCard: function(index) {
      let _arr =   this.useCards.splice(index,1);
      this.cardDate.unshift(_arr[0])
      this.$bus.$emit('editcardshow');
    }
  }
}
</script>

<style lang='postcss'>
  .agrega-una-carta{
    color:#454545;
    text-align: center;
    padding:10px 40px 10px 40px;
    background-color: #fff;
      h3{
        margin-bottom:20px;
      }
      p{
        margin-bottom: 30px;
      }
  }
  .yx-semuestra{
    background-color:#fff; 
    color:#aaa;
    padding: 10px 0 10px 15px;
  }
  .yx-wjhkp{
    border-bottom:1px solid #d9d9d9;
    color:#ccc;
    i{
      color:#ccc;
    }
  }
 </style>
 
