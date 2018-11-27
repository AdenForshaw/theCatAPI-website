<template>
  <v-container
    id="grid"
    fluid
    grid-list-sm
    tag="section"
  >
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">TheCatAPI.com: Documentation</h3>
          </div>
        </v-card-title>

        <div id="thankyou_text">
            The Interactive documentation can be found at <a href="https://docs.thecatapi.com/">https://Docs.TheCatAPI.com</a>
         </div>
        <div id="thankyou_text">
            Or you can use the <a href="https://documenter.getpostman.com/view/5578104/RWgqUxxh">Postman Collection</a>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
  
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
