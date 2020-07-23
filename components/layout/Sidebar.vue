<template>
  <div id="sidebar" class="pos-absolute">
    <nav
      class="sidebar-list"
      :class="{'active-sidebar': active}"
    >
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
