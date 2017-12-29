<template>
<div>
    <!-- <div class="container" :class="isClicked? 'box-clicked' : null" @click="btnClick()"> -->
        <span :style="isClicked? btnClickedStyle : null" @click="btnClick()">{{title}}</span>
    <!-- </div> -->
</div>
</template>

<script>
    export default {
        props: [
            'title',
        ],
        data() {
            return {
                isClicked: false,
                btnClickedStyle: {
                    'border': '1px solid #3296fa',
                    // 'background': 'url(./../../../../../assets/img/duigoublue.png) no-repeat',
                    'background': '#3296fa',
                    // 'background-position': '3px 5px;',
                    'color': '#fff'
                },
            }
        },
        methods: {
            btnClick() {
                console.log("clicked");
                this.isClicked = !this.isClicked;
            }
        }
    }
</script>

