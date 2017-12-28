<template>
  <div>
    <div class="clearfix">
      <div class="account" v-for="item in accounts" @click="getDetail(item)">
        <div class="account-title clearfix">
          <div class="pullleft accout-icon">
            <span v-show="item.type=='现金账户'" class="yx-icon yx-icon-ump-cash_account" style="color: #3296fa !important;width: 24px;    font-size: 22px;"></span>
            <span v-show="item.type=='银行账户'" class="yx-icon yx-icon-ump-bank_account" style="color: #3296fa !important;width: 24px;    font-size: 22px;"></span>
            <span v-show="item.type=='第三方支付平台'" class="yx-icon yx-icon-ump-third_party_account" style="color: #3296fa !important;width: 24px;    font-size: 22px;"></span>
          </div>
          <div class="pullleft">
            <span class="account-title__name">{{item.name|cutTitle}}22</span>
            <p class="account-title__type">{{item.type}}11</p>
          </div>
          
        </div>
        <div class="account-balance">
          <p>余额</p>
          <p class="account-money">{{item.balance|currency1}}</p>
        </div>
        <div class="account-detail">
          <div class="account-detail__col">
            <p>盈余</p>
            <p class="account-money">{{item.total|currency1}}
              <span class="account-detail__col__percent" :class="{upstyle: item.ratio[0][0]=='+'}" v-if="item.ratio.length&&item.ratio[0]!='+Infinity%'">
                <span v-if="item.ratio[0][0]=='-'">&darr;</span><span v-else>&uarr;</span>
              {{item.ratio[0]}}</span>
            </p>
          </div>
          <div class="account-detail__col">
            <p>流入</p>
            <p class="account-money">{{item.income|currency}}
              <span class="account-detail__col__percent" :class="{upstyle: item.ratio[1][0]=='+'}" v-if="item.ratio.length&&item.ratio[1]!='+Infinity%'">
                <span v-if="item.ratio[1][0]=='-'">&darr;</span><span v-else>&uarr;</span>
              {{item.ratio[1]}}</span>
            </p>
          </div>
          <div class="account-detail__col">
            <p>流出</p>
            <p class="account-money">{{item.outcome|currency}}
              <span class="account-detail__col__percent" :class="{upstyle: item.ratio[2][0]=='+'}" v-if="item.ratio.length&&item.ratio[2]!='+Infinity%'">
                <span v-if="item.ratio[2][0]=='-'">&darr;</span><span v-else>&uarr;</span>
              {{item.ratio[2]}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'yx-accounts3',
  data() {
    return {
      showPopup: false
    };
  },
  methods: {
    getDetail(item) {
      this.$emit('clickItem', item);
    }
  },
  filters: {
    cutTitle(str) {
      return str.length > 4 ? str.substring(0, 5) + '...' : str;
    }
  },
  props: {
    accounts: {
      type: Array,
      default:()=>{
        return [
          {
            name:'中国银行',
            type:'银行账户',
            balance: 99999999,
            total: 99999999,
            income: 99999999,
            outcome: 99999999
          }
        ]
      }
    }
  }
}
</script>

<style lang='postcss'>
.upstyle {
  color: #ff776f !important;
  background-color: #f2f2f2 !important;
}
.account {
  margin: 0;
  padding: 8px;
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
    .accout-icon{
      margin-top: 1px;
      margin-right: 8px;
    }
    &__name {
      color: #4990e2;
      // margin-left: 4px;
    }
    &__type {
      // margin-left: 32px;
      font-size: 12px !important;
      margin-top: 0px;
    }
  }
  &-balance {
    display: flex;
    justify-content: flex-start;
    margin: 0 auto;
    border-bottom: 1px solid #ccc;
    padding-bottom: 30px;
    margin: 4px auto;

    height: 24px;
    line-height: 24px;
    & > p:first-child {
      font-size: 12px;
    }
    & > p:last-child {
      margin-left: 9px;
    }
  }
  &-money {
    color: #333;
  }
  &-detail {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    &__col {
      width: 100%;
      & > p:first-child {
        font-size: 12px;
      }
      & > p:last-child {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
      }
      &__percent {
        font-size: 10px;
        font-weight: 600;
        display: inline-block;
        color: #bbb;
        padding: 2px 6px 2px 6px;
        line-height: 14px;
        border-radius: 7px;
        background-color: #f2f2f2;
        text-align: center;
      }
    }
  }
}
 </style>
