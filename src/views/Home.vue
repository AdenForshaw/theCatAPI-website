<template>
  <v-container>
  <div id="main">
    <div id="title-text">
      <v-img :src="app_logo_url" height=128 contain></v-img>
      <h1>{{app_title}} - {{app_strapline}}</h1>
      
      <br>
      <p>{{app_description}}</p>
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
          href="#tab-breeds"
        ripple>
        Breeds
      </v-tab>
      <v-tab
          href="#tab-2"
        ripple>
        Images/Search
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
    </v-tabs>
  
    <v-tabs-items v-model="model">
      <v-tab-item value="tab-1">
        <Vote/>
      </v-tab-item>
      <v-tab-item value="tab-breeds">
        <Breeds/>
      </v-tab-item>
      <v-tab-item value="tab-2">
        <Search/>
      </v-tab-item>
      <v-tab-item value="tab-3">
        <Favourites/>
      </v-tab-item>
      <v-tab-item value="tab-4">
        <Upload/>
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
            <p>Just post your question, feedback, or code issue over in the Forum</p>
            <p>There's lots of code examples in the documentation</p>
    <v-btn color="blue" href="https://forum.thatapiguy.com/" target="_blank" dark>To the Forum</v-btn>
    <v-btn color="blue" :href="docs_url" target="_blank" dark>Read the Docs</v-btn>
          </v-container>
    </v-flex>
  </v-layout>

  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
          <v-container grid-list-sm fluid>
            <h3>This site was made with Vuejs & Vuetify</h3><h3><a href="https://github.com/adenforshaw/thecatapi-website" target="_blank">You can fork it on Github</a></h3>
          </v-container>
    </v-flex>
  </v-layout>
</div>
    <CodeExamples/>
    <div>

  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
          <v-container grid-list-sm fluid>
        <p><small><router-link to="/privacy">Privacy Policy</router-link> | <router-link to="/terms">Terms & Conditions</router-link> | <a :href="docs_url" target="_blank">Documentation</a></small></p>

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
  import Breeds from '../components/Sections/Breeds'
  import CodeExamples from '../components/CodeExamples'

  export default {
    components: {
      Vote,Search,Favourites,Upload,Breeds,CodeExamples
    },
    created()
    {
      console.log(process.env.VUE_APP_NAME)
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
        postman_url: process.env.VUE_APP_POSTMAN_URL,
        docs_url: process.env.VUE_APP_DOCS_URL,
        app_title: process.env.VUE_APP_TITLE,
        app_strapline: process.env.VUE_APP_STRAPLINE,
        app_description: process.env.VUE_APP_DESCRIPTION,
        app_logo_url: process.env.VUE_APP_LOGO_URL
      }
    }
  }
</script>

<style scoped>
#title-text {
  padding-bottom: 40px;
}

</style>