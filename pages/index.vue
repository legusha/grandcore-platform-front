<template>
  <div>
    <Header
      :navList="navList"
      @action="headerAction"
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
        ]
      }
    },
    methods: {
      headerAction () {
        console.log('123')
      }
    }
  }
</script>

