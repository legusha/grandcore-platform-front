<template>
  <div>
    <Header
      :navList="navList"
      @action="headerAction"
    ></Header>
    <Picture
      :filename="logo.name"
      :alt="logo.alt"
    ></Picture>
  </div>
</template>

<script>
  import Header from "~/components/Header";
  import Picture from "~/components/Picture";
  export default {
    name: "Main",
    components: {
      Header,
      Picture
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
        logo: {
          name: 'logo.svg',
          alt: 'Logo'
        }
      }
    },
    methods: {
      headerAction () {
      }
    }
  }
</script>

