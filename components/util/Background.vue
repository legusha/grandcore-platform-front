<template>
  <div
    class="bg-dark"
    @click="$emit('action')"
    :class="{'bg-dark-active': active}"
  ></div>
</template>

<script>
  export default {
    name: "Background",
    props: {
      active: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/utilities/variables";

  .bg-dark {
    width: 100%;
    height: 100%;
    position: absolute;
    background: $sidebar-bg;
    opacity: 0;
  }
  .bg-dark.bg-dark-active {
    opacity: 1;
  }
</style>
