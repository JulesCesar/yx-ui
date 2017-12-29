<template>
  <i :class="['yx-icon', 'yx-icon-ump-' + name]" @click="$emit('click', $event)">
    <slot></slot>
  </i>
</template>

<script>
export default {
  name: 'yx-icon',

  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>
