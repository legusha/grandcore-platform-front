<template>
  <img
    :src="image"
    :alt="alt"
  >
</template>

<script>
  export default {
    name: "Picture",
    props: {
      filename: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        default: 'Image'
      }
    },
    computed: {
      image () {
        return require(`~/assets/images/${this.filename}`)
      }
    }
  }
</script>

<style scoped>

</style>
