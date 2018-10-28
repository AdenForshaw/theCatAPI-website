<template>
  <div id="main">
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
    <SignupForm/>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
  import SignupForm from '../components/SignupForm'

  export default {
    components: {
      SignupForm
    }
  }
</script>

<style scoped>
#title-text {
  padding-bottom: 40px;
}
</style>