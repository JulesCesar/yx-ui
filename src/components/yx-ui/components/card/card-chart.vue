<template>
 <div>
     <div :class="['van-card']" >
      <div class="van-card__header" v-if="title">
        <slot name="title">
          <div class="clearfix van-card__header__inside-padding">
              
              <yx-icon class="pullleft yxcar-ttitle" :name="iconName" />
    
              <!-- <yx-icon class="pullleft yxcar-ttitle" name="data" /> -->
              <!-- <span v-if="title" class="van-card__header__title pullleft" >{{ title }}</span> -->
              <span v-if="title" class="van-card__header__title pullleft" v-model="title">{{ computedTxt }}</span>
                <div>    
                  <div class="pullright focusbutton collection-item"
                   v-for="itme in moves" 
                   :class="{active: activeName == itme}" 
                   @click="paging(itme)">{{itme}}
                  </div>
                </div>
               <div class="van-card__header__right pullright">
                <van-tabs type="card"  @click="dataRangeChange">
                  <van-tab  v-for="item in dateType" :title='item' > </van-tab>
                </van-tabs>
              </div>
              
          </div>
          <div class="van-card__header__botomtime inside-padding">
           {{bottomDate}}
          </div>
        </slot>
      </div> 
      <div class="van-card__content">
        <!-- <slot name="content_time"></slot>
        <slot name="content_tag"></slot> -->
        <slot name="content_cell"></slot>
      </div>
      <div class="van-card__footer">
         <!-- 分页 -->
          <!-- <yx-pagination :pages='pageCount'></yx-pagination> -->
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

          <div>
            <div class="van-card__footer__Indicador clearfix">
              <van-button class="footer-yiwen pullright" @click="tipInfoShow = true">?</van-button>
              <div class="pullright footer-yiwen-text" v-if="title.indexOf('*')>0" style="line-height: 22px;" >带*定义参见&nbsp;</div>
            </div>
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
         <!-- <yx-info  @closeTipInfo="closeTip" :title='descInfo.title' :cardInfo='descInfo.cardInfo' :dataInfo='descInfo.dataInfo'/> -->
      </van-popup>
    </div>
  
 </div>
</template>

<script> 
// import Flujofooter from './Flujofooter';
import { format,
        isBefore,
        startOfWeek, 
        lastDayOfWeek, 
        addMonths,
        subMonths,
        startOfMonth,
        lastDayOfMonth,
        addDays,
        subDays,
        addWeeks,
        subWeeks} from 'date-fns'
let today = format(new Date(), 'YYYY-MM-DD')

export default {
  name: 'yx-card-chart', 
  components: {
    // "flujo-footer": Flujofooter,
  },
  props:{
    title:String,
    descInfo:{
      type: Object,
      default: ()=> {
        return {
          'title':'利润卡片说明',
          'cardInfo':'该卡片以最全面的计算方式，计算整个公司账面的收入和支出的情况',
          'dataInfo':'（以下带*号的数据项表示为毅行智管针对这个数据项的计算方式，可能和实际计算方式不同） 利润*：等于选定时间段的收入-支出。 收入*：对应时间段内，资金流水的流入+创建时间在时间段内的"未结清"应收总额。支出*：对应时间段内，资金流水的流出+创建时间在时间段内的"未结清"应付总额。'
        }
      }
    },
    dataRange:Boolean,
    pageCount:Number,
  },
  data() {
    return {
      dateType:['周','月'], 
      activeDateType:'周',
      start:today,
      end:today,
      moves: ['>', '<'],
      activeName: '',
      tipInfoShow:false,
      current:1
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
        case '伙伴收入走势图' :
          return {
            'title':'伙伴收入走势图',
            'cardTitle':'目的',
            'cardInfo':'查看和伙伴相关的资金流趋势',
          }
        break;
        case '伙伴分组' :
          return {
            'title':'伙伴分组',
            'cardTitle':'目的',
            'cardInfo':'伙伴的二级分组管理',
          }
        break;
        case '伙伴' :
          return {
            'title':'伙伴',
            'cardTitle':'目的',
            'cardInfo':'伙伴的分组操作',
          }
        break;

        case '客户收入走势图' :
          return {
            'title':'客户收入走势图',
            'cardTitle':'目的',
            'cardInfo':'查看和客户相关的资金流趋势',

          }
        break;

        case '客户分组' :
          return {
            'title':'客户分组',
            'cardTitle':'目的',
            'cardInfo':'客户的二级分组管理',

          }
        break;
        case '客户' :
          return {
            'title':'客户',
            'cardTitle':'目的',
            'cardInfo':'客户的分组操作',

          }
        break;



        case '股权收入走势图' :
          return {
            'title':'股权收入走势图',
            'cardTitle':'目的',
            'cardInfo':'查看和股权相关的资金流趋势',

          }
        break;

        case '股权分组' :
          return {
            'title':'股权分组',
            'cardTitle':'目的',
            'cardInfo':'股权的二级分组管理',

          }
        break;
        case '股权' :
          return {
            'title':'股权',
            'cardTitle':'目的',
            'cardInfo':'股权的分组操作',

          }
        break;

        case '税费收入走势图' :
          return {
            'title':'税费收入走势图',
            'cardTitle':'目的',
            'cardInfo':'查看和税费相关的资金流趋势',

          }
        break;

        case '税费分组' :
          return {
            'title':'税费分组',
            'cardTitle':'目的',
            'cardInfo':'税费的二级分组管理',

          }
        break;
        case '税费' :
          return {
            'title':'税费',
            'cardTitle':'目的',
            'cardInfo':'税费的分组操作',

          }
        break;

        case '员工收入走势图' :
          return {
            'title':'员工收入走势图',
            'cardTitle':'目的',
            'cardInfo':'查看和员工相关的资金流趋势',

          }
        break;

        case '员工分组' :
          return {
            'title':'员工分组',
            'cardTitle':'目的',
            'cardInfo':'员工的二级分组管理',

          }
        break;
        case '员工' :
          return {
            'title':'员工',
            'cardTitle':'目的',
            'cardInfo':'员工的分组操作',

          }
        break;



         case '债权收入走势图' :
          return {
            'title':'债权走势图',
            'cardTitle':'目的',
            'cardInfo':'查看和债权相关的资金流趋势',

          }
        break;

        case '债权分组' :
          return {
            'title':'债权分组',
            'cardTitle':'目的',
            'cardInfo':'债权的二级分组管理',

          }
        break;
        case '债权' :
          return {
            'title':'债权',
            'cardTitle':'目的',
            'cardInfo':'债权的分组操作',

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
    iconName() {
      switch (this.title){
        case '流水账一览' :
          return 'liushuizhangyilan'
        break
        case '利润*一览' :
          return 'lirunyilan'
        break
        case '流水账余额对账':
          return 'liushuizhangyueduizhang'
        break
        case '流水账收付款人':
          return 'liushuizhangshoufukuanren'
        break
        case '应收应付一览':
          return 'yingshouyingfuyilan'
        break

        case '应收应付款人':
          return 'liushuizhangshoufukuanren'
        break

        case '流水方向一览':
          return 'liushuifangxiangyilan'
        break

        case '分组管理':
          return 'fenzuguanli'
        break

        case '运营资金管理':
          return 'yunyingzijinguanli'
        break

        case '分区经营分析':
          return 'fenqujingyingfenxi'
        break

        case '收入*明细':
          return 'filetext1'
        break

        case '支出*明细':
          return 'exception1'
        break
        case '北京民宿运营分析':
          return 'chengshijingyingfenxi'
        break


        default :
          return 'liushuizhangyilan'
        break
      }
    },
    bottomDate(){
      if(this.start==this.end || this.dataRange){
        return '时间：  ' + this.end
      }else{
        return '时间：  ' + this.start + '  至  ' +this.end
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
        return this.methodGetByteLen(this.title,14)
    }
  },
  created(){
    // console.dir(this.descInfo);
  },
  mounted() {
    this.dataRangeChange(0);
    this.$emit('initchartdate', this.start, this.end);
  },
  methods:{
    nextPage:(currentPage)=>{
      // this.$emit('currentPage',currentPage)
    },
    paging: function(name) {
      // this.activeName = name
      if(this.end==today){
        if(name=='>') return ;
        switch (this.activeDateType){
          case '日':
            this.start = format(subDays(today,1),'YYYY-MM-DD') 
            this.end = this.start
          break

          case '周':
            this.start = format(subDays(this.start,7),'YYYY-MM-DD')
            this.end = format(addDays(this.start,6),'YYYY-MM-DD')
          break

          case '月':
            // var result = lastDayOfMonth(this.start)
            this.start = format(subMonths(this.start, 1),'YYYY-MM-DD')
            this.end =  format(lastDayOfMonth(this.start),'YYYY-MM-DD')

          break
        }
      }else{
        
        switch (this.activeDateType){
          case '日':
           if(name=='>'){
              this.start = format(addDays(this.start,1),'YYYY-MM-DD')
           }else{
              this.start = format(subDays(this.start,1),'YYYY-MM-DD') 
           } 
           this.end = this.start
          break

          case '周':
           if(name=='>'){
              this.start = format(addDays(this.start,7),'YYYY-MM-DD')
           }else{
              this.start = format(subDays(this.start,7),'YYYY-MM-DD') 
           } 
           this.end = format(addDays(this.start,6),'YYYY-MM-DD')
           console.log(this.start, this.end)
          break

          case '月': 
           if(name=='>'){
              this.start = format(addMonths(this.start,1),'YYYY-MM-DD')
           }else{
              this.start = format(subMonths(this.start,1),'YYYY-MM-DD') 
           }
           this.end =  format(lastDayOfMonth(this.start),'YYYY-MM-DD')
          break
        }

        if(isBefore(today,this.end)) {
          this.end=today
          // return 
        }
      }
      this.$emit('dateChange',{start:this.start,end:this.end,type:name})
    },
    dataRangeChange(tab){ 
      this.activeDateType = this.dateType[tab]
      this.end =today;
      switch (tab) {

        case 0:
        // this.start = format(startOfWeek(today),'YYYY-MM-DD')
        // this.start = format(addDays(startOfWeek(today),1),'YYYY-MM-DD') 
         this.start = format(subDays(startOfWeek(today),1),'YYYY-MM-DD') 
        break

        case 1:
        this.start = format(startOfMonth(today),'YYYY-MM-DD') 
        break
      }

      this.$emit('dateChange',{start:this.start,end:this.end,type:this.dateType[tab]})
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
  }
  


}
</script>

