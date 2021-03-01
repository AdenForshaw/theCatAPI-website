<template>
  <v-footer dark height="auto">
    <v-layout>
      <v-container>
        <v-layout row wrap>
          <v-flex sm3>
            <p class="text-xs-left">
              <a
                class="text-link"
                href="https://thatapicompany.com/"
                target="_blank"
                >About Us</a>
            </p>
            <p class="text-xs-left">
              <router-link class="text-link" to="/terms"
                >Terms & Conditions</router-link
              >
            </p>
            <p class="text-xs-left">
              <router-link class="text-link" to="/privacy"
                >Privacy Policy</router-link
              >
            </p>
          </v-flex>
          <v-flex sm3>
            <!--p class="text-xs-left">
              <a class="text-link" href="#" target="_blank"
                >The API Platform</a
              >
            </p-->
            <p class="text-xs-left">
              <a class="text-link" :href="forum_url" target="_blank">Forum</a>
            </p>
            <p class="text-xs-left">
              <a
                class="text-link"
                href="https://github.com/adenforshaw/thecatapi-website"
                target="_blank"
                >Github</a
              >
            </p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String,
  },
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram",
    ],
    forum_url: process.env.VUE_APP_FORUM_URL,
    roadmap_url: process.env.VUE_APP_ROADMAP_URL,
  }),
};
</script>
<style scoped>
.text-link {
  color: white;
  text-decoration: none;
}
</style>