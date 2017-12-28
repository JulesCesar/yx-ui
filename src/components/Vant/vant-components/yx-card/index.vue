<template>
 
 <div>
     <div :class="['van-card']" >
      <div class="van-card__header" v-if="title">
        <slot name="title">
          <div class="clearfix">
              <yx-icon class="pullleft yxiconttitle" name="balance-details" />
              <span v-if="title" class="van-card__header__title pullleft">{{ title }}</span>
           
                <div>    
                  <span class="pullright focusbutton collection-item" v-for="gameName in gameNames" :class="{active: activeName == gameName}" @click="selected(gameName)">{{gameName}}
                  </span>
                </div>
               <div class="van-card__header__right pullright">
                 <van-tabs type="card"  @click="handleTabClick">
                  <van-tab  v-for="item in tabs" :title='item' > </van-tab>
                </van-tabs>
                
              </div>
              
          </div>
          <div class="van-card__header__botomtime">
           {{bottomDate}}
          </div>
        </slot>
      </div> 
      <div class="van-card__content">
        <slot name="content_time"></slot>
        <slot name="content_tag"></slot>
        <slot name="content_cell"></slot>
      </div>
      <div class="van-card__footer">
        <flujo-footer :info='desInfo' :titular='desTitular'></flujo-footer>
      </div>
    </div>
 </div>
 
</div>
</template>

<script> 
// import Flujofondos from './Flujofondos';
// import Flujobotomtime from './Flujobotomtime';
// import Flujocontent from './Flujocontent';
import Flujofooter from './Flujofooter';
import { format,isFirstDayOfWeek, lastDayOfWeek,startOfMonth,lastDayOfMonth,addDays,subDays,addWeeks,subWeeks,addMonths,subMonths} from 'date-fns'
let today = new Date();

export default {
  name: 'yx-card-ff', 
  components: {
    "flujo-footer": Flujofooter,
  },
  props:{
    title:String,
    desInfo:String,
    desTitular:String,
  },
  data() {
    return {
      tabs:['日','周','月'], 
      start:format(today, 'YYYY-MM-DD'),
      end:format(today, 'YYYY-MM-DD'),
      gameNames: ['<i class="yx-icon-ump-right"></i>', '<i class="yx-icon-ump-left"></i>'],      


      activeName: ''
    } 
  },
  computed:{
    bottomDate(){
      if(this.start==this.end){
        return '时间：  ' + this.start
      }else{
        return '时间：  ' + this.start + '  至  ' +this.end
      }
    }
  },
  methods:{
    selected: function(gameName) {
      this.activeName = gameName
    },
     handleTabClick(tab){  
       debugger;
       switch (tab) {
         case 0:
          this.end = format(today, 'YYYY-MM-DD')
         break

         case 1:
          let _lastWeek = lastDayOfWeek(today);
          this.end = format(_lastWeek,'YYYY-MM-DD')
          this.start = format(subDays(_lastWeek,7),'YYYY-MM-DD') //startOfWeek
         break

         case 2:
         
          this.start = format(startOfMonth(today),'YYYY-MM-DD')
          this.end = format(today, 'YYYY-MM-DD')
         break
       }
      this.$emit('dateChange',{start:this.start,end:this.end,type:this.tabs[tab]})
    },
    // clickChange(range){
    //   this.start=range.start
    //   this.end=range.end
    //   this.$emit('dateChange',range)
    // }
  }
}
</script>
