<template>
  <v-container fluid class="pa-0">
    <v-layout row wrap>
      <v-container>
        <div id="main">
          <v-layout row wrap>
            <v-flex xs12 sm7 class="title-text">
              <v-layout row wrap class="title-text">
                <v-flex xs12 class="text-xs-left"
                  ><h2 class="title-text">
                    {{ app_title }} -
                    <span class="font-weight-medium">
                      {{ app_strapline }}
                    </span>
                  </h2></v-flex
                >
                <v-flex xs12 class="text-xs-left"
                  ><h2 class="title-text" :style="text_colour">
                    {{ app_substrapline }}
                  </h2></v-flex
                >
                <v-flex xs7
                  ><p class="text-xs-left">{{ app_description }}</p></v-flex
                >
              </v-layout>
              <v-layout>
                <v-flex class="d-flex" xs12>
                  <v-img
                    :src="require(`../assets/images/react.png`)"
                    class="px-3"
                    contain
                  ></v-img>
                  <v-img
                    :src="require(`../assets/images/jquery.png`)"
                    class="px-3"
                    contain
                  ></v-img>
                  <v-img
                    :src="require(`../assets/images/vue.png`)"
                    class="px-3"
                    contain
                  ></v-img>
                  <v-img
                    :src="require(`../assets/images/node.png`)"
                    class="px-3"
                    contain
                  ></v-img>
                  <v-img
                    :src="require(`../assets/images/angular.png`)"
                    class="px-3"
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
                class="font-italic white--text px-2 py-1"
              >
                {{ app_title }} {{ app_infoline }}
              </label>
            </v-flex>
          </v-layout>
        </div>
      </v-container>
    </v-layout>
    <v-layout row grey lighten-1>
      <v-container grid-list-xl>
        <v-flex class="pricing-div align-center" justify-space-between xs12>
          <h2 class="text-xs-left">Pricing</h2>
          <div class="text-xs-right d-flex align-center">
            <label>Monthly</label>
            <v-switch v-model="yearly_price" class="mx-2"></v-switch>
            <label>Yearly with 20% discount</label>
          </div>
        </v-flex>
        <v-layout row wrap class="justify-space-between">
          <v-flex xs4>
            <v-card class="mx-auto my-12 fill-height">
              <v-card-title class="justify-center title">Free</v-card-title>

              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-icon x-large>mdi-google-controller</v-icon>
                </v-row>

                <div class="my-2">
                  <h2 class="headline teal--text">$0</h2>
                  <span class="font-italic caption">No hidden costs</span>
                </div>

                <p>Free for you to use on your non-monetized app</p>
              </v-card-text>

              <v-card-actions class="justify-center">
                <v-btn color="teal  white--text" text large>
                  Sign for free
                </v-btn>
              </v-card-actions>
              <div class="pa-4">
                <ul class="text-xs-left">
                  <li>10,000 requests / month</li>
                  <li>Free Code Samples</li>
                  <li>Community forums</li>
                  <li>SSL Encryption</li>
                </ul>
              </div>
            </v-card>
          </v-flex>
          <v-flex xs4>
            <v-card class="mx-auto my-12 fill-height">
              <v-card-title class="justify-center title">Paid</v-card-title>

              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-icon x-large>mdi-office-building</v-icon>
                </v-row>

                <div class="my-2">
                  <h2 v-if="yearly_price" class="headline light-blue--text lighten-1">$120</h2>
                  <h2 v-else class="headline light-blue--text lighten-1">$10</h2>
                  <span v-if="yearly_price" class="font-italic caption">yearly</span>
                  <span v-else class="font-italic caption">per month</span>
                </div>

                <p>Free for you to use on your non-monetized app</p>
              </v-card-text>

              <v-card-actions class="justify-center">
                <v-btn color="light-blue lighten-1 white--text" text large>
                  Sign for free
                </v-btn>
              </v-card-actions>
              <div class="pa-4">
                <ul class="text-xs-left">
                  <li>10,000 requests / month</li>
                  <li>Free Code Samples</li>
                  <li>Community forums</li>
                  <li>SSL Encryption</li>
                </ul>
              </div>
              <div class="pa-4">
                <ul class="text-xs-left">
                  <li><b>Curated Facts / Jokes / Quotes / Analytics</b></li>
                  <li><b>Higher resolution Pictures</b></li>
                  <li><b>Premium Images</b></li>
                  <li><b>Video</b></li>
                  <li><b>Realtime web hooks</b></li>
                </ul>
              </div>
            </v-card>
          </v-flex>
          <v-flex xs4>
            <v-card class="mx-auto my-12 fill-height">
              <v-card-title class="justify-center title">Enterprise</v-card-title>

              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-icon x-large>mdi-domain</v-icon>
                </v-row>

                <div class="my-2">
                  <h2 class="headline amber--text lighten-2">Volume Pricing</h2>
                </div>

                <p>Free for you to use on your non-monetized app</p>
              </v-card-text>

              <v-card-actions class="justify-center">
                <v-btn color="amber lighten-2 white--text" text large>
                  Sign for free
                </v-btn>
              </v-card-actions>
              <div class="pa-4">
                <ul class="text-xs-left">
                  <li>10,000 requests / month</li>
                  <li>Free Code Samples</li>
                  <li>Community forums</li>
                  <li>SSL Encryption</li>
                </ul>
              </div>
              <div class="pa-4">
                <ul class="text-xs-left">
                  <li><b>Curated Facts / Jokes / Quotes / Analytics</b></li>
                  <li><b>Higher resolution Pictures</b></li>
                  <li><b>Premium Images</b></li>
                  <li><b>Video</b></li>
                </ul>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import Vote from "../components/Sections/Vote";
import Search from "../components/Sections/Search";
import Favourites from "../components/Sections/Favourites";
import Upload from "../components/Sections/Upload";
import Breeds from "../components/Sections/Breeds";
import CodeExamples from "../components/CodeExamples";

export default {
  components: {
    Vote,
    Search,
    Favourites,
    Upload,
    Breeds,
    CodeExamples,
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
      yearly_price: false
    };
  },
};
</script>

<style scoped>
.title-text {
  padding-bottom: 40px;
}
.pricing-div {
  display: flex;
  flex: 0 0 auto;
}
</style>