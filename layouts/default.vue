<template>
  <div class="pos-relative main-layout">
    <Background
      v-if="active.background"
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
    <Modal
      :class="{'layer-3': active.modal}"
      :active="active.modal"
      @close="modalClose"
    >
      <template slot="header">123</template>
      <template slot="body">123</template>
    </Modal>
    <Sidebar
      :class="{'layer-2': active.sidebar}"
      :active="active.sidebar"
      :navList="navList"
      @toggle="toggleSidebar"
    >
    </Sidebar>
    <nuxt class="pos-relative layer-1">
    </nuxt>
    <Footer class="layer-1"></Footer>
  </div>
</template>
<script>
  import Background from "~/components/util/Background";
  import Footer from "~/components/layout/Footer";
  import Header from "~/components/layout/Header";
  import Modal from "~/components/util/Modal";
  import Sidebar from "~/components/layout/Sidebar";

  export default {
    name: "default",
    components: {
      Background,
      Footer,
      Header,
      Modal,
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
          sidebar: false,
          modal: false
        }
      }
    },
    methods: {
      toggleActive (propsList = []) {
        for (const prop in this.active) {
          if (propsList.includes(prop)) {
            this.active[prop] = !this.active[prop]
          }
        }
      },
      toggleActiveIgnore (ignore = []) {
        for (const prop in this.active) {
          if (ignore.includes(prop)) continue
          this.active[prop] = !this.active[prop]
        }
      },
      disableActiveAll () {
        for (const prop in this.active) {
          this.active[prop] = false
        }
      },
      actionHeader () {
        const active = ['background', 'modal']
        this.toggleActive(active)
      },
      toggleBurger () {
        const ignore = ['modal']
        this.toggleActiveIgnore(ignore)
      },
      toggleSidebar () {
        const ignore = ['modal']
        this.toggleActiveIgnore(ignore)
      },
      toggleBackground () {
        this.disableActiveAll()
      },
      modalClose () {
        const active = ['background', 'modal']
        this.toggleActive(active)
      }
    }
  }
</script>

