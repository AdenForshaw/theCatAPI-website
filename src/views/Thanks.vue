<template>
  <v-container
    id="grid"
    fluid
    grid-list-sm
    tag="section"
  >
    <v-flex xs12 sm6 offset-sm3>
    <v-layout row wrap>
      <v-flex tag="h1" class="headline">Awesome! You've been sent an email with your API Key</v-flex>
        <br>
        <div id="thankyou_text">
            I'm really looking forward to seeing what you make with the API.
            If there's anything you need then please don't hesitate to email me directly
            <p><small>Aden@ThatAPIguy.com</small></p>
    <v-btn color="blue" :href="docs_url" target="_blank" dark>Open Documentation</v-btn>
        </div>
    </v-layout>
    </v-flex>
    <CodeExamples/>
  </v-container>
</template>

<script>
  import CodeExamples from '../components/CodeExamples'

  export default {
    components: {
      CodeExamples
    },
    data() {
      return {
        docs_url: process.env.VUE_APP_DOCS_URL,
      }
    },
  }
</script>

<style scoped>
#thankyou_text {
  font-size: 16pt;
  padding-bottom: 40px;
}
</style>