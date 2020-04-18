<template>
  <nav>
    <v-app-bar fixed app class="grey lighten-4">
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase grey--text">
        <router-link to="/" id="logolink">
          <span class="font-weight-light">Todo</span>
          <span class="font-weight-bold">Ninja</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn outlined rounded color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      enable-resize-watcher 
      app
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="link in links" :key="link.text" :to="link.route">
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
        { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
        { icon: 'mdi-account-group', text: 'Team', route: '/team' },
        { icon: 'mdi-bank-transfer', text: 'Transfers', route: '/transfers' },
      ]
    }
  }
}
</script>

<style>
#logolink {
  text-decoration: none;
}
</style>
