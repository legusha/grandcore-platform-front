<template>
  <div>
    <Header
      :navList="navList"
      :activeBurger="activeBurger"
      @action="actionHeader"
      @actionBurger="actionBurger"
    ></Header>
  </div>
</template>

<script>
  import Header from "~/components/Header";
  export default {
    name: "Main",
    components: {
      Header
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
      }
    }
  }
</script>

