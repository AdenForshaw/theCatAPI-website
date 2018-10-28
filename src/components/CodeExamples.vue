<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="indigo" dark>

          <v-toolbar-title>Code Examples</v-toolbar-title>

          <v-spacer></v-spacer>

        </v-toolbar>
        <v-list>
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            avatar
            @click="itemSelected"
          >

            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>

          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: '-> Github: Discord Bot Node.JS', url: 'https://github.com/AdenForshaw/theDogAPI-discord-bot' },
          { title: '-> Github: Discord Bot using Commando', url: 'https://github.com/AdenForshaw/theCatAPI-discord-commando-bot' }
        ]
      }
    },
    methods: {

      errorModal(title, error) {
        this.title = title;
        this.message = error;
        this.modalshow = !this.modalshow;
      },
      async itemSelected() {

      }

    }
  }
</script>