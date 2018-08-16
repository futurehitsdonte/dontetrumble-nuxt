<template>
  <v-app>
    <Header />
    <v-content>
        <v-container>
            <nuxt />
        </v-container>
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
