<template>
      <v-card>
<br>
  <div>
    <v-btn color="green" large @click="voteUp" >
              <v-icon>thumb_up</v-icon>&nbsp; Love it</v-btn>
    <v-btn color="red" large @click="voteDown" >
              <v-icon>thumb_down</v-icon>&nbsp; Nope it</v-btn>
  </div>
        <v-container>

    <v-layout align-center justify-center >
        
      <v-flex v-if="current_image">
                <v-hover>
              <v-card align-content-center
                  slot-scope="{ hover }">
                <img class="center"
                  :src="current_image.url"
                  max-height="500px"
                  contain
                  lazy-src="https://picsum.photos/10/6"
                >
        <v-layout
                        align-end
                        justify-center>
                        <div v-if="current_image.vote">
          <v-icon v-show="current_image.vote.value==0" color="red" size="35">thumb_down</v-icon>
          <v-icon v-show="current_image.vote.value==1" color="green" size="35">thumb_up</v-icon>
          </div>
          <v-icon v-show="current_image.favourite" color="red" size="35">mdi-heart</v-icon>
        </v-layout>
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
                        style="height: 20%;"
                      >
                        <v-btn color="green" large @click="favouriteImage()" v-show="show_favourite" >
                          Fav it</v-btn>

                        <v-btn color="red" large @click="unfavouriteImage()" v-show="!show_favourite" >
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

              </v-card>

              </v-hover>
      </v-flex>
    </v-layout>
        </v-container>
     
  <v-container fluid grid-list-md v-show="false">

    <v-layout row wrap>
        
      <v-flex d-flex >
        <v-layout row wrap>
            <v-card color="dark-green" dark>
              <v-card-title primary class="title">Api methods used on this page</v-card-title>
              <v-card-text class="text-md-left">Get 1 random Image - [GET] https://api.thecatapi.com/v1/images/search?size=full&limit=1</v-card-text>
              <v-card-text class="text-md-left">Vote Up: [POST] https://api.thecatapi.com/v1/vote/ {image_id: "{{current_image.id}}", value: true}</v-card-text>
              <v-card-text class="text-md-left">Vote Down: [POST] https://api.thecatapi.com/v1/vote/ {image_id:"{{current_image.id}}", value: false}</v-card-text>
            </v-card>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
      </v-card>
</template>
<script>
  export default {
    name: 'vote',
    components: {
    },
    data() {
      return {
        show_favourite: true,
          current_image: {url:"./meta-tag-image.png", placeholder:""},//`https://api.thecatapi.com/v1/images/search?format=src`
      }
    },
    created() { 

            let imageId = this.$route.query.image_id
            // fallback to check legacy schema
            if (!imageId) imageId = this.$route.query.id

       this.getImage(imageId);
    },
    methods:{

        showFavouriteBtn: function()
        {
         if( this.current_image.favourite !=null)this.show_favourite = false;
         else this.show_favourite = true;
        
    },
      async getImage(image_id){
          this.current_image.url="";//https://picsum.photos/10/8"
          this.current_image.placeholder = "";//https://picsum.photos/10/8"

        let result = null;
          if(image_id)
          {
              result = await this.$store.dispatch('TheCatAPI/getImage',{
                image_id: image_id,
                size:"full",
            }); 
        this.current_image = result.data;
          }else{
            result = await this.$store.dispatch('TheCatAPI/searchImages',{
                limit:1,
                size:"full",
            }); 
        this.current_image = result.data[0]
          }
        
        this.showFavouriteBtn()
      },
      async voteUp(){

        await this.$store.dispatch('TheCatAPI/voteImage',{
            image_id:this.current_image.id,
            value: true
        }); 
        this.getImage();
      },
      async voteDown(){

        await this.$store.dispatch('TheCatAPI/voteImage',{
            image_id:this.current_image.id,
            value: false
        }); 
        this.getImage();
      },
      async favouriteImage()
      {
        let result = await this.$store.dispatch('TheCatAPI/favouriteImage',{
          image_id: this.current_image.id
        }); 
        this.current_image.favourite = {id: result.data.id};
        this.showFavouriteBtn()
      }
      ,
      async unfavouriteImage()
      {
        await this.$store.dispatch('TheCatAPI/unFavouriteImage',{
          favourite_id: this.current_image.favourite.id
        }); 
        this.current_image.favourite = null;
        this.showFavouriteBtn()
      }
    }
  }
  </script>
  <style scoped>
  img {
  display: block;
  max-width:100%;
  max-height:600px;
  width: auto;
  height: auto;
  margin-left:auto;
margin-right:auto;
}
.center img {        
  display:block;
  margin-left:auto;
  margin-right:auto;
}
</style>