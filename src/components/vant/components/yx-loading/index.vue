<template>
    <div>
        <div class="dasLoading" v-show="loading">
            <div class="dasLoading-cheles">
                <div class="k-line k-line3-1" ></div>
                <div class="k-line k-line3-2" ></div>
                <div class="k-line k-line3-3" ></div>
                <div class="k-line k-line3-4" ></div>
                <div class="k-line k-line3-5" ></div>
            </div>
        </div>
        <!-- <button @click="fakeloding">loading</button> -->
    </div>
</template>
<script>
    export default {
        name: 'yx-loading', 
        props: {
        },
        data() {
            return {  
                loading:false
            }
        },
        methods: {
            toggleLoading(show = true) {
        	    this.loading = show
            },
            fakeloding() {
                this.toggleLoading(true)
                setTimeout(() => {
                    this.toggleLoading(false)
                }, 2000)
            }
        },
        ready() {
    	    this.fakeloding()
        }
    }
</script>


