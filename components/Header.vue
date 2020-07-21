<template>
  <section id="header" class="container-fluid p-0">
    <div class="container d-flex justify-between align-center">
      <div>
        <nuxt-link
          v-for="(item, i) in navList"
          :key="i"
          :to="item.link"
          class="nav-link d-inline"
        >
          {{item.title.toUpperCase()}}
        </nuxt-link>
      </div>
      <button
        type="button"
        class="btn"
        @click="$emit('action')"
      >Войти</button>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Header",
    props: {
      navList: {
        type: Array,
        required: true
      }
    }
  }
</script>
