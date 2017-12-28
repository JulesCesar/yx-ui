<template>
  <div>
    <div class="clearfix">
      <div class="city" v-for="(item,index) in citys" @click="cityDetail(item.name)">
        <div class="city-title">
          <span class="yx-icon yx-icon-ump-find" style="color: #3296fa !important;font-size:20px;"></span>
          <span class="city-title__name">{{item.name}}</span>
        </div>
        <div class="city-detail">
          <div class="city-detail__col">
            <p>毛利: </p>
            <p class="city-money">{{item.total|currency1}}</p>
          </div>
          <div class="city-detail__col">
            <p>收入: </p>
            <p class="city-money">{{item.income|currency}}</p>
          </div>
          <div class="city-detail__col">
            <p>支出: </p>
            <p class="city-money">{{item.outcome|currency}}</p>
          </div>
        </div>
      </div>
    </div>
    <van-popup v-model="tipInfoShow">
      <yx-info />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'yx-city',
  data() {
    return {
      tipInfoShow:false
    };
  },
  methods: {
    tipInfo(obj) { 
      this.tipInfoShow = true;
    },
    cityDetail(name) {
      this.$emit('citydetail', name);
    }
  },
  props:{
    citys: {
      type: Array,
      default:()=>{
        return []
      }
    }
  }
}
</script>

<style lang='postcss'>
.city {
  margin: 0;
  padding: 12px;
  margin-right: 2.5px;
  margin-left: 2.5px;
  width: calc(100%/2 - 5px); 
  float: left;
  color: #b5b5b7;
  text-align: left; 
  margin-bottom: calc(10px*2 /2); 
  font-size: 15px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  &-title {
      border-bottom: 1px solid #e8e8e8;
      padding-bottom: 8px;
    &__name {
      color: #4990e2;
      margin-left: 8px;
    }
  }
  &-money {
    color: #333;
    margin-left: 8px;
  }
  &-detail {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    &__col {
      width: 100%;
      display: flex;
      justify-content: flex-start;
    }
  }
}
 </style>
