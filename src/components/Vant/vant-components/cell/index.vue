<template>
  <div :class="['van-cell', 'van-hairline', { 'van-cell--required': required }]" @click="onClick">
    <div class="van-cell__title" v-if="$slots.title || title">
      <slot name="icon">
        <yx-icon v-if="icon" :name="minuscircle" />
        <yx-icon v-if="icon" :name="minuscircle1" />
        <yx-icon v-if="icon" :name="minuscircle1" />
      </slot>
      <slot name="title">
        <span class="van-cell__text" v-text="title" />
        <span class="van-cell__label" v-if="label" v-text="label" />
      </slot>
    </div>
    <div
      class="van-cell__value"
      v-if="value || $slots.default"
      :class="{
        'van-cell__value--link': isLink,
        'van-cell__value--alone': !$slots.title && !title && !label
      }"
    >
      <slot>
        <span v-text="value" />
      </slot>
    </div>
    <slot name="right-icon">
      <!-- 已显示 -->
      <yx-icon :name="yxicon" class="van-cell__right-icon van-cell__colorred"  />
      <!-- <yx-icon v-show="name.type=='已显示卡片'" name="aliwangwang" class="van-cell__right-icon van-cell__colorred" v-if="isLink" /> -->
      <!-- <yx-icon v-show="name.type=='可显示卡片'" name="pay-circle1" class="van-cell__right-icon van-cell__colorred" v-if="isLink" />
      <yx-icon v-show="name.type=='未激活卡片'" name="aliwangwang" class="van-cell__right-icon van-cell__colorred" v-if="isLink" /> -->
      <!-- 可显示 -->
       <!-- <yx-icon name="minuscircle" class="van-cell__right-icon van-cell__colorblue" v-if="isLink" />  -->
      <!-- 未激活 -->
      <!-- <yx-icon name="infocirlce" class="van-cell__right-icon" v-if="isLink" /> -->
      
    </slot>
    <slot name="extra" />
  </div>
</template>

<script>
import Icon from '../icon';
import RouterLink from '../mixins/router-link';

export default {
  name: 'van-cell',

  mixins: [RouterLink],

  components: {
    [Icon.name]: Icon
  },

  props: {
    yxicon: {
      type:String,
      default(){
        return 'geren'
      }
    },
    icon: String,
    title: String,
    label: String,
    isLink: Boolean,
    required: Boolean,
    value: [String, Number]
  },

  data(){
    return {

    }
  },

  methods: {
    onClick() {
      this.$emit('click');
      this.routerLink();
    }
  },
  computed:{
    iconNameAdd(){
      switch(this.icon){
         
        default :
          return 'minuscircle'
        break
      }
    }
  }
};
</script>
