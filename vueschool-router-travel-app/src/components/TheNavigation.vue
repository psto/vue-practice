<template>
  <div id="nav">
    <p class="logo">The Vue School Travel App</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">
          Home
        </router-link>
      </li>
      <li v-for="destination in destinations" 
        :key="destination.name" 
        class="links">
        <router-link :to="{
          name: 'DestinationDetails',
          params: { slug: destination.slug }
          }">{{ destination.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "../store.js"

  export default {
    data() {
      return {
        destinations: store.destinations
      }
    }
  }

</script>

<style scoped>
#nav {
  display: flex;
  justify-content: space-between;
}

#nav ul {
  display: flex;
}

#nav li {
  flex: auto ;
}

#nav a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #ab26ab;
}

.links {
  padding-right: 20px;
  list-style: none;
}

.links:hover {
  text-decoration: underline;
}

.logo {
  font-size: 20px;
  color: purple;
  font-weight: bold;
}
</style>
