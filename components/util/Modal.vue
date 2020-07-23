<template>
  <div
    class="modal"
    :class="{'modal-active': active}"
  >
    <div class="modal-content">
      <div
        class="modal-header text-white d-flex align-center justify-between"
        :class="chosenColor"
      >
        <slot name="header"></slot>
        <span
          class="close"
          @click="$emit('close')"
        >
          &times;
        </span>
      </div>
      <div class="modal-body">
        <slot name="body"></slot>
      </div>
      <div
        class="modal-footer text-white"
        :class="chosenColor"
      >
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Modal",
    props: {
      active: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: 'primary'
      }
    },
    data () {
      return {
        colors: ['success', 'primary'],
        applyColor: true
      }
    },
    computed: {
      chosenColor () {
        const classes = {}
        const color = `bg-${this.color}`
        classes[color] = this.applyColor
        return classes
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/utilities/variables";

  .modal {
    display: none;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 100%;
    margin: auto;
    overflow: auto;
  }
  .modal-content {
    position: relative;
    background-color: $modal-content-bg;
    margin: auto;
    padding: 0;
    border: 1px solid $modal-border-color;
    width: 80%;
    box-shadow: $modal-shadow;
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s
  }
  @-webkit-keyframes animatetop {
    from {top:-300px; opacity:0}
    to {top:0; opacity:1}
  }
  @keyframes animatetop {
    from {top:-300px; opacity:0}
    to {top:0; opacity:1}
  }
  .close {
    font-size: 28px;
    font-weight: bold;
  }
  .close:hover,
  .close:focus {
    color: $white-extra;
    text-decoration: none;
    cursor: pointer;
  }
  .modal-header {
    padding: 2px 16px;
  }
  .modal-body {
    padding: 2px 16px;
  }
  .modal-footer {
    padding: 2px 16px;
  }
  .modal-active {
    display: block;
    bottom: initial;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
