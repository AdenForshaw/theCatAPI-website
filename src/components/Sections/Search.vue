<template>
<v-card>

    

      <!--v-flex xs12 sm6 offset-sm3>
    <v-radio-group v-model="search_order" required >
      <p>Order</p>
      <v-radio
        label="Random"
        value="rand"
      ></v-radio>
      <v-radio
        label="Ascending"
        value="asc"
      ></v-radio>
      <v-radio
        label="Decending"
        value="desc"
      ></v-radio>
    </v-radio-group>
      </v-flex-->

    <v-layout>
      <v-flex>
        <v-card>
          <v-container grid-list-sm fluid>

        <v-layout row wrap align-center>
          <v-flex xs6>
             <v-select :items="['Random', 'Desc','Asc']"
                  v-model="order"
                  label="Order"
                  attach></v-select>
          </v-flex>
          <v-flex xs6>
             <v-select :items="['All', 'Static','Animated']"
                  v-model="image_type"
                  label="Type"
                  attach></v-select>
          </v-flex>
        </v-layout>


        <v-layout row wrap align-center>
          <v-flex xs6>
             <v-select :items="categories"
                  item-text="name"
                  v-model="selected_category"
                  label="Category"
                  attach></v-select>
          </v-flex>
          <v-flex xs6>
             <v-select :items="breeds"
                  item-text="name"
                  v-model="selected_breed"
                  label="Breed"
                  attach></v-select>
          </v-flex>
        </v-layout>

            <v-layout row wrap>

              <v-flex
                v-for="n in images"
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
                      :src="n.url"
                      lazy-src="https://picsum.photos/10/6"
                      class="grey lighten-2"
                      aspect-ratio="1"
                    >
        <v-layout
                        align-end
                        justify-center>
                        <div v-if="n.vote">
          <v-icon v-show="n.vote.value==0" color="red" size="35">thumb_down</v-icon>
          <v-icon v-show="n.vote.value==1" color="green" size="35">thumb_up</v-icon>
          </div>
          <v-icon v-show="n.favourite" color="red" size="35">mdi-heart</v-icon>
        </v-layout>

                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out  darken-2 v-card--reveal display-3 white--text"
                        style="height: 50px;"
                      >
                        <v-btn color="white" large @click="favouriteImage(n.id)" v-show="!n.favourite" >
          <v-icon color="red">mdi-heart</v-icon>
                          </v-btn>
                      </div>
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
        <v-layout  wrap align-center>
          <v-flex xs10>
             <v-pagination
             v-show="order!='Random'" 
                v-model="page"
                :length="getNumPages"
              ></v-pagination>
          </v-flex>
        </v-layout>
        <v-layout  wrap align-center>
          <v-flex xs4 offset-xs1>
             <v-select :items="[9, 18,80]"
                  v-model="limit"
                  label="Per Page"
                  attach></v-select>
          </v-flex>

          <v-flex xs6>
            <v-btn color="blue"  v-show="order=='Random'" large @click="nextBtn"><v-icon>refresh</v-icon> &nbsp; 
                        More</v-btn>
          </v-flex>
        </v-layout>
      </v-card>
    </div>
  </v-card>
</template>
<script>
  export default {
    name: 'search',
    components: {
    },
    data() {
      return {
          images: [],
          search_order:'rand',
          page: 1,
          limit: 9,
          image_type:"All",
          order:"Random",
          pagination_count: 0, //default until we get a result with the 'Pagination-Count' header in the response
          pagination_page: 0,
          default_category: {id:-1,name: "None"},
          selected_category:{id:-1, name:"None"},
          categories:[],
          breeds:[],
          default_breed: {id:-1,name: "None"},
          selected_breed:{id:-1, name:"None"}
      }
    },
    mounted() { 
      this.getBreeds();
      this.getCategories();
      this.getImages();
    },
    watch: {
        page: function()
        {
          this.getImages();
        },
        limit: function()
        {
          this.getImages();
        },
        order: function()
        {
          this.getImages();
        },
        image_type: function()
        {
          this.getImages();
        },
        selected_category: function()
        {
          this.resetPagination();
          this.getImages();
        },
        selected_breed: function()
        {
          this.resetPagination();
          this.getImages();
        }
    },
    computed:{
        getNumPages: function()
        {
          return Math.floor(this.pagination_count / this.limit) | 0;
        }
    },
    methods:{
      async getImages(){

        console.log("getImages", this.selected_category)
        let mime_map = {
          All:'',
          Static:'jpg,png',
          Animated:'gif' }

        let query_params = {
            limit: this.limit,
            mime_types: mime_map[this.image_type],
            order: this.order,
            size:"small",
            page: this.page-1,
        }
        if(this.selected_category!='None')query_params.category_ids = this.getCategoryIdFromName(this.selected_category);
        if(this.selected_breed!='None')query_params.breed_ids = this.getBreedIdFromName(this.selected_breed);

        let result = await this.$store.dispatch('TheCatAPI/searchImages',query_params); 
        this.images = result.data

        this.pagination_count = result.headers['pagination-count'];
        
      },
      async nextBtn()
      {
        this.page++;
          await this.getImages();
      },
      async favouriteImage(image_id)
      {
          let result = await this.$store.dispatch('TheCatAPI/favouriteImage',{
            image_id: image_id
          }); 
          let favourite_id = result.data.id;

          for(var i=0;i<this.images.length;i++)
          {
            if(this.images[i].id==image_id)
            {
              console.log('hit ', i , image_id, this.images[i].favourite)
              this.images[i].favourite = {id: favourite_id}
            }
          }
      },
      async getCategories(){
        let result = await this.$store.dispatch('TheCatAPI/getCategories',{ }); 
        let loaded_categories = result.data
        loaded_categories.unshift(this.default_category)
        this.categories = loaded_categories
        console.log("categories", this.categories)
      },
      async getBreeds(){
        let result = await this.$store.dispatch('TheCatAPI/getBreeds',{ }); 
        let loaded_breeds = result.data
        loaded_breeds.unshift(this.default_breed)
        this.breeds = loaded_breeds
        console.log("breeds", this.breeds)
      },
      resetPagination()
      {
        this.page=1
      },
      getCategoryIdFromName(name)
      {
        for(var i=0;i<this.categories.length;i++)
        {
          if(this.categories[i].name == name)
          {
            return this.categories[i].id
          }
        }
      },
      getBreedIdFromName(name)
      {
        for(var i=0;i<this.breeds.length;i++)
        {
          if(this.breeds[i].name == name)
          {
            return this.breeds[i].id
          }
        }
      }
    }
  }
  </script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .8;
  position: absolute;
  width: 100%;
}
</style>