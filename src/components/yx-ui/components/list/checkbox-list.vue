<template>
    <div class="yx-checkbox">
        <!-- <template> -->
          
    　　<div>
    　　　　<ul class="clearfix empresa-ul">  
                <li v-for='(item,index) in checkListData' class="clearfix"> <!--通过切换索引值改变class-->
                    <div class="pullleft empresa">
                        <i v-show="item.type=='个人'" class="yx-icon-ump-geren"></i>
                        <i v-show="item.type=='公司'"class="yx-icon-ump-gongsi"></i>

                        <span>{{item.name}}</span>
                    </div>
                    
                　　 <div>
                        <i class="pullright yx-icon-ump-checkcircle"  @click="change(item,index)" :class='{active:item.active}'></i>
                    </div>
                    <div class="pullright etiquetas" >
                        <span v-for='tagItem in item.tags'>{{tagItem.tagname}}</span> 
                    </div>
                </li>  
            </ul> 
    　　</div>
    </div>
</template>
<script>
    export default {
        name: 'yx-checkbox-list', 
        props: { 
            'checkListData':{
                type:Array,
                default:()=>{
                    return [{name: "员工",type:'个人',active: true,tags:[{tagid: 1, tagname: "客户"},{tagid: 1, tagname: "股东"},{tagid: 1, tagname: "客户"}]}]
                }
            }
        }, 
        methods: {
        　　 change: function(obj,index) {  
                obj.active = !obj.active; 
                this.$emit('changeClick',{'index':index,'changeObj':obj})
            }  
        }
    }
</script>
<style lang='postcss'>
    .yx-checkbox{
        b{
            color:#000;
            padding:0 3px 0 1px;
        }
        .empresa-ul li{
            height: 44px;
            padding:8px 0 8px 0;
            // border-bottom:1px solid #f8f8f8;
            div:nth-of-type(2) i{
                color: #d8d8d8;
            }

        }
        .empresa-ul li:last-child{
           border-bottom:none;
        }
        .empresa{
            i{
                color:#c2c2c2;
                font-size:14px;
                margin-right:6px;
            }
            span{
                color: #595959;
                font-size: 14px;
            }
        }
        .active{
             color: #0188ed !important;
             background-color:#fff;
             border: none;
        }
        .etiquetas{
            span{
                color:#31bc72;
                // border:1px solid #6dbd69;
                background-color:#eaf8f1;
                border-radius:1000px;
                font-size:12px;
                padding: 2px 8px 1px 8px;
            }
            span:last-child{
                margin-right: 8px;
            }
        }
    }
    
 </style>

