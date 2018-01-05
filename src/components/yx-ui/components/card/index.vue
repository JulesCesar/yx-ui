<template>
 <div>
     <div :class="['van-card']" >
      <div class="van-card__header" v-if="title">
        <slot name="title">
          <div class="clearfix van-card__header__inside-padding">
              
              <yx-icon class="pullleft yxcar-ttitle" :name="iconName" />
    
              <!-- <yx-icon class="pullleft yxcar-ttitle" name="data" /> -->
              <!-- <span v-if="title" class="van-card__header__title pullleft" >{{ title }}</span> -->
              <span 
                v-if="title" 
                class="van-card__header__title pullleft" 
                v-model="title">
                {{ computedTxt }}
              </span>
                <!-- <div>    
                  <div class="pullright focusbutton collection-item"
                   v-for="itme in moves" 
                   :class="{active: activeName == itme}" 
                   @click="paging(itme)">{{itme}}
                  </div>
                </div> -->
               <div class="van-card__header__right pullright">
                <van-tabs type="card"  @click="dataRangeChange">
               
                  <van-tab  v-for="item in dateType" :title='item' > 
                  </van-tab>
                </van-tabs>
              </div>
              
          </div>
          <!-- <div class="van-card__header__botomtime inside-padding">
           {{bottomDate}}
          </div> -->
          <yx-time 
            :timaData="bottomDate" 
            @shangalrededorData="paging('<')" 
            :messhangData = 'titleTimes.messhangData'
            :mesxiaData = 'titleTimes.mesxiaData'
            :diasshangData = 'titleTimes.diasshangData'
            :diasxiaData = 'titleTimes.diasxiaData'
            :semanashangData = 'titleTimes.semanashangData'
            :semanaxiaData = 'titleTimes.semanaxiaData'
            @test="paging('>')"></yx-time>
          <!-- <yx-time :timaData="bottomDate" :shangalrededorData="paging(itme)" :shangalrededorData="itme"></yx-time> -->
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
                <a href="javascript:;">{{current}}／{{pageCount}}</a>
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
  name: 'yx-card', 
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
      dateType:['日','周','月'], 
      activeDateType:'日',
      start:today,
      end:today,
      // moves: ['>', '<'],
      activeName: '',
      tipInfoShow:false,
      current:1
    } 
  },
  computed:{
    infoName() {
      switch (this.title){
        case '利润*一览' :
          return {
            'title':'利润一览',
            'cardTitle':'目的',
            'dataTitle':'数据说明',
            'cardInfo':'了解不同时间段公司的收入、支出、和利润，可查阅明细',

            'dataInfo':'收入*：资金流水的流入+创建时间在时间段内的"未结清"应收总额',
            'dataInfouno':'支出*：资金流水的流出+创建时间在时间段内的"未结清"应付总额',
            'dataInfodos':'利润*：等于选定时间段的收入*-支出*'
          }
        break;


        case '流水账一览' :
          return {
            'title':'流水账一览',
            'cardTitle':'目的',
            'dataTitle':'数据说明',
            'cardInfo':'了解不同时间段公司的收入、支出、和利润，可查阅明细',
            'cardInfobox':'对比公司不同时间段内整体流水账资金的对比',

            'dataInfo':'流入：资金流水中流入的总额',
            'dataInfouno':'流出：资金流水中流出的总额',
            'dataInfodos':'盈余：盈余 = 流入 - 流出'
          }
        break;


        case '流水账余额对账' :
          return {
            'title':'流水账余额对账',
            'cardTitle':'目的',
            'dataTitle':'数据说明',
            'cardInfo':'可每隔固定查看出纳是否在后台对每个账户进行对账',
            'cardInfobox':'查看每个账户在特定时间点当时的余额以及所有账户的总余额',

            'dataInfo':'余额：每个账户对应的余额数',
            'dataInfouno':'总余额：所有账户的余额相加',
            'dataInfodos':'已对账：如果财务针对这个账户的对应日期在后台操作已对账，则该账户会显示已对账状态'
          }
        break;


        case '流水账收付款人' :
          return {
            'title':'流水账收付款人',
            'cardTitle':'目的',
            'dataTitle':'数据说明',
            'cardInfo':'了解主要的最近和公司流水账有往来的公司和个人信息',
            'cardInfobox':'查询某个具体公司或者个人详细的流水账记录',
            'cardInfoitem':'对收付款人进行信息管理与联系',

            'dataInfo':'流入：该公司或个人在时间段内的流入总额',
            'dataInfouno':'流出：该公司或个人在时间段内的流出总额',
            'dataInfodos':'盈余：该公司或个人在时间段内的流入-流出总额'
          }
        break;


        case '应收应付一览' :
          return {
            'title':'应收应付一览',
            'cardTitle':'目的',
            'dataTitle':'数据说明',
            'cardInfo':'查看应收应付信息以及对应的明细',

            'dataInfo':'应收：对应时间段内，所有累计的未结清的应收款项的总额。',
            'dataInfouno':'应付：对应时间段内，所有累计的未结清的应付款项的总额。',
            'dataInfodos':'总和：总和 = 应收 - 应付'
          }
        break;


        case '应收应付款人' :
          return {
            'title':'应收应付款人',
            'cardTitle':'目的',
            'dataTitle':'数据说明',
            'cardInfo':'了解主要的最近和公司应收应付有往来的公司和个人信息',
            'cardInfobox':'查询某个具体公司或者个人详细的应收应付记录',
            'cardInfoitem':'对收付款人进行信息管理与联系',

            'dataInfo':'累计应收：对应时间段内，该公司或个人所有累计的未结清的应收款-未结清应付款，如果是正数，显示“累计应收”，数值为减去后对应数值的绝对值',
            'dataInfouno':'累计应付：对应时间段内，该公司或个人所有累计的未结清的应收款-未结清应付款，如果是正数，显示“累计应付”，数值为减去后对应数值'
          }
        break;


        case '流水方向一览' :
          return {
            'title':'流水方向一览',
            'cardTitle':'目的',
            'cardInfo':'查看分组下的收付款人的流水数额以及走势',
            'cardInfobox':'对流水账收付款人进行分组管理',

          }
        break;


        case '运营资金管理' :
          return {
            'title':'运营资金管理',
            'cardTitle':'目的',
            'cardInfo':'了解目前整体账户下的资金流入流出的详细数据',
            'cardInfobox':'基于账户做分类管理，查看分类的资金运转情况',

          }
        break;

        case '分区经营分析' :
          return {
            'title':'分区经营分析',
            'cardTitle':'目的',
            'cardInfo':'了解区分地理区域，以及区域下的业务的详细信息',
            
          }
        break;
         case '收入*明细' :
          return {
            'title':'收入*明细',
            'cardTitle':'目的',
            'cardInfo':'收入明细说明',
            
          }
        break;

        case '支出*明细' :
          return {
            'title':'支出*明细',
            'cardTitle':'目的',
            'cardInfo':'支出明细说明',
            
          }
        break;
         case '流入*明细' :
          return {
            'title':'流入*明细',
            'cardTitle':'目的',
            'cardInfo':'流入明细说明',
            
          }
        break;

        case '流出*明细' :
          return {
            'title':'流出*明细',
            'cardTitle':'目的',
            'cardInfo':'流出明细说明',
            
          }
        break;

        case '应收*明细' :
          return {
            'title':'应收*明细',
            'cardTitle':'目的',
            'cardInfo':'应收',
            
          }
        break;

        case '应付*明细' :
          return {
            'title':'应付*明细',
            'cardTitle':'目的',
            'cardInfo':'应付明细说明',
            
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
    titleTimes(){
      switch (this.activeDateType){
        case '日':
          return {
              'messhangData':'上一日',
              'mesxiaData':'下一日',
          }
        break
        case '周':
          return {
              'messhangData':'上一周',
              'mesxiaData':'下一周',
          }
        break
        case '月':
          return {
              'messhangData':'上一月',
              'mesxiaData':'下一月',
          }
        break
       

        default :
          return {
            'messhangData':'1',
            'mesxiaData':'2',
          }
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
        this.start =today; 
        break

        case 1:
        // this.start = format(startOfWeek(today),'YYYY-MM-DD')
        // this.start = format(addDays(startOfWeek(today),1),'YYYY-MM-DD') 
         this.start = format(subDays(startOfWeek(today),1),'YYYY-MM-DD') 
        break

        case 2:
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

