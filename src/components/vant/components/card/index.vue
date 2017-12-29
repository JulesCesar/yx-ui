<template>
  <div :class="['van-card']">
    <div class="van-card__header" v-if="title">
      <slot name="title">
        <span v-if="title" class="van-card__header__title">{{ title }}</span>
        <div class="van-card__header__right">
          <slot name="header_right"></slot>
        </div>
        <div class="van-card__header__botomtime">
          <slot name="header_botomtime"></slot>
        </div>
      </slot>
    </div> 
    <div class="van-card__content">
      <slot name="content_time"></slot>
      <slot name="content_tag"></slot>
      <slot name="content_cell"></slot>
    </div>
    <div class="van-card__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'van-card',

  props: {
    title: String
  }
};
</script>
