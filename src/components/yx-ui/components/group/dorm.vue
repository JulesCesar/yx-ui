<template>
  <div>
    <div class="clearfix">
      <div class="dorm" v-for="(item,index) in dorms" @click="dormDetail(item.name)">
        <div class="dorm-title">
          <span class="yx-icon yx-icon-ump-dangechengshi-xiangmu"  style="color: #3296fa !important;font-size:20px;"></span>
          <span class="dorm-title__name">{{item.name}}</span>
        </div>
        <div class="dorm-detail">
          <div class="dorm-detail__col">
            <p>毛利: </p>
            <p class="dorm-money">{{item.total|currency1}}</p>
          </div>
          <div class="dorm-detail__col">
            <p>收入: </p>
            <p class="dorm-money">{{item.income|currency}}</p>
          </div>
          <div class="dorm-detail__col">
            <p>支出: </p>
            <p class="dorm-money">{{item.outcome|currency}}</p>
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
  name: 'yx-dorm',
  data() {
    return {
      tipInfoShow:false
    };
  },
  methods: {
    tipInfo(obj) { 
      this.tipInfoShow = true;
    },
    dormDetail(name) {
      this.$emit('dormdetail', name);
    }
  },
  props:{
    dorms: {
      type: Array,
      default:()=>{
        return [
          
        ]
      }
    }
  }
}
</script>

<style lang='postcss'>
.dorm {
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
  border: 1px solid #ccc;
  border-radius: 4px;
  &-title {
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
