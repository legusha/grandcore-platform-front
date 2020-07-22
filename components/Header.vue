<template>
  <section id="header" class="container-fluid p-0">
    <div class="container">
      <div class="header-desktop d-flex justify-between align-center">
        <div class="header-nav-link">
          <nuxt-link
            v-for="(navItem, i) in navList"
            :key="i"
            :to="navItem.link"
            class="nav-link d-inline"
          >
            {{navItem.title.toUpperCase()}}
          </nuxt-link>
        </div>
        <div class="header-action">
          <button
            type="button"
            class="btn btn-outline-light"
            @click="$emit('action')"
          >
            Войти</button>
        </div>
      </div>
      <div class="header-mobile d-flex justify-between align-center">
        <div class="header-logo">
          <img src="@images/logo-light.svg" alt="Logo">
        </div>
        <div class="header-action-user">
          <img
            src="@icons/user.svg"
            alt="Avatar"
            @click="$emit('action')"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Header",
    props: {
      navList: {
        type: Array,
        required: true,
        title: {
          type: String
        },
        link: {
          type: String
        }
      }
    }
  }
</script>
