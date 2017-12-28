<template>  
    <div class="mu-flex">
      <div class="code-examples-content">
        <div class="mu-flexbox mu-flex-row">
            <div class="mu-flexbox-item1 flex-demo mu-flex-foculs" style="">
              <span class="coll-time yx-icon-ump-left" 
                v-for="gameName in gameNames" 
                :class="{activetime: activeName == gameName}" 
                @click="previousClick(gameName)">
                {{gameName}}
                
                {{messhangData}}
                {{diasshangData}}
                {{semanashangData}}
              </span>
            </div> 
            <div class="mu-flexbox-item2 flex-demo" style="margin-left: 8px;">
              {{timaData}}
            </div> 
            <div class="mu-flexbox-item1 flex-demo mu-flex-foculs" style="margin-left: 8px;">
              <span class="coll-time yx-icon-ump-rightafter" 
                v-for="gameName1 in gameNamesxa" 
                :class="{activetime: activeName1 == gameName1}" 
                @click="nextClick(gameName1)">
                {{gameName1}}

                {{mesxiaData}}
                {{diasxiaData}}
                {{semanaxiaData}}
              </span>
            </div>
        </div> 
      </div>
    </div>  
</template> <!--  @click="fun($event)" -->
<script>
import moment from 'moment';

export default {
  name: 'yx-time', 
  props:{
    timaData:{
      type:String,
      default:'',
    },
    shangalrededorData:{
      type:String,
      default:'',
    },
    xiaalrededorData:{
      type:String,
      default:'',
    },
    messhangData:{
      type:String,
      default:'',
      // default:'上一日',
    },
    mesxiaData:{
      type:String,
      default:'',
      // default:'下一日',
    },
    diasshangData:{
      type:String,
      default:'',
      // default:'上一周',
    },
    diasxiaData:{
      type:String,
      default:'',
      // default:'下一周',
    },
    semanashangData:{
      type:String,
      default:'',
      // default:'上一月',
    },
    semanaxiaData:{
      type:String,
      default:'',
      // default:'下一月',
    }
  },
  data() {
    return {
      gameNames: [' '],
      gameNamesxa: [' '],
      activeName: '',
      activeName1: ''
    }
  },
  methods:{
    // selected: function(gameName) {
    //   this.activeName = gameName
    // },
    previousClick:function(gameName) {
      this.activeName = gameName
      this.activeName1 = ''
      // e.target.style.color =  "#"+Math.floor(Math.random()*0xffffff).toString(16);
      this.$emit("shangalrededorData");
    },
    nextClick:function(gameName) {
      this.activeName1 = gameName
      this.activeName = ''
      //  e.target.style.color =  "#"+Math.floor(Math.random()*0xffffff).toString(16);
      this.$emit("test");
    }
  }
};
</script>
<style lang='postcss'>
.van-card {
 .activetime {
  color: #3296fa;
  }
  .coll-time{
    padding: 2px 6px;
    border-radius: 4px;
    text-align: center;
    line-height: 18px;
    font-size: 12px;
  }
  .van-tab--active:after{
    // position: absolute;
    // left: 0;
    // top: 28px;
    // width:0; 
    // height:0;
    // border-width:15px;
    // border-bottom-width:26px;
    // border-style:solid;
    // border-color:transparent transparent red transparent;
    // box-shadow: 0 10px 10px -10px white;
    content: '';
    position: absolute;
    top: 27px;
    left: 9px;
    width: 10px;
    height: 10px;
    background: #fff;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);

  }
  .van-tab--active:before{
    // position: absolute;
    // left: 0;
    // top: 28px;
    // width:0; 
    // height:0;
    // border-width:15px;
    // border-bottom-width:26px;
    // border-style:solid;
    // border-color:transparent transparent red transparent;
    // box-shadow: 0 10px 10px -10px white;
    content: '';
    position: absolute;
    top: 27px;
    left: 4px;
    width: 10px;
    height: 10px;
    background: #f4f4f4;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }
 
}
</style>




