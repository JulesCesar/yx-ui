<template>
  <span :class="['yx-tagmini', 'van-hairline--surround', { [`yx-tagmini--${tagtype}`]: tagtype, 'is-plain': plain, 'is-mark': mark }]">
    <slot></slot>
  </span>
</template>

<script>
const ALLOW_TYPE = ['danger', 'success', 'primary'];
// import YxTagmini from './yxtagmini';
export default {
  name: 'yx-tagmini',
  props: {
    tagtype: { 
      default:'d',
      type: String,
    },
    // type: {
    //   title: String,
    //   default:'哈哈',
    //   type: String,
    //   validator: val => ~ALLOW_TYPE.indexOf(val)
    // },
    mark: Boolean,
    plain: Boolean
  }
};
</script>


