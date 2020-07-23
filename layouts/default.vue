<template>
  <div class="pos-relative main-layout">
    <Background
      :class="{'layer-2': active.background}"
      :active="active.background"
      @action="toggleBackground"
    ></Background>
    <Header
      class="pos-relative layer-1"
      :activeBurger="active.burger"
      :navList="navList"
      @action="actionHeader"
      @actionBurger="toggleBurger"
    ></Header>
    <Sidebar
      :class="{'layer-2': active.sidebar}"
      :active="active.sidebar"
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
        active: {
          background: false,
          burger: false,
          sidebar: false
        }
      }
    },
    methods: {
      actionHeader () {
      },
      toggleActive (prop = 'burger') {
        this.active[prop] = !this.active[prop]
      },
      toggleActiveAll () {
        for (let prop in this.active) {
          this.active[prop] = !this.active[prop]
        }
      },
      toggleBurger () {
        this.toggleActiveAll()
      },
      toggleBackground () {
        this.toggleActiveAll()
      },
      toggleSidebar () {
        this.toggleActiveAll()
      }
    }
  }
</script>

