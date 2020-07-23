<template>
  <div class="pos-relative">
    <Header
      class="pos-relative layer-1"
      :navList="navList"
      :activeBurger="activeBurger"
      @action="actionHeader"
      @actionBurger="actionBurger"
    ></Header>
    <Sidebar
      :class="{'layer-2': activeBurger}"
      :navList="navList"
      :active="activeBurger"
      @toggle="toggleSidebar"
    >
    </Sidebar>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "~/components/Header";
  import Sidebar from "~/components/Sidebar";
  import Footer from "~/components/Footer";
  export default {
    name: "Main",
    components: {
      Sidebar,
      Header,
      Footer
    },
    data () {
      return {
        navList: [
          {
            title: 'О ФОНДЕ',
            link: ''
          },
          {
            title: 'ПОЖЕРТВОВАНИЯ',
            link: ''
          },
          {
            title: 'УЧАСТНИКИ',
            link: ''
          },
          {
            title: 'НОВОСТИ',
            link: ''
          },
        ],
        activeBurger: false
      }
    },
    methods: {
      actionHeader () {
      },
      actionBurger () {
        this.activeBurger = !this.activeBurger
      },
      toggleSidebar () {
        this.activeBurger = !this.activeBurger
      }
    }
  }
</script>

