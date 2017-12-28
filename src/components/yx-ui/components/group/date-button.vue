<template>
        <div class="pararitbutton">
            <div class="clearfix parabt" >  
                <!-- 翻页按钮 -->
                <span class="pullright focusbutton collection-item"
                v-for="itme in moveButtons" 
                @click="paging(itme)">{{itme}}
                </span>  
                <!-- 切换按钮 -->
                <div class="clearfix pullright flowmeter">
                    <b v-for= '(item,index) in buttons'  class="pullleft" :class="{activeretbutton:item.isActive}" @click="btnClick(index)">{{item.name}}</b>
                </div>
                
            </div>
            <!-- 时间 -->
            <!-- <p class=""> -->
                <!-- {{desc}} -->
                <!-- 由高到底排序<i class="yx-icon yx-icon-ump-swap topybottom"></i> -->
            <!-- </p> -->
            
        </div>
</template>
<script>
import { 
    format,
    isBefore,
    subDays,
    subMonths,
    subQuarters,
    startOfWeek, 
    startOfMonth, 
    startOfQuarter,
    addDays, 
    addMonths,
    addQuarters, 
    lastDayOfMonth,
    lastDayOfQuarter
    } from 'date-fns'
let today = format(new Date(), 'YYYY-MM-DD')
export default {
    name: 'yx-date-button', 
    props: { 
        'buttonTypeId':{
            'type':String,
            default:()=>{
                return 'dateQuarter'
            }
        },
        'moveButtons':{
            'type':Array,
            default:()=>{
                return  ['>', '<']
            }
        },
        "descInfo":{
            'type':String,
            default:()=>{
              return ""
            }
        }
    }, 
    data(){
        return{
            buttonTypes:{
                dateMonthType:[{name:'日',isActive:true,value:'day'},{name:'周',isActive:false,value:'week'},{name:'月',isActive:false,value:'month'}],
                dateThreeDays:[{name:'日',isActive:true,value:'day'},{name:'3日',isActive:false,value:'threeDays'},{name:'周',isActive:false,value:'week'}], 
                dateWeek:[{name:'周',isActive:true,value:'week'},{name:'月',isActive:false,value:'month'}],
                dateQuarter:[{name:'周',isActive:true,value:'week'},{name:'月',isActive:false,value:'month'},{name:'季',isActive:false,value:'quarter'}], 
                dataSort:[{name:'总量',isActive:true,value:'all'},{name:'流入',isActive:false,value:'inflow'},{name:'流出',isActive:false,value:'outflow'}]
            }, 
            start:today,
            end:today,
            atctiveButtons:{}
        }
    },
    computed:{
        buttons(){
            return  this.buttonTypes[this.buttonTypeId]; 
        },
        // desc(){
        //     if(this.descInfo){
        //         return this.descInfo
        //     }else{
        //         if(this.start==this.end){
        //             return '时间：  ' + this.end
        //         }else{
        //             return '时间：  ' + this.start + '  至  ' +this.end
        //         }
        //     }
        // }
    },
    methods: {
        btnClick(id) {
            this.end =today
            if(!this.buttons[id].isActive){
                let _selectButton =  this.buttons.filter(val=>val.isActive)
                _selectButton[0].isActive=false
                this.buttons[id].isActive=true
            }
            this.atctiveButtons=this.buttons[id];
 
            switch (this.atctiveButtons.name) {
                case '日':
                this.start =today; 
                break

                case '三日':
                this.start =format(subDays(today,3),'YYYY-MM-DD') ; 
                break

                case '周': 
                this.start = format(subDays(startOfWeek(today),1),'YYYY-MM-DD') 
                break

                case '月':
                this.start = format(startOfMonth(today),'YYYY-MM-DD') 
                break

                case '季':
                this.start = format(startOfQuarter(today),'YYYY-MM-DD') 
                break
            }

            this.$emit('rightButtonClick',{'btn':this.atctiveButtons,start:this.start,end:this.end})
        },
        paging: function(name) { 
            debugger
            if(this.end==today){
                if(name=='>') return ;
                switch (this.atctiveButtons.name){
                    case '日':
                        this.start = format(subDays(today,1),'YYYY-MM-DD') 
                        this.end = this.start
                    break

                    case '3日':
                        this.start =format(subDays(this.start,3),'YYYY-MM-DD') ; 
                        this.end =format(subDays(this.start,2),'YYYY-MM-DD') ; 
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

                    case '季':
                        this.start = format(subQuarters(this.start, 1),'YYYY-MM-DD')
                        this.end = format(lastDayOfQuarter(this.start),'YYYY-MM-DD') 
                    break

                }
            }else{
                switch (this.atctiveButtons.name){
                    case '日':
                    if(name=='>'){
                        this.start = format(addDays(this.start,1),'YYYY-MM-DD')
                    }else{
                        this.start = format(subDays(this.start,1),'YYYY-MM-DD') 
                    } 
                    this.end = this.start
                    break

                    case '3日':

                    if(name=='>'){
                        this.start = format(addDays(this.start,3),'YYYY-MM-DD')
                    }else{
                        this.start = format(subDays(this.start,3),'YYYY-MM-DD') 
                    } 
                    this.end = format(addDays(this.start,2),'YYYY-MM-DD')

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

                    case '季':
                    if(name=='>'){
                        this.start = format(addQuarters(this.start,1),'YYYY-MM-DD')
                    }else{
                        this.start = format(subQuarters(this.start,1),'YYYY-MM-DD') 
                    }
                    this.end =  format(lastDayOfQuarter(this.start),'YYYY-MM-DD')
                    break
                }

                if(isBefore(today,this.end)) {
                    this.end=today
                    return 
                }
            }
            this.$emit('buttonClick',{'btn':this.atctiveButtons,start:this.start,end:this.end })
        },
    }
}
</script>
<style lang='postcss'>

.van-card {

  .pararitbutton{
    margin-bottom:10px;
    .parabt{
        margin-bottom: 8px;
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
                padding: 2px 6px 5px 6px;
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
    .yxiconttitle{
        // color:red;
        font-size:16px;
        // line-height: 30px;
        margin-right: 4px;
      }
      .collection-item{
          line-height: 18px;    
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

