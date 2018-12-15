<template>
      <v-card>
        <br>
              <p>Any uploads must comply with the <router-link to="/privacy"> upload guidelines</router-link> or face deletion.</p>
          <v-container grid-list-sm fluid>
            <v-layout row wrap>

              <v-flex xs12 sm8 offset-sm2
              >
                 <v-flex xs12>
                    <imageLoader maxHeight="20000" maxWidth="20000" accept=".jpg,.png" ref="imageLoader" v-on:wrongResolution="wrongResolution"
                      v-on:formData="getImgData"></imageLoader>
                  </v-flex>

    <v-btn color="green" large @click="upload" v-show="image_file && !uploading"> Upload</v-btn>
              </v-flex>
            </v-layout>
          </v-container>

    <h1 v-show="!image_file">Upload a .jpg or .png Cat Image</h1>
    <h1 v-show="uploading">Uploading...</h1>
    <br>
    <v-alert
      v-show="upload_success"
      :value="true"
      dark
      type="success"
    >
      Thanks for the Upload - Cat found!
    </v-alert>
    <v-alert
      v-show="upload_error"
      dark
      :value="true"
      type="error"
    >
      No Cat found - try a different one
    </v-alert>

    <v-layout>
      <v-flex>
          <v-container grid-list-sm fluid v-show="uploads.length>0">


              <h2>Your last {{limit}} Uploads</h2>
            <v-layout row wrap>
              <v-flex
                v-for="n in uploads"
                :key="n.id"
                xs4
                d-flex
              >
                  <v-card 
                  color="grey lighten-4"
                  flat tile class="d-flex">
                    <v-img
                      :src="n.url"
                      lazy-src="https://picsum.photos/10/6"
                      class="grey lighten-2"
                      aspect-ratio="1"
                    >
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
              </v-flex>
            </v-layout>
          </v-container>
              </v-flex>
            </v-layout>
                  
      </v-card>
</template>

<script>
  import imageLoader from './ImageLoader'
  export default {
    name: 'upload',
    components: {

      imageLoader
    },
    data() {
      return {
        image_file: null,
        uploads: [],
        uploading:false,
        message:'',
        error:false,
        upload_success: null,
        upload_error: null,

          page: 1,
          limit: 3,
          favourites: [],
          order:"Desc",
      }
    },
    created() { 
       this.getUploads();
    },
    methods:{

      wrongResolution(resolution){
        this.message='The image resolution should be maximum 20000x20000 and you are currently trying to upload a '+resolution+' image.'
        this.error= !this.error;
        console.log(resolution)
      },
      getImgData(img){
        this.image_file = img;
        this.upload_success = null;
        this.upload_error = null;
      },
      async getUploads(){
        let result = await this.$store.dispatch('TheCatAPI/getUploads',{
            limit: this.limit,
            order: this.order,
            page:this.page-1,
            size:"small"
        }); 
        this.uploads = result.data;        
      },

      async upload() {
        this.uploading=true;
        try{
            var result = await this.$store.dispatch('TheCatAPI/uploadImage',{file:this.image_file});
            this.upload_success = "Cat found, Upload Complete!"
           this.clearUpload();
            console.log(result)
            this.getUploads();
          } catch(error) {
            this.upload_error = "No Cat found in image, try a different one."
            console.log(error)
           this.clearUpload();
          }
        
      },
     clearUpload()
      {
        this.uploading=false;
        this.image_file = null;
      }
    }
  }
  </script>