<template>
  <div id="sidebar" class="pos-absolute">
    <div
      class="sidebar-list"
      :class="{'active-sidebar': active}"
    >
      <nav>
        <nuxt-link
          v-for="(navItem, i) in navList"
          :key="i"
          :to="navItem.link"
          @click.native="$emit('toggle')"
          class="d-inline"
        >
          {{navItem.title.toUpperCase()}}
        </nuxt-link>
      </nav>
    </div>
    <div
      class="sidebar-bg"
      @click="$emit('toggle')"
      :class="{'active-sidebar': active}"
    ></div>
  </div>
</template>

<script>
  export default {
    name: "Sidebar",
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
      },
      active: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/utilities/variables";

  #sidebar {
    width: 100%;
    height: 100vh;
    top: 0;
  }
  .sidebar-list {
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: -300px;
    background-color: $header-bg;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
  }
  .sidebar-list a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: $white;
    display: block;
    transition: 0.3s;
  }
  .sidebar-bg {
    display: none;
    width: 100%;
    height: 100%;
    position: absolute;
    background: $sidebar-bg;
    opacity: 0;
  }
  .sidebar-bg.active-sidebar {
    opacity: 1;
  }
  .sidebar-list.active-sidebar {
    left: 0;
  }
</style>
