<template>
  <v-layout row grey lighten-1 id="pricing">
    <v-container grid-list-xl>
      <v-flex class="pricing-div align-center" justify-space-between xs12>
        <h2 class="text-xs-left pricing-title">Pricing</h2>
        <div class="text-xs-right d-flex align-center">
          <label>Monthly</label>
          <v-switch v-model="yearly_price" class="mx-2"></v-switch>
          <label>Yearly with 20% discount</label>
        </div>
      </v-flex>
      <v-layout row wrap class="justify-space-between">
        <v-flex sm4 xs-12>
          <v-card
            class="mx-auto my-12 fill-height"
            @click="() => (free_div_expanded = !free_div_expanded)"
          >
            <v-card-title class="justify-center title">Free</v-card-title>

            <v-card-text>
              <v-flex align="center" class="mx-0">
                <v-icon x-large>mdi-google-controller</v-icon>
              </v-flex>

              <div class="my-2">
                <h2 class="headline teal--text">$0</h2>
                <span class="font-italic caption">No hidden costs</span>
              </div>

              <p>Free for you to use on your non-monetized app</p>
            </v-card-text>

            <v-card-actions class="justify-center">
              <ex-btn
                color="teal  white--text"
                text
                large
                v-bind:gacategory="btn_category"
                v-bind:galabel="free_btn_label"
                :gavalue="1"
                to="/signup"
              >
                Signup for free
              </ex-btn>
            </v-card-actions>
            <div
              class="collapsable-details"
              :class="{ collapsed: !free_div_expanded }"
            >
              <div class="pa-4">
                <ul class="text-xs-left">
                  <li>10,000 requests / month</li>
                  <li>Free Code Samples</li>
                  <li>
                    <a href="http://forum.thatapiguy.com/">Community forums</a>
                  </li>
                  <li>SSL Encryption</li>
                </ul>
              </div>
            </div>
          </v-card>
        </v-flex>
        <v-flex sm4 xs-12>
          <v-card
            class="mx-auto my-12 fill-height"
            @click="() => (paid_div_expanded = !paid_div_expanded)"
          >
            <v-card-title class="justify-center title">Paid</v-card-title>

            <v-card-text>
              <v-flex align="center" class="mx-0">
                <v-icon x-large>mdi-office-building</v-icon>
              </v-flex>

              <div class="my-2">
                <h2
                  v-if="yearly_price"
                  class="headline light-blue--text lighten-1"
                >
                  $10
                </h2>
                <h2 v-else class="headline light-blue--text lighten-1">
                  $12.50
                </h2>
                <span class="font-italic caption">per month</span>
              </div>

              <p>
                Required if you charge for access to the application using the
                Cat API
              </p>
            </v-card-text>

            <v-card-actions class="justify-center">
              <ex-btn
                v-bind:gacategory="btn_category"
                v-bind:galabel="paid_btn_label"
                v-bind:gavalue="2"
                color="light-blue lighten-1 white--text"
                text
                large
                @click="handlePaidSignup"
              >
                Get Started
              </ex-btn>
            </v-card-actions>
            <div
              class="collapsable-details"
              :class="{ collapsed: !paid_div_expanded }"
            >
              <div class="pa-4">
                <ul class="text-xs-left">
                  <li>100,000 requests / month</li>
                  <li>Free Code Samples</li>
                  <li>
                    <a href="http://forum.thatapiguy.com/">Community forums</a>
                  </li>
                  <li>SSL Encryption</li>
                </ul>
              </div>
              <div class="pa-4">
                <ul class="text-xs-left">
                  <li><b>Curated Facts / Jokes / Quotes</b></li>
                  <li><b>Analytics</b></li>
                  <li><b>Higher resolution Pictures</b></li>
                  <li><b>Premium Images</b></li>
                  <li><b>Video</b></li>
                  <li><b>Realtime web hooks</b></li>
                </ul>
              </div>
            </div>
          </v-card>
        </v-flex>
        <v-flex sm4 xs-12>
          <v-card
            class="mx-auto my-12 fill-height"
            @click="() => (enterprise_div_expanded = !enterprise_div_expanded)"
          >
            <v-card-title class="justify-center title">Enterprise</v-card-title>

            <v-card-text>
              <v-flex align="center" class="mx-0">
                <v-icon x-large>mdi-domain</v-icon>
              </v-flex>

              <div class="my-2">
                <h2 class="headline amber--text lighten-2">Volume Pricing</h2>
              </div>

              <p>Bespoke pricing tailored to your scaling needs</p>
            </v-card-text>

            <v-card-actions class="justify-center">
              <ex-btn
                v-bind:gacategory="btn_category"
                v-bind:galabel="enterprise_btn_label"
                v-bind:gavalue="3"
                color="amber lighten-2 white--text"
                text
                large
                href="mailto:aden@thatapicompany.com"
              >
                Contact us
              </ex-btn>
            </v-card-actions>
            <div
              class="collapsable-details"
              :class="{ collapsed: !enterprise_div_expanded }"
            >
              <div class="pa-4">
                <ul class="text-xs-left">
                  <li>Unlimited requests / month</li>
                  <li>Free Code Samples</li>
                  <li>
                    <a href="http://forum.thatapiguy.com/">Community forums</a>
                  </li>
                  <li>SSL Encryption</li>
                </ul>
              </div>
              <div class="pa-4">
                <ul class="text-xs-left">
                  <li><b>Curated Facts / Jokes / Quotes</b></li>
                  <li><b>Analytics</b></li>
                  <li><b>Higher resolution Pictures</b></li>
                  <li><b>Premium Images</b></li>
                  <li><b>Video</b></li>
                  <li><b>Realtime web hooks</b></li>
                </ul>
              </div>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>
<script>
import ExBtn from "@/components/ExBtn";
export default {
  components: {
    ExBtn,
  },
  methods: {
    handlePaidSignup(e) {
      // just to see that the click handler still works
      console.log(e);
      window.open(process.env.VUE_APP_PREMIUM_TEST_URL, "_blank");
    },
  },
  data() {
    return {
      yearly_price: true,
      btn_category: "BUTTONS",
      free_btn_label: "FREE",
      paid_btn_label: "PAID",
      enterprise_btn_label: "ENTERPRISE",
      free_div_expanded: false,
      paid_div_expanded: false,
      enterprise_div_expanded: false,
    };
  },
};
</script>
<style scoped>
.pricing-div {
  display: flex;
  flex: 0 0 auto;
}
.collapsable-details {
  transition: 0.5s height, opacity ease-in-out;
  opacity: 1;
}
.collapsable-details.collapsed {
  height: 0;
  opacity: 0;
  padding: 10px;
}
@media screen and (min-width: 1024px) {
  .collapsable-details.collapsed {
    height: auto;
    opacity: 1;
    padding: 0;
  }
  .pricing-title {
    font-size: 3em;
  }
}
</style>
