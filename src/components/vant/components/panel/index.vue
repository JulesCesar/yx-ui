<template>
  <div class="van-panel van-hairline--top-bottom">
    <div class="van-panel__header van-hairline--bottom">
      <slot name="header">
        <div class="van-panel__title" v-text="title"></div>
        <span class="van-panel__desc" v-if="desc" v-text="desc"></span>
        <span class="van-panel__status" v-if="status">{{status_text}}</span>
      </slot>
    </div>
    <div class="van-panel__content">
      <slot></slot>
    </div>
    <div class="van-panel__footer van-hairline--top" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'van-panel',
  props: {
    desc: String,
    title: String,
    status: String
  },
  computed: {
    status_text() {
      return this.thousands(this.status);
    }
  },
  methods: {
    thousands(status, addPlus) {
      status = status.split('/');
      let txt = status[0];
      let num = parseFloat(status[1]);
      // 判断num是数值型且不为NaN
      if (typeof num !== 'number' || isNaN(num)) {
          return num;
      }

      // 判断正负
      let numLabel = '', newNum = '';
      if (num < 0) {
          numLabel = '-';
          num = -num;
      } else {
          numLabel = addPlus == '+' ? '+' : '';
      }

      // 小数点后两位（四舍五入）
      let numFixed = num.toFixed(2);

      // 分隔整数部分和小数部分
      let num_int, num_dec;
      [num_int, num_dec] = numFixed.split('.');

      // 添加千分符号
      let count = 0;
      for (let i = num_int.length - 1; i >= 0; i--) {
          count++;
          if (count % 3 == 0 && i != 0) {
              newNum = ',' + num_int[i] + newNum;
          } else {
              newNum = num_int[i] + newNum;
          }
      }
      newNum = numLabel + newNum + '.' + num_dec;
      
      return txt + ':' + newNum;
    }
  }
};
</script>
