<template>

      <v-card>
        <br>
        <p> A <strong>sub_id</strong> is a custom value you can pass with every API request.</p>
        <p> You can use a different <strong>sub_id</strong> for each of your users, and show them only their Votes, Favourites and Uploads.</p>
        <p> You've given you a random sub_id for this Demo</p>



    <v-container>
        <v-layout row wrap align-center>
    <v-flex xs12 sm10 offset-sm1>
<v-card>
                    <v-toolbar style="background-color:rgba(131,156,171,0.8)"  dark>
                      <v-toolbar-title
            >'sub_id' : '{{app_sub_id}}'</v-toolbar-title>

                      <v-spacer></v-spacer>
                      <v-btn icon @click="resetSubID">
                        <v-icon size="35">refresh</v-icon>
                      </v-btn>
                    </v-toolbar>
                    <br>
                    <p>Reseting this will clear your Votes, Favourites & Uploads for this Demo</p>
                    <p>This is not saved in a cookie, so a new sub_id will be created when you next load the page.</p>
      </v-card>

          </v-flex>

      </v-layout>
    </v-container>

      </v-card>
</template>
<script>

    import {
        mapGetters
    } from 'vuex';

  export default {
    name: 'SubID',
    components: {
    },
    data() {
      return {
        sub_id: null,
        current_image: {url:"", placeholder:"https://picsum.photos/10/6"},//`https://api.thecatapi.com/v1/images/search?format=src`
      }
    },
    created() { 
       
    },
    computed: { 
      ...mapGetters({
          app_sub_id: 'TheCatAPI/subID',
      })
    },
    async mounted() {
        this.sub_id = this.getSubID();
    },
    methods:{
      async getSubID()
      {
        this.sub_id =  this.$store.dispatch('TheCatAPI/getSubID');
      },
      async resetSubID(){
        await this.$store.dispatch('TheCatAPI/setSubID', 'demo-'+((1<<24)*Math.random()|0).toString(16))
      },
    }
  }
  </script>
  <style>

  </style>