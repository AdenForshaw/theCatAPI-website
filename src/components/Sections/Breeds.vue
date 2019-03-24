<template>
  <v-card>
    <v-layout align-center justify-center>
      <v-flex xs6>
        <v-select :items="breeds"
                        item-text="name"
                        v-model="selected_breed"
                        label="Breeds"
                        return-object
                        attach>
        </v-select>
      </v-flex>  
    </v-layout>


    <v-layout>
      <v-flex xs12 sm10 offset-sm1>
        <v-card>
          <v-carousel>
            <v-carousel-item
              v-for="(item,i) in images"
              :key="i"
              contain
                      :src="item.url"
            >

            </v-carousel-item>
          </v-carousel>
            
          <v-card-title>
            <v-layout
              align-end
              justify-center>
              <div>
                <h3 class="headline mb-0">{{selected_breed.name}}</h3>
                <h4> id: {{selected_breed.id }}</h4>
                <div>{{selected_breed.description}}</div>
                <div>---</div>
                <div><i>{{selected_breed.temperament}}</i></div>
                <div>{{selected_breed.origin}}</div>
                <div v-if="selected_breed.weight">{{selected_breed.weight.metric}} kgs</div>
                <div v-if="selected_breed.height">{{selected_breed.height.metric}} cm at the withers</div>
                <div v-if="selected_breed.life_span">{{selected_breed.life_span}} average life span</div>
                <div></div>
              </div>
            </v-layout>
          </v-card-title>
            
          <v-card-actions>
            <v-btn v-if="selected_breed.wikipedia_url" :href="selected_breed.wikipedia_url" target="_blank" flat color="orange">Wikipedia</v-btn>
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
          console.log("Breeds","watch selected_breed")
          this.getImages();
        }
    },
    methods:{

        async getBreeds()
        {
        console.log("Breeds","getBreeds")

          let result = await this.$store.dispatch('TheCatAPI/getBreeds'); 
          this.breeds = result.data
          this.selected_breed = this.breeds[10]

        },
      async getImages(){
        console.log("Breeds","getImages")
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