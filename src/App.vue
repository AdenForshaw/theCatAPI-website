<template>
<v-app style="
    background: #FFF;
  ">
  <div id="app">
    <NavBar />
    <div id='content'>
    <router-view/>
    </div>
    <Footer />
  </div>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#content {
  padding-top: 40px;
  padding-bottom: 120px;
}
</style>