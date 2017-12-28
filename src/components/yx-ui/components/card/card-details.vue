<template>
 <div>
     <div :class="['van-card']" >
      <div class="van-card__header" v-if="title">
        <slot name="title">
          <div class="clearfix  card-bottom">
              <!-- <yx-icon class="pullleft yxiconttitle" name="balance-details" />style="padding-top:8px;" -->
              <yx-icon class="pullleft yxcar-ttitle" :name="iconNameDetel" />
              <!-- <span v-if="title" class="van-card__header__title pullleft" v-model="title">{{ title }}</span> -->
              <span v-if="title" class="van-card__header__title pullleft" v-model="title">{{ computedTxt }}</span>
               <div class="van-card__header__right1 pullright">
                 <div class="detailshome1">
                    <template v-if="bottomDate">
                      {{bottomDate}}
                    </template>
                 </div>
                 <template> 
                     <slot name="rightbtn">
                     </slot>
                 </template>
              </div>
              
          </div> 
           <template v-if="!bottomDate">
            <yx-cardetails></yx-cardetails>
          </template >
        </slot>
      </div> 
      
      <div class="van-card__content">
        <!-- <flujo-content></flujo-content> -->
        <!-- <slot name="content_time"></slot>
        <slot name="content_tag"></slot> -->
        <slot name="content_cell"></slot> 
      </div>
      <div class="van-card__footer">
         <!-- 分页 --> 
          <template>
            <ul class="yx-pagination"  v-if="pageCount>1">
              <li @click="goto('sub')" >
                <a class="yx-icon-ump-left" href="javascript:;"></a>
              </li>
              <!-- <li v-for="index in pages" @click="goto(index)" :class="{'paginactive':current == index}" :key="index"> -->
              <li>
                <a href="javascript:;" >{{current}}／{{pageCount}}</a>
              </li>
              <li @click="goto('add')">
                <a class="yx-icon-ump-right" href="javascript:;" ></a>
              </li>
            </ul>
          </template>

          <div class="van-card__footer__Indicador clearfix">
            <van-button class="footer-yiwen pullright" @click="tipInfoShow = true">?</van-button>
            <div class="pullright footer-yiwen-text" v-if="title.indexOf('*')>0" style="line-height: 22px;" </div>
          </div>
      </div>
      <van-popup  v-model="tipInfoShow">
       <yx-info  @closeTipInfo="closeTip" 
         :title = 'infoName.title' 
         :cardTitle = 'infoName.cardTitle'
         :cardInfo = 'infoName.cardInfo' 
         :dataTitle = 'infoName.dataTitle'
         :dataInfouno = 'infoName.dataInfouno' 
         :dataInfodos = 'infoName.dataInfodos'
         :cardInfobox = 'infoName.cardInfobox'
         :dataInfo = 'infoName.dataInfo'/>
      </van-popup>
    </div>
 </div>
 
</div>
</template>

<script> 
// import Flujofooter from './Flujofooter';

export default {
  name: 'yx-card-details', 
  components: {
    // "flujo-footer": Flujofooter,
  },
  props:{
    title:{
      type:String,
      default:function(){
        return '标题'
      }
    },
    descInfo:Object,
    pageCount:Number,
    bottomDate:String,
  },
 
  data() {
    return {
      tabs:['日','周','月'],   
      activeName: '',
      tipInfoShow:false,
      
      current:1,
    } 
  },
  methods:{
    nextPage:(currentPage)=>{
      debugger; 
      // this.$bus.$emit('clickPagingData',currentPage)  
    },
    selected: function(gameName) { 
    },
    handleTabClick(tab){  
       debugger; 
    }, 
    goto:function(type){
      if(type=='sub'){
        if(this.current>1){
            this.current--;
        }else{
            this.current=1;
        }
      }else{
        // debugger;
          if((this.current+1)>this.pageCount){
            this.current=this.pageCount
          }else{
            this.current++
          } 
      }

      this.$emit('clickPaging',{'currentPageNum':this.current}) 
    },
    closeTip(){
      this.tipInfoShow=false
    },
    methodGetByteLen(str,len) {
      if (this.computedByteLen <= len){
        return str
      }
      for(let i = Math.floor(len/2);i < str.length; i++){
        if (str.substr(0, i).replace(/[^\x00-\xff]/g, '01').length >= len){
          return str.substr(0, Math.floor(i / 2) * 2) + '...'
        }
      }
    }
  },
  computed:{
    infoName() {
      switch (this.title){
        case '流水方向一览' :
          return {
            'title':'流水方向一览',
            'cardTitle':'目的',
            'cardInfo':'查看分组下的收付款人的流水数额以及走势',
            'cardInfobox':'对流水账收付款人进行分组管理',
          }
        break;
        case '未分组收付款人' :
          return {
            'title':'未分组收付款人',
            'cardTitle':'目的',
            'cardInfo':'管理尚未加入二级分组的收付款人',
          }
        break;
        case '分组管理' :
          return {
            'title':'分组管理',
             'cardTitle':'目的',
            'cardInfo':'对流水收付款人进行分组管理的添加和编辑',
            
          }
        break;
        default :
          return {
            'title':'卡片说明',
            'cardInfo':'查看明细和个人信息',
          }
        break
      }
    },
    iconNameDetel(){
      switch (this.title){
        case '收入*明细':
          return 'yingshou'
        break

        case '支出*明细':
          return 'yingfu'
        break

        case '流入*明细':
          return 'liushuizhang-liuru'
        break

         case '流出*明细':
          return 'liushuizhang-liuchu'
        break

        case '客户收入走势图':
          return 'shouruzoushitu'
        break

        case '客户分组':
          return 'qunzu'
        break

        case '客户':
          return 'geren'
        break

        case '流水方向一览':
          return 'liushuifangxiangyilan'
        break

        case '分组管理':
          return 'fenzuguanli'
        break

        case '未分组收付款人':
          return 'liushuizhangshoufukuanren'
        break

         case '北京民宿运营分析':
          return 'test4'
        break

        

        default :
          return 'shoufukuanren-gongsi'
        break
      }
    },
    //获取字符个数
    computedCharLen(){
        return this.title.length
    },
    //获取字节个数
    computedByteLen(){
        return this.title.replace(/[^\x00-\xff]/g, '01').length
    },
    //控制显示内容
    computedTxt(){
        return this.methodGetByteLen(this.title,12)
    }
  }
}
</script>

