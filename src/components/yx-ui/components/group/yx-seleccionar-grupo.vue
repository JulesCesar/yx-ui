<template>
    <div>
        <div class="">
            <h4 class="grupo-objetos">将选中的11个对象添加到以下分组</h4>
        </div>
        <div class="clearfix">
            <div class="yx-selec-calculate" v-for="(item,index) in tag1"   @click="clickContactsDetail(item)">
            <div class="contacts-title clearfix"> 
                <span class="calposition" >
                {{item.tagname}}
                <div class="calabslute">
                    <!-- 付款时显示此条 -->
                    <a class="calabslute__tagsurround"></a>
                </div>
                </span>
            </div>
            <template>
                <div class="circular-box clearfix">
                    <span class="pullleft" style="font-size:12px;">资金</span>
                    <ul class="circular-boxul pullleft clearfix">
                        <li class="circular-boxul-li pullleft"></li>
                        <li class="circular-boxul-li pullleft"></li>
                        <li class="circular-boxul-li pullleft"></li>
                        
                        <li class="circular-boxul-li pullleft circular-color"></li>
                        <li class="circular-boxul-li pullleft circular-color"></li>
                        <li class="circular-boxul-li pullleft circular-color"></li>
                        <li class="circular-boxul-li pullleft circular-color"></li>
                        <span class="circular-inflow">流入</span>
                        <span class="circular-outflow">流出</span>
                    </ul>
                </div>
                <div class="circular-public clearfix">
                    <div class="circular-divuno pullleft clearfix">
                        <h6 class="pullleft">公司</h6>
                        <span class="pullleft">2</span>
                    </div>
                    <div class="circular-divuno pullleft clearfix">
                        <h6 class="pullleft">个人</h6>
                        <span class="pullleft">2</span>
                    </div>
                </div>
                <div class="add-agregar">
                    添加至分组
                </div>
            </template>
            </div>
            <!-- 添加分组 -->
            <template v-if="add">
            <div class="calculate calulate-p" style="margin-right:0px !important;">
                <p class="yx-icon-ump-plus"></p>
                <p>添加分组</p>
            </div>
            </template>
        </div> 
    </div>
</template>

<script> 
let tagName =  ['客户','员工','伙伴','税费','股权','债权']
export default {
  name: 'yx-seleccionar-grupo', 
  props:{
    add:{
      type:Boolean,
      default:()=>{
        return false
      }
    },
    tag1: {
      type: Array,
      default:()=>{
        return [
            {"tagid": 1, "tagname":'客户',"curamount": 0, "income": 0, "expense": 0},
            {"tagid": 2, "tagname":'员工',"curamount": 0, "income": 0, "expense": 0},
            {"tagid": 3, "tagname":'伙伴',"curamount": 0, "income": 0, "expense": 0},
            {"tagid": 4, "tagname":'税费',"curamount": 0, "income": 0, "expense": 0},
            {"tagid": 5, "tagname":'股权',"curamount": 0, "income": 0, "expense": 0},
            {"tagid": 6, "tagname":'债权', "curamount": 0, "income": 0, "expense": 0}
        ]
      }  
    }
  },
  data() {
    return { 
    };
  },
  filters: {
    setLabeName(val){
      if(val>0){
        return '资金:'
      }else{
        return '员工:'
      }
    } 
  },
  methods: {
   clickContactsDetail(item) {
      // this.$router.replace(""); 
      // alert("我会跳转"+item.name);
      this.$emit('cardDetailClick',item);
    },
    test() {
      
    }
  }
}
</script>
<style lang="postcss">
    .grupo-objetos{
        font-size: 16px;
        text-align: center;
    }
    .yx-selec-calculate{
        margin: 0;
        padding: 12px;
        width: calc(50% - 5px);
        float: left;
        color: #333;
        text-align: left;
        margin-bottom: 10px;
        font-size: 18px;
        border: 1px solid #3d85e8;
        border-radius: 4px;
        position: relative;
        
    }
    .yx-selec-calculate:nth-child(odd) {
        margin-right: 10px;
    }
    .yx-selec-calculate {
        padding: 8px 8px 28px 8px!important;
    }
    .add-agregar{
        width:100%;
        color: #fff;
        padding: 6px 0 4px 0;
        text-align: center;
        background-color:#2fa9ed;
        font-size: 12px;
        position: absolute;
        bottom: 0;
        right:0;
    }
</style>


