<template>
      <v-card>
  <!--div>
    <v-btn color="grey" large @click="getFavourites" >Refresh</v-btn>
  </div-->
        

    <v-layout>
      <v-flex>
        <v-card>
          <v-container grid-list-sm fluid>


        <v-layout row wrap align-center>
          <v-flex xs2>
             <v-select :items="['Desc','Asc']"
                  v-model="order"
                  label="Order"
                  attach></v-select>
          </v-flex>
        </v-layout>

          <div v-show="favourites.length==0">
            <p> No Favourites yet, just click on one of the images in Vote or Search to 'Fav-it'</p>
            </div>
            <v-layout row wrap>
              <v-flex
                v-for="n in favourites"
                :key="n.id"
                xs4
                d-flex
              >
  <v-hover>
                <v-card 
      slot-scope="{ hover }"
      color="grey lighten-4"
      flat tile class="d-flex">
                  <v-img
                    :src="n.image.url"
                    lazy-src="https://picsum.photos/10/6"
                    class="grey lighten-2"
                  >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
    <v-btn color="red" large @click="unFavouriteImage(n.id)" >
              Un-Fav it</v-btn>
          </div>
        </v-expand-transition>
                    <v-layout
                      slot="placeholder"
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                  </v-img>
                </v-card>
  </v-hover>
              </v-flex>

              

            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
     
  <div>

      <v-card>
        <v-layout row wrap align-center>
          <v-flex xs7>
             <v-pagination 
              v-show="pagination_count>limit" 
                v-model="page"
                :length="getNumPages"
              ></v-pagination>
          </v-flex>
          <v-flex xs1>
             <v-select :items="[9, 18,80]"
                  v-model="limit"
                  label="Per Page"
                  attach></v-select>
          </v-flex>
        </v-layout>
      </v-card>
    </div>
      </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

  export default {
    name: 'favourites',
    components: {
    },
    data() {
      return {
        
          page: 1,
          limit: 9,
          favourites: [],
          order:"Desc",
          pagination_count: 0, //default until we get a result with the 'Pagination-Count' header in the response
          pagination_page: 0
      }
    },
    computed: { 
      ...mapGetters({
          favourites_changed: 'TheCatAPI/lastFavourited',
          app_sub_id: 'TheCatAPI/subID'
      }),

        getNumPages: function()
        {
             return Math.ceil(this.pagination_count / this.limit) | 0;
        }
    },
    created() { 
       this.getFavourites();
    },
    watch: {

        page: function()
        {
          this.getFavourites();
        },
        limit: function()
        {
          this.page = 1;
          this.getFavourites();
        },
        order: function()
        {
          this.getFavourites();
        },
      favourites_changed()
      {
        this.getFavourites();
      },
      app_sub_id()
      {
        this.getFavourites();
      }
    },
    methods:{
      async getFavourites(){
        let result = await this.$store.dispatch('TheCatAPI/getFavourites',{
            limit: this.limit,
            page: this.page-1,
            order:this.order,
            size:"small"
        }); 
        this.favourites = result.data

          this.pagination_count = result.headers['pagination-count'];
        
        
      },
      async unFavouriteImage(favourite_id)
      {
        await this.$store.dispatch('TheCatAPI/unFavouriteImage',{favourite_id}); 
        await this.getFavourites();
      }
    }
  }
  </script>