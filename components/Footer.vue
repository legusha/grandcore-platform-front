<template>
  <footer class="container-fluid p-0 pos-fixed">
    <div class="container d-flex footer-licence">
      <img src="@icons/cc.svg" alt="cc icon">
      <p class="text-white ml-4">2019 - {{new Date().getFullYear()}} MIT</p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>

</style>
