<template>
    <li class="pullleft addres-li clearfix">
        <div class="pullleft informacion">
            <div>
                <span @click="clickEdit">{{labelName}}</span> 
                <van-popup v-model="showEdit" position="right" :overlay="false">
                    <div class="entrada">
                        <input type="text" :placeholder="content" v-model="content">
                        <van-button @click="showEdit = false">保存</van-button>
                    </div>
                </van-popup>
            </div>
            <!-- <div> -->
                <!-- <p @click="clickEdit" style="display:block;" v-model="txt"> 22{{ content }}</p> -->
                <p v-if="computedTxt.length > 0 " @click="clickEdit" style="display:block;" v-model="content">{{ computedTxt }}</p>
                <p v-else @click="clickEdit" style="display:block;" v-model="content">无</p>
            <!-- </div> -->
        </div>
        
        <i class="pullright yx-icon-ump-right inforicon"></i>
        
    </li>
</template>
<script>
export default {
    name: 'yx-edit-modifier', 
    props:{
        labelName:{
            type:String,
            default(){
                return '名称'

            }
        },
        label:{
            type:String,
            default(){
                return '请输入..'
            }
        }
    },
    data() {
        return {
            showEdit:false,
            content:this.label,
            txt: '1111hahahhahahahahahah',
        } 
    },
    methods: {
        clickEdit(){
            let _self = this;
            _self.showEdit = true 
            //EditField
            _self.$router.replace({name:'AccountbookDetail',params:{'detailtype':'modifier','pageObj':_self},query:{field:this.label}}) 
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
        //获取字符个数
        computedCharLen(){
            return this.content.length
        },
        //获取字节个数
        computedByteLen(){
            return this.content.replace(/[^\x00-\xff]/g, '01').length
        },
        //控制显示内容
        computedTxt(){
            return this.methodGetByteLen(this.content,14)
        }
    }
}
</script>