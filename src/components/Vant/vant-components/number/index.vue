<template>
    <span v-if="num" class="van-number">{{num_thd}}</span>
</template>

<script>
export default {
  name: 'van-number',
  props: {
    num: String
  },
  computed: {
    num_thd() {
      return this.thousands(this.num);
    }
  },
  methods: {
    thousands(num, addPlus) {
      num = parseFloat(num);
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
      
      return newNum;
    }
  }
}
</script>
