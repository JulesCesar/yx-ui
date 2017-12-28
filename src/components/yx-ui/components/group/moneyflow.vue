<template>
 <div>
   <div slot="rightbtn"> 
        <!-- <yx-right-button  buttonTypeId='dataSort'/> -->
         <!-- <a class="Hacerunallamada">+将选中添加至分组</a> -->
        </div>
      <div class="clearfix">
        
         <div class="calculate" v-for="(item,index) in tag"   >
          <div class="contacts-title clearfix"> 
            <!-- <yx-icon class="pullleft yxcar-ttitle" :name="iconName" /> -->
            <span  class="yx-icon yx-icon-ump-qunzu" style="color: #3296fa !important;"></span>
            <span class="calposition" @click="cardDetailClick(item)">
               {{item.tagname}} 
            </span>
            <!-- <span v-if='edit' class="pullright card-editbox" @click="editClick(item)"><i class="yx-icon-ump-edit1"></i></span> -->
            <span v-if='edit' class="pullright card-editbox" @click="editClick(item,index)"><i class="yx-icon-ump-delete"></i></span>
          </div>
        
          <template> 
              <div class="circular-box clearfix">
                <div>
                  <span style="font-size:12px;">资金</span>
                </div>
                <ul class="circular-boxul clearfix" v-if="item.sum>0">
                  <point v-for="n in item.inflow"  color="red" />
                  <point v-for="n in item.outflow"  color="yellow"  />
                  <span class="circular-inflow pullleft"  v-show="item.inflow>0">流入</span>
                  <!-- <span class="circular-outflow pullright" v-if="(item.inflow+item.outflow) > 3?true:false">流出</span> -->
                  <span class="circular-outflow pullright" 
                        v-if="(item.inflow === 0  && 
                        (item.inflow+item.outflow) > 0) ||  
                        (item.inflow+item.outflow) > 4 ?true:false"
                        
                        >
                        流出
                  </span>
                  
                </ul>
                  <div class="circular-boxul clearfix without" v-else>
                    <p>
                      暂无
                    </p>
                  </div>
              </div>
              <div class="circular-public clearfix">
                <div class="circular-divuno pullleft clearfix">
                  <h6 class="pullleft">公司</h6>
                  <span class="pullleft">{{item.company}}</span>
                </div>
                <div class="circular-divuno pullright clearfix">
                  <h6 class="pullleft">个人</h6>
                  <span class="pullleft">{{item.personage}}</span>
                </div>
              </div>
              <div>

              </div>
              <div v-if="addgroupicon" style="padding-top:20px;">

              </div>
              <div class="add-agregar" v-if="addgroupicon" @click="itemAddGroupClick(item)">
                添加至此分组
              </div> 
          </template>
        </div>
        <!-- 添加分组 -->
        <template v-if="add"> 
          <span class="pullleft"> 
          
          </span> 
          <div class="calculate calulate-p" @click="addEditClick" style="margin-right:0px !important;border:none !important;">
            <p class="yx-icon-ump-plus"></p>
            <p>添加分组</p>
          </div>
        </template>
         <!-- 从分组中删除 -->
         <template v-if="del"> 
          <div class="calculate calulate-p" @click="delEditClick" style="margin-right:0px !important;border:none !important;">
            <p class="yx-icon-ump-close"></p>
            <p>从分组中删除</p>
          </div>
        </template>
        
      </div> 
</div>
</template>

<script>  
export default {
  name: 'yx-moneyflow', 
  components:{
    'point':{
      template:' <li  class=" pullleft " :class="[circularColor]"></li> ',
      props: {  
          'color': String,
      },
      computed:{
        iconName() {
            switch (this.tagname){
              case '客户' :
                return 'qunzu'
              break
              case '员工' :
                return 'qunzu'
              break
              case '伙伴':
                return 'qunzu'
              break
              case '税费':
                return 'qunzu'
              break
              case '股权':
                return 'qunzu'
              break
              case '债权':
                return 'qunzu'
              break
              default :
                return 'qunzu'
              break
            }
          },
         circularColor(){
           if(this.color=='yellow'){
             return 'circular-color'
           }
           if(this.color=='red'){
             return 'circular-boxul-li'
           }
         }
      }
    }
  },
  props:{
    add:{
      type:Boolean,
      default:()=>{
        return false
      }
    },
    del:{
      type:Boolean,
      default:()=>{
        return false
      }
    },
    addgroupicon:{
      type:Boolean,
      default:()=>{
        return false
      }
    },
    edit:{
      type:Boolean,
      default:()=>{
        return false
      }
    },
    tag: {
      type: Array,
      default:()=>{
        return [
            {"tagid": 1, "tagname":'未分组',"curamount": 10, "income": 5, "expense": 5} 
        ]
      }  
    }
  },
  data() {
    return {  
         newName:'分组名',
         showEdit:false, 
         content:'',
         
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
    yuanData(){
      if(this.length == 1){
       
      }
    },
    cardDetailClick(item) { 
      if(!this.addgroupicon){
        this.$emit('cardDetailClick',item);
      }
    },
    itemAddGroupClick(item){
        this.$emit('addGroupClick',item);
    },
    editClick(obj,index){
       obj.index = index
       this.$emit('editClick',obj);
    },
    addEditClick(){
      let _self = this;
      // _self.showEdit = true 
      //  this.$dialog.alert({
      //   title: '标题',
      //   message: '弹窗内容'
      // }).then(() => {
      //   // on close
      // });
      // _self.$router.push({name:'CapitalDetail',params:{'detailtype':'modifier','pageObj':_self}}) 
      this.$emit('addEditClick','add');
      //EditField
     
    },
    delEditClick(){
      let _self = this; 
      //
      this.$emit('delEditClick','del'); 
    }, 
    newGroupClick(){
      this.showEdit = false
      if(this.content){
         this.$emit('newGroupClick',this.content);
      }else{
        this.$toast('名称不能为空！')
      }
     
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="postcss">
    .grupo-objetos{
        font-size: 16px;
        text-align: center;
    }
    .calculate{
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
        color: #2fa9ed;
        padding: 6px 0 4px 0;
        text-align: center;
        border-top: 1px solid #e8e8e8;
        font-size: 12px;
        position: absolute;
        bottom: 0;
        right:0;
    }
</style>

