<template>
  <div class="dashboard">
    <h1 class="title grey--text text-center">Dashboard</h1>

    <v-container class="my-5">
      <v-card flat class="pa-5">
        <v-layout wrap>
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div class="grey--text">Create a new website</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div class="grey--text">John Rambo</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due By</div>
            <div class="grey--text">1st Jan 2020</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="caption grey--text">Status</div>
            <div class="grey--text">Finished</div>
          </v-flex>

          <v-flex xs12 md6>
            <div class="grey--text">Write copy</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="grey--text">Terminator T-1000</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="grey--text">29th Feb 2020</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="grey--text">Ongoing</div>
          </v-flex>
        </v-layout>
      </v-card>

    </v-container>
  </div>
</template>
<script>

export default {
  name: 'Dashboard',
  components: {

  }
}
</script>
