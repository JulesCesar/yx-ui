<template>
  <span :class="['yx-tagmini', 'van-hairline--surround', { [`yx-tagmini--${type}`]: type, 'is-plain': plain, 'is-mark': mark }]">
    <slot></slot>
  </span>
</template>

<script>
const ALLOW_TYPE = ['danger', 'success', 'primary'];
// 'yx-tagmini',
export default {
  name: 'yx-tagmini',
  props: {
    tagtype: {
      type: String,
      validator: val => ~ALLOW_TYPE.indexOf(val)
    },
    mark: Boolean,
    plain: Boolean
  }
};
</script>
