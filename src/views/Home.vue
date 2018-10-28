<template>
  <v-container>
  <div id="main">
    <div z-index="800" id="title-text">
      <h1>Cat pictures as a Service! Everyday is Caturday.</h1>
      <br>
      <p>A public service API for all your Kitty needs - Already used by <strong>thousands of developers.</strong></p>
      <v-btn color="blue" large dark to="/signup">Signup for Free</v-btn>
      <p><strong>Get your own API key & make your own App!</strong></p>
    </div>

    <div id="tab-title-text">
      <h2>Take it for a test drive</h2>
    </div>
  <v-layout>
    <v-flex xs12>
     <v-tabs
      color="black"
      dark
      slider-color="white"
      centered
        v-model="model"
    >
      <v-tab 
          href="#tab-1"
          ripple>
        Vote
      </v-tab>
      <v-tab
          href="#tab-2"
        ripple>
        Search
      </v-tab>
      <v-tab
          href="#tab-3"
        ripple>
        Favourites
      </v-tab>
      <v-tab
          href="#tab-4"
        ripple>
        Upload
      </v-tab>
      <v-tab
          href="#tab-5"
        ripple>
        sub_id
      </v-tab>
    </v-tabs>
  
    <v-tabs-items v-model="model">
      <v-tab-item id="tab-1">
        <Vote/>
      </v-tab-item>
      <v-tab-item id="tab-2">
        <Search/>
      </v-tab-item>
      <v-tab-item id="tab-3">
        <Favourites/>
      </v-tab-item>
      <v-tab-item id="tab-4">
        <Upload/>
      </v-tab-item>
      <v-tab-item id="tab-5">
        <SubID/>
      </v-tab-item>
    </v-tabs-items>

    </v-flex>
  </v-layout>
  </div>

<div class="footer-controls">
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
          <v-container grid-list-sm fluid>
            <h3>Found a bug, or need help using it?</h3>
            <p>Just post your question, feedback, or code issue over in the Forum and i'll reply to you as soon as possible.</p>
    <v-btn color="blue" href="https://forum.thatapiguy.com/" target="_blank" dark>To the Forum</v-btn>
          </v-container>
    </v-flex>
  </v-layout>

  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
          <v-container grid-list-sm fluid>
            <h3>This site was made with Vuejs & Vuetify</h3><h3><a href="https://forum.thatapiguy.com/" target="_blank">You can fork it on Github</a></h3>
          </v-container>
    </v-flex>
  </v-layout>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
          <v-container grid-list-sm fluid>
        <p><small><router-link to="/privacy">Privacy Policy</router-link> | <router-link to="/terms">Terms & Conditions</router-link> | <a href="https://documenter.getpostman.com/view/5578104/RWgqUxxh" target="_blank">Documentation</a></small></p>

          </v-container>
    </v-flex>
  </v-layout>
</div>

  </v-container>
</template>

<script>
  import Vote from '../components/Sections/Vote'
  import Search from '../components/Sections/Search'
  import Favourites from '../components/Sections/Favourites'
  import Upload from '../components/Sections/Upload'
  import SubID from '../components/Sections/SubID'

  export default {
    components: {
      Vote,Search,Favourites,Upload,SubID
    },
    created()
    {
      // If there's an API Key in the query string (api_key) then use it in the App instead of DEMO-API-KEY
      if (this.$route.query.api_key)
      {
        // This lets people use the API to test with without having to downlaod and install the VueJS app
        this.$store.dispatch('TheCatAPI/setAPIKey',this.$route.query.api_key )
      }
      
      // If there's an sub_id in the query string then use it in the App instead the randomly created one
      if (this.$route.query.sub_id)
      {
        // using the same sub_id allows users to use the DEMO-API-KEY and share the same data
        this.$store.dispatch('TheCatAPI/setSubID',this.$route.query.sub_id )
      }
    },
    data(){
      return {
        model: 'tab-1',
      }
    }
  }
</script>

<style scoped>
#title-text {
  padding-bottom: 40px;
}

</style>