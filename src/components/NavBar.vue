<template>
  <v-toolbar :style="bar_colour" style="z-index: 5" dark>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat :href="pricing_url">Pricing</v-btn>
      <v-btn flat :href="about_url" target="_blank">About</v-btn>
      <v-btn flat :href="more_apis_url" target="_blank">More APIs</v-btn>
      <v-btn flat :href="docs_url">Documentation</v-btn>
      <v-btn flat :href="showcase_url">Showcase</v-btn>
    </v-toolbar-items>

    <!-- MOBILE VIEW -->
    <v-toolbar-items class="hidden-md-and-up">
      <v-menu lazy z-index="990" offset-y bottom left full-width attach>
        <v-icon slot="activator" size="30px" style="margin-right:30px"
          >menu</v-icon
        >
        <v-list>
          <v-list-tile :href="pricing_url" target="_blank">
            <v-list-tile-title style="color:#595959;"
              >Pricing</v-list-tile-title
            >
          </v-list-tile>
          <v-list-tile :href="about_url" target="_blank">
            <v-list-tile-title style="color:#595959;">About</v-list-tile-title>
          </v-list-tile>
          <v-list-tile :href="docs_url" target="_blank">
            <v-list-tile-title style="color:#595959;"
              >Documentation</v-list-tile-title
            >
          </v-list-tile>
          <v-list-tile :href="showcase_url">
            <v-list-tile-title style="color:#595959;"
              >Showcase</v-list-tile-title
            >
          </v-list-tile>
          <v-list-tile :href="more_apis_url" target="_blank">
            <v-list-tile-title style="color:#595959;"
              >More APIs</v-list-tile-title
            >
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      bar_colour: "background-color:" + process.env.VUE_APP_PRIMARY_COLOUR,
      docs_url: process.env.VUE_APP_DOCS_URL,
      about_url: process.env.VUE_APP_ABOUT_URL,
      pricing_url: process.env.VUE_APP_PRICING_URL,
      showcase_url: "/showcase",
      more_apis_url: process.env.VUE_APP_MORE_APIS_URL,
    };
  },
  name: "NavBar",
  props: {
    msg: String,
  },
};
</script>

<style scoped></style>
