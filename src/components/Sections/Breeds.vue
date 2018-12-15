<template>
      <v-card>

            <v-layout align-center justify-center>

            <v-flex xs6>
                <v-select :items="breeds"
                        item-text="name"
                        v-model="selected_breed"
                        label="Breeds"
                        return-object
                        attach></v-select>
            </v-flex>
             
            </v-layout>


            <v-layout>
                <v-flex xs12 sm10 offset-sm1>
                  <v-card>
  <v-carousel>
      <v-carousel-item
        v-for="(item,i) in images"
        :key="i"
        :src="item.url"
      ></v-carousel-item>
    </v-carousel>
            
                    <v-card-title primary-title>
                      <div>
                        <h3 class="headline mb-0">{{selected_breed.name}}</h3>
                        <div>{{selected_breed.description}}</div>
                        <div>---</div>
                        <div><i>{{selected_breed.temperament}}</i></div>
                        <div>{{selected_breed.origin}}</div>
                        <div></div>
                      </div>
                    </v-card-title>
            
                    <v-card-actions>
                      <v-btn :href="selected_breed.wikipedia_url" target="_blank" flat color="orange">Wikipedia</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-flex>
              </v-layout>
      </v-card>
</template>
<script>
  export default {
    name: 'vote',
    components: {
    },
    data() {
      return {
          images: [],
          breeds:[],
          selected_breed: {}
      }
    },
    created() { 
      this.getBreeds();
    },
    watch: {
        selected_breed: function()
        {
          this.getImages();
        }
    },
    methods:{

        async getBreeds()
        {

          let result = await this.$store.dispatch('TheCatAPI/getBreeds'); 
          this.breeds = result.data
          this.selected_breed = this.breeds[10]

        },
      async getImages(image_id){
        let result = null;
        result = await this.$store.dispatch('TheCatAPI/searchImages',{
            limit:8,
            size:"full",
            breed_id: this.selected_breed.id
        }); 
        this.images = result.data
      }
    }
  }
  </script>