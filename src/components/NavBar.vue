<template>


  <v-toolbar style="background-color:rgb(210, 69, 21);" dark>


    <v-toolbar-title>TheCatAPI.com : Beta</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/">Home</v-btn>
      <v-btn flat href="https://thatapiguy.com/the-cat-api/" target="_blank">About</v-btn>
      <v-btn flat href="https://forum.thatapiguy.com/" target="_blank">Forum</v-btn>
      <v-btn flat href="https://documenter.getpostman.com/view/5578104/RWgqUxxh" target="_blank">Docs</v-btn>
      <v-btn flat href="https://trello.com/b/ddUlP8lJ/that-api-guy-public" target="_blank">Roadmap</v-btn>
      <v-btn flat to="/signup">Signup</v-btn>
    </v-toolbar-items>


    <!-- MOBILE VIEW -->
    <v-toolbar-items class="hidden-md-and-up" >
       <v-menu lazy z-index="990" offset-y bottom left full-width attach>
            <v-icon slot="activator" size="30px" style="margin-right:30px">menu</v-icon>
            <v-list>
              <v-list-tile href="https://thatapiguy.com/the-cat-api/" target="_blank">
                <v-list-tile-title style="color:#595959;">About</v-list-tile-title>
              </v-list-tile>
              <v-list-tile href="https://documenter.getpostman.com/view/5578104/RWgqUxxh" target="_blank">
                <v-list-tile-title style="color:#595959;">Documentation</v-list-tile-title>
              </v-list-tile>
              <v-list-tile href="https://trello.com/b/ddUlP8lJ/that-api-guy-public" target="_blank">
                <v-list-tile-title style="color:#595959;">Roadmap</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  },
}
</script>

<style scoped>
</style>