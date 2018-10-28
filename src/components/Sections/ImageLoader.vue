<template>
        <v-layout row wrap align-center>
            <v-flex xs12>
                <span>{{this.imageUrl ? 'Image File Name: '+this.filename : 'No File Selected'}}</span>
            </v-flex>
            <v-flex xs12 class="text-xs-center">
                <v-card class="imgloader tranparent elevation-0" dragover="handleDragOver">
                    <v-icon size="200" v-if="!imageUrl" color="primary">
                        {{this.filename ? 'autorenew' : 'cloud_upload'}}
                    </v-icon>
                    <img
                        v-else
                        :src="imageUrl"
                        ref="imageUrl"
                        height="400"
                        :alt="filename"
                    >
                <br>

                <span><b>Drag here</b> your file or <b>Click here</b> to {{this.filename ? 'change' : 'upload'}}</span>
                  <input type="file" :accept="accept" ref="fileInput" @change="onFileChange">  
                </v-card>
            </v-flex>
        </v-layout>
</template>

<script>
    export default{
        props: {
            value: {
                type: [Array, String]
            },
            accept: {
                type: String,
                default: "image/*"
            },
            maxWidth:{
                type: String,
                default: '0'
            },
            maxHeight:{
                type: String,
                default: '0'
            }
        },
        data(){
            return {
                filename: "",
                imageUrl:'',
            };
        },
        watch: {
            value(v){
                this.filename = v;
            }
        },
        mounted() {
            this.filename = this.value;
        },
        methods: {
            resetStatus(){
                this.filename=this.value;
                this.imageUrl='';
            },
            setData(media){
                this.filename=media.name;
                this.imageUrl=media.external_link;
            },
            onFileChange($event){
                let scope = this;
                let file = $event.target.files || $event.dataTransfer.files;
                if (file) {
                    let img = new Image();
                    img.src = window.URL.createObjectURL(file[0]);
                    img.onload = function() {
                        let width = img.naturalWidth,
                        height = img.naturalHeight;
                        if(width==0 || width>scope.maxWidth || height==0 || height>scope.maxHeight){
                            scope.$emit('wrongResolution', width+'x'+height+' pixels');
                            return;
                        } else {
                            if (file.length > 0) {
                                scope.filename = [...file].map(file => file.name).join(', ');
                            } else {
                                scope.filename = null;
                            }
                            let fileReader = new FileReader(); 
                            fileReader.addEventListener('load', () => {
                                scope.imageUrl = fileReader.result;
                            })
                            fileReader.readAsDataURL(file[0])
                            scope.$emit('inputName', scope.filename);
                            scope.$emit('formData', file[0]);
                        }
                    }
                } else {
                    scope.filename = $event.target.value.split('\\').pop();
                } 
            }
        }
    };
</script>

<style scoped>
    input[type=file] {
        position: absolute;
        left: -99999px;
    }
    .imgloader{
        border: 2px dashed dimgray; /* the dash box */
        border-radius: 8px;
        padding: 10px 10px;
        min-height: 300px; /* minimum height */
        position: relative;
        cursor: pointer;
        font-size: 12px;
    }
    .imgloader:hover{
        background-color: #FAFAFA;
         color:#0167AA;
         border-color: #0167AA;
    }
    .imgloader input {
    position: absolute;
    cursor: pointer;
    top: 0px;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
}
</style>