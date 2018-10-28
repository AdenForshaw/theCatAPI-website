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

        <div id="thankyou_text">
            I'm really looking forward to seeing what you make with the API. If there's anything you need, or if you've got any feedback then please don't hesitate to email directly - Aden Forshaw (Aden@ThatAPIguy.com)
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