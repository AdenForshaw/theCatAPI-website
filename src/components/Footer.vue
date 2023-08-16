<template>
  <v-footer class="footer" dark height="auto">
    <v-layout>
      <v-container>
        <v-layout row wrap>
          <v-flex sm3>
            <p class="text-xs-left">
              <strong>Details</strong>
            </p>
            <p class="text-xs-left">
              <a
                class="text-link"
                href="https://thatapicompany.com/"
                target="_blank"
                >About Us</a
              >
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
            <p class="text-xs-left">
              <strong>Community and Support</strong>
            </p>
            <p class="text-xs-left">
              <a class="text-link" href="forum_url" target="_blank">Forum</a>
            </p>
            <p class="text-xs-left">
              <a
                class="text-link"
                href="https://github.com/adenforshaw/thecatapi-website"
                target="_blank"
                >Github</a
              >
            </p>
            <p class="text-xs-left">
              <a
                class="text-link"
                href="https://discord.gg/SRaRFcQ7Yw"
                target="_blank"
              >
                Discord</a
              >
            </p>
          </v-flex>
          <v-flex sm3>
            <p class="text-xs-left">
              <strong>Our other APIs</strong>
            </p>
            <p class="text-xs-left">
              <a class="text-link" href="https://theauthapi.com" target="_blank"
                >The Auth API</a
              >
            </p>
            <p class="text-xs-left">
              <a
                class="text-link"
                href="https://www.thereportapi.com/"
                target="_blank"
                >The Report API</a
              >
            </p>
            <p class="text-xs-left">
              <a
                class="text-link"
                href="https://www.theanalyticsapi.com/"
                target="_blank"
                >The Analytics API</a
              >
            </p>
            <p class="text-xs-left">
              <a
                class="text-link"
                href="https://www.theimageapi.com/"
                target="_blank"
                >The Image API</a
              >
            </p>
            <p class="text-xs-left">
              <a
                  class="text-link"
                  :href="more_apis_url"
                  target="_blank"
              >More APIs</a
              >
            </p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
    <v-layout class="discord" height="auto">
      <v-container>
        <v-layout wrap align-content-center justify-center row>
          <v-flex shrink>
            <a href="https://discord.gg/SRaRFcQ7Yw" target="_blank">
              <v-img
                width="124"
                height="34"
                src="https://i0.wp.com/theauthapi.com/wp-content/uploads/2022/03/Discord-LogoWordmark-White-1-2.png?fit=124%2C34&amp;ssl=1"
                class="attachment-full size-full"
                alt="Discord Logo"
                loading="lazy"
              />
            </a>
          </v-flex>
          <v-flex>
            <a
              href="https://discord.gg/SRaRFcQ7Yw"
              target="_blank"
              rel="nofollow"
              >Join our Discord community to share your API project!</a
            >
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
    more_apis_url: process.env.VUE_APP_MORE_APIS_URL,
  }),
};
</script>
<style scoped>
.text-link {
  color: white;
  text-decoration: none;
}
.footer {
  margin: 1em 0 2em 0;
}
.discord {
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 0;
  margin: 0;
  background-color: #362deb;
  color: #fff;
}
.discord .container {
  max-width: 500px;
  color: #fff;
  padding: 2px 0;
}
.discord .container .layout {
  align-items: center;
}
.discord .container a {
  color: #fff;
}
</style>
