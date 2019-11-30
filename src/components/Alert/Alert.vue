<template>
  <div :class="['s-alert','s-alert-'+type]" v-if="!closed">
    <slot name="icon"></slot>
    <slot></slot>
    <div class="s-alert-close" v-if="closable" @click="close">×</div>
  </div>
</template>

<script>
export default {
  name: 'SAlert',
  props: {
    type: {
      type: String,
      default: 'info'
    },
    closable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      closed: false
    };
  },
  methods: {
    close() {
      this.closed = true;
      this.$emit('on-change');
    }
  }
};
</script>
