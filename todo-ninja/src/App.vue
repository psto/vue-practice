<template>
  <v-app id="main" :style="{background: $vuetify.theme.themes[theme].background}">
    <Navbar />
    <v-content class="mx-4 mb-4 mt-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data: () => ({
    //
  }),
  computed:{
    theme(){
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  }
};
</script>
