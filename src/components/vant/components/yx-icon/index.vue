<template>
  <i :class="['yx-icon', 'yx-icon-ump-' + name]" @click="$emit('click', $event)">
    <slot></slot>
  </i>
</template>
<!-- <i class="yx-icon-ump-minuscircle" /></i> -->
<script>
export default {
  name: 'yx-icon',

  props: {
    name: {
      type: String,
      default(){
        return 'man'
      }
    }
  }
};
</script>
