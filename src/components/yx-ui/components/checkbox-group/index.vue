<template>
    <div class="yx-checkbox">
        <!-- <template> -->
            <div style="color:#bbb; font-size:12px;">
            将收付款人编辑至指定分组，可方便进行人员管理，查看分组最全的详细流水账信息，还有 <b>200</b>人未添加到分组
        </div>
    　　<div>
    　　　　<ul class="clearfix empresa-ul">  
                <li v-for='(item,index) in items' class="clearfix"> <!--通过切换索引值改变class-->
                    <div class="pullleft empresa">
                        <i v-show="item.type==1" class="yx-icon-ump-gongsi"></i>
                        <i v-show="item.type==2"class="yx-icon-ump-geren"></i>

                        <span>{{item.name}}</span>
                    </div>
                    
                　　 <div>
                        <i class="pullright yx-icon-ump-checkcircle"  @click="change(item)" :class='{active:item.active}'></i>
                    </div>
                    <div class="pullright etiquetas" >
                        <span v-for='tagItem in item.tags'>{{tagItem}}</span> 
                    </div>
                </li>  
            </ul> 
    　　</div>
    </div>
</template>
<script>
    export default {
        name: 'yx-checbox', 
        props: { 
            'tags111':Array
        }, 
        data(){
            return{
                 active: false,
                 number: 0,
                 items:[
                    {name: "员工",type:1,active: true,tags:['员工','股东','员工']},
                    {name: "客户",type:2,active: false,tags:['员工1','股东','员工']},         
                    {name: "股东",type:1,active: true,tags:['员工2','股东','员工']}
                ]　
            }
        },
        methods: {
        　　 change: function(obj) {  
               obj.active = !obj.active; 
            }  
        }
    }
</script>
<style lang='postcss'>
    .yx-checkbox{
        .empresa-ul li{
            height: 44px;
            padding:8px 0 8px 0;
            border-bottom:1px solid #f8f8f8;
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
                color: #5cbaf0;
                font-size: 12px;
            }
        }
        .active{
             color: #0188ed !important;
             background-color:#fff;
             border: none;
        }
        .etiquetas{
            span{
                color:#6dbd69;
                border:1px solid #6dbd69;
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

