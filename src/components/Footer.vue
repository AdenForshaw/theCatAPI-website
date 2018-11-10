<template>
  <v-footer
    dark
    height="auto"
    fixed
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-actions class="grey darken-3 justify-center">
        <p><strong>Created by Aden Forshaw - <a href="https://thatapiguy.com">ThatAPIGuy.com</a></strong></p> 
      </v-card-actions>
      
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  },
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ]
    })
  }
</script>