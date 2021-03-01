<template>
  <v-container fluid class="pa-0">
    <v-layout row wrap>
      <v-container>
        <div id="main">
          <v-layout row wrap>
            <v-flex xs12 sm7 class="title-text">
              <v-layout row wrap class="title-text">
                <v-flex xs12 class="text-xs-left"
                  ><h1 class="title-text">
                    {{ app_title }} -
                    <span class="font-weight-medium">
                      {{ app_strapline }}
                    </span>
                  </h1></v-flex
                >
                <v-flex xs12 class="text-xs-left"
                  ><h2 class="title-text" :style="text_colour">
                    {{ app_substrapline }}
                  </h2></v-flex
                >
                <v-flex xs8
                  ><p class="text-xs-left mb-0">
                    {{ app_description }}
                    <a :href="app_pricing_url"
                      >Get your license now.</a
                    >
                  </p></v-flex
                >
              </v-layout>
              <v-layout row>
                <v-flex class="tech-stack-logo px-3">
                  <v-img
                    :src="require(`../assets/images/react.png`)"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex class="tech-stack-logo px-3">
                  <v-img
                    :src="require(`../assets/images/jquery.png`)"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex class="tech-stack-logo px-3">
                  <v-img
                    :src="require(`../assets/images/vue.png`)"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex class="tech-stack-logo px-3">
                  <v-img
                    :src="require(`../assets/images/node.png`)"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex class="tech-stack-logo px-3">
                  <v-img
                    :src="require(`../assets/images/angular.png`)"
                    contain
                  ></v-img>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs12 sm5 class="title-text">
              <v-layout>
                <v-flex xs12>
                  <v-tabs
                    color="black"
                    dark
                    slider-color="white"
                    centered
                    v-model="model"
                  >
                    <v-tab class="caption" href="#tab-1" ripple> Vote </v-tab>
                    <v-tab class="caption" href="#tab-breeds" ripple>
                      Breeds
                    </v-tab>
                    <v-tab class="caption" href="#tab-2" ripple>
                      Images/Search
                    </v-tab>
                    <v-tab class="caption" href="#tab-3" ripple>
                      Favourites
                    </v-tab>
                    <v-tab class="caption" href="#tab-4" ripple> Upload </v-tab>
                  </v-tabs>

                  <v-tabs-items v-model="model">
                    <v-tab-item value="tab-1">
                      <Vote />
                    </v-tab-item>
                    <v-tab-item value="tab-breeds">
                      <Breeds />
                    </v-tab-item>
                    <v-tab-item value="tab-2">
                      <Search />
                    </v-tab-item>
                    <v-tab-item value="tab-3">
                      <Favourites />
                    </v-tab-item>
                    <v-tab-item value="tab-4">
                      <Upload />
                    </v-tab-item>
                  </v-tabs-items>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </div>

        <div class="footer-controls">
          <v-layout>
            <v-flex xs12>
              <label
                :style="bar_colour"
                class="font-italic app-infoline white--text px-2 py-2"
              >
                {{ app_title }} {{ app_infoline }}
              </label>
            </v-flex>
          </v-layout>
        </div>
      </v-container>
    </v-layout>
    <pricing />
  </v-container>
</template>

<script>
import Vote from "../components/Sections/Vote";
import Search from "../components/Sections/Search";
import Favourites from "../components/Sections/Favourites";
import Upload from "../components/Sections/Upload";
import Breeds from "../components/Sections/Breeds";
import CodeExamples from "../components/CodeExamples";
import Pricing from "../components/Sections/Pricing";

export default {
  components: {
    Vote,
    Search,
    Favourites,
    Upload,
    Breeds,
    CodeExamples,
    Pricing,
  },
  created() {
    console.log(process.env.VUE_APP_NAME);
    // If there's an API Key in the query string (api_key) then use it in the App instead of DEMO-API-KEY
    if (this.$route.query.api_key) {
      // This lets people use the API to test with without having to downlaod and install the VueJS app
      this.$store.dispatch("TheCatAPI/setAPIKey", this.$route.query.api_key);
    }

    // If there's an sub_id in the query string then use it in the App instead the randomly created one
    if (this.$route.query.sub_id) {
      // using the same sub_id allows users to use the DEMO-API-KEY and share the same data
      this.$store.dispatch("TheCatAPI/setSubID", this.$route.query.sub_id);
    }
  },
  data() {
    return {
      model: "tab-1",
      postman_url: process.env.VUE_APP_POSTMAN_URL,
      docs_url: process.env.VUE_APP_DOCS_URL,
      app_title: process.env.VUE_APP_TITLE,
      app_strapline: process.env.VUE_APP_STRAPLINE,
      app_substrapline: process.env.VUE_APP_SUB_STRAPLINE,
      app_infoline: process.env.VUE_APP_INFOLINE,
      app_description: process.env.VUE_APP_DESCRIPTION,
      app_logo_url: process.env.VUE_APP_LOGO_URL,
      text_colour: "color:" + process.env.VUE_APP_PRIMARY_COLOUR,
      bar_colour: "background-color:" + process.env.VUE_APP_PRIMARY_COLOUR,
      app_premium_test_url: process.env.VUE_APP_PREMIUM_TEST_URL,
      app_pricing_url: process.env.VUE_APP_PRICING_URL,
    };
  },
};
</script>

<style scoped>
.title-text {
  padding-bottom: 30px;
}
.inline-link {
  text-decoration: none;
  color: inherit;
}
.tech-stack-logo {
  max-width: 100px;
}
.app-infoline {
  line-height: 1.5;
}
@media screen and (min-width: 1024px) {
  .title-text {
    padding-bottom: 40px;
  }
  h1.title-text {
    font-size: 3em;
  }
  .tech-stack-logo {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}
</style>
