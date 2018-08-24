<template>
  <v-app>
    <Header />
    <v-content>
            <nuxt />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
  import Header from '@/components/Header/Header'
  import Footer from '@/components/Footer/Footer'
  export default {
    components: {
      Header,
      Footer
    },
    data() {
      return {
        fixed: true
      }
    }
  }
</script>
