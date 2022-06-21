<template>
  <div class="panel blcker">
    <h1>The Showcase - <code>Coming Soon!</code></h1>
    <p class="large-text">
      To enter your project into our showcase, please enter your details below.
      😻
    </p>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLScvWa3ecoa18kGzF3j_nALkrmaFMUBX6Nm14HyJM-RK3aoRSw/viewform?embedded=true"
      width="100%"
      height="3250"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      class="iframe"
      >Loading…</iframe
    >
  </div>
</template>

<script>
export default {
  name: "Gallery",
  mounted() {},
};
</script>

<style scoped>
.blcker {
  margin-left: 100px;
  padding-left: 40px;
  width: 80%;
  text-align: left;
}
.large-text {
  font-size: 1.2em;
}
.center {
  float: right;
}
.iframe {
  background-color: #42b7b947;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
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
