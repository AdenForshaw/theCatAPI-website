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
            @click="itemSelected(item)"
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
          { title: 'VueJS: The code for this site', url: 'https://github.com/AdenForshaw/theCatAPI-website' },
          { title: 'VueJS: Example pages', url: 'https://github.com/AdenForshaw/theCatAPI-website/tree/master/public/example-pages' },
          { title: 'Vanilla JS: Load an Image', url: 'https://jsfiddle.net/adenF/njf4vts0/' },
          { title: 'Vanilla JS: Upload an Image', url: 'https://jsfiddle.net/adenF/6r98t5wj/' },
          { title: 'JQuery: Select between different Dog Breeds', url:"https://jsfiddle.net/adenF/g3s9yb12/1/"},
          { title: 'JQuery: Client side search for Dog Breeds', url:"https://jsfiddle.net/adenF/3g9j1h8d/"},
          { title: 'Node.JS: Discord Bot', url: 'https://github.com/AdenForshaw/theDogAPI-discord-bot' },
          { title: 'Node.JS: Discord Bot using Commando', url: 'https://github.com/AdenForshaw/theCatAPI-discord-commando-bot' },
        ]
      }
    },
    methods: {

      errorModal(title, error) {
        this.title = title;
        this.message = error;
        this.modalshow = !this.modalshow;
      },
      async itemSelected(item) {
        window.open(item.url, '_blank');
      }

    }
  }
</script>