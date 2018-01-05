<template>
    <div id="components-layout-demo-top-side">
        <v-layout>
            <v-header>
                <div class="logo"></div>
                <v-menu theme="dark" mode="horizontal" :data="menuData1" style="line-height: 64px"></v-menu>
            </v-header>
            <v-layout>
                <v-sider :width="200" style="background: #fff">
                    <v-menu mode="inline" :data="menuData2" style="height:100%"></v-menu>
                </v-sider>
                <v-layout style="padding:0 24px 24px">
                    <v-breadcrumb style="margin:12px 0">
                        <v-breadcrumb-item>Home</v-breadcrumb-item>
                        <v-breadcrumb-item href="">List</v-breadcrumb-item>
                        <v-breadcrumb-item href="">App</v-breadcrumb-item>
                    </v-breadcrumb>
                    <v-content style="background: #fff; padding: 24px; margin: 0; min-height: 280px">Content</v-content>
                </v-layout>
            </v-layout>
        </v-layout>
    </div>
</template>

<style>
    #components-layout-demo-top-side .logo {
        width: 120px;
        height: 31px;
        background: #333;
        border-radius: 6px;
        margin: 16px 28px 16px 0;
        float: left;
    }
</style>
<script>
    export default {
        data() {
            return {
                menuData1: [{
                    name: '移动端组件',
                    selected: true
                },{
                    name: 'Chart', 
                }],
                menuData2: [{
                    name: 'subnav 1',
                    icon: 'user',
                    expand: true,
                    children: [{
                        name: 'option1',
                        selected: true
                    },{
                        name: 'option2'
                    },{
                        name: 'option3'
                    },{
                        name: 'option4'
                    }]
                },{
                    name: 'subnav 2',
                    icon: 'laptop',
                    children: [{
                        name: 'option5'
                    },{
                        name: 'option6'
                    },{
                        name: 'option7'
                    },{
                        name: 'option8'
                    }]
                },{
                    name: 'subnav 3',
                    icon: 'notification',
                    children: [{
                        name: 'option9'
                    },{
                        name: 'option10'
                    },{
                        name: 'option11'
                    },{
                        name: 'option12'
                    }]
                }]
            }
        }
    }
</script>