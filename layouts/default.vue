<template>
  <div class="pos-relative main-layout">
    <Background
      :class="{'layer-2': activeBurger}"
      :active="activeBurger"
      @action="toggleSidebar"
    ></Background>
    <Header
      class="pos-relative layer-1"
      :activeBurger="activeBurger"
      :navList="navList"
      @action="actionHeader"
      @actionBurger="actionBurger"
    ></Header>
    <Sidebar
      :class="{'layer-3': activeBurger}"
      :active="activeBurger"
      :navList="navList"
      @toggle="toggleSidebar"
    >
    </Sidebar>
    <nuxt class="pos-relative layer-1"></nuxt>
    <Footer class="layer-1"></Footer>
  </div>
</template>
<script>
  import Background from "~/components/util/Background";
  import Header from "~/components/layout/Header";
  import Footer from "~/components/layout/Footer";
  import Sidebar from "~/components/layout/Sidebar";

  export default {
    name: "default",
    components: {
      Background,
      Header,
      Footer,
      Sidebar,
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

