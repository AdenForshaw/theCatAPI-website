import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const SET_IMAGES          = 'SET_IMAGES';
const SET_SUB_ID          = 'SET_SUB_ID';
const SET_CATEGORIES      = 'SET_CATEGORIES';
const SET_BREEDS           = 'SET_BREEDS';
const SET_API_KEY         = 'SET_API_KEY';
const SET_LAST_FAVOURITED = 'SET_LAST_FAVOURITED';
const SET_FAVOURITES      = 'SET_FAVOURITES';

axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;// "https://api.thedogapi.com/"


//axios.defaults.baseURL = "http://localhost:4009"

 axios.interceptors.response.use(null, function(error) {
   console.warn('Error status', error.response.status);
   return Promise.reject(error);
 });

const applySubID = function (sub_id, params)
{
    if(!params)params = {}

    if(sub_id)params.sub_id = sub_id
    return params;
}

const createDataForm = function(data) {
    let formData = new FormData();
    for(let prop in data){
        formData.append(prop, data[prop]);
    }
    return formData;
}

const dataStore = {
  namespaced: true,
  state: {
    sub_id: 'demo-'+((1<<24)*Math.random()|0).toString(16), // Default value
    images: null,
    api_key: "DEMO-API-KEY", // Swap this out with the one from the email sent after signing up
    last_favourited: null,
    favourites:null,
    categories: [],
    breeds:[]
  },
  mutations: {
    SET_CATEGORIES(state, data){
      state.categories = data
    },
    SET_SUB_ID(state, data){
      state.sub_id = data
    },
    SET_IMAGES(state, data) {
      state.images = data
    },
    SET_API_KEY(state, data) {
      state.api_key = data
    },
    SET_LAST_FAVOURITED(state, data) {
      state.last_favourited = data
    },
    SET_FAVOURITES(state, data) {
      state.favourites = data
    },
    SET_BREEDS(state, data) {
      state.breeds = data
    }
  },
  getters: {
    images(state) {
      return state.images
    },
    apiKey(state) {
      return state.api_key
    },
    subID(state) {
      return state.sub_id;
    },
    lastFavourited(state) {
      return state.last_favourited;
    },
    categories(state) {
      return state.categories;
    }
  },
  actions: {
    async setAPIKey({
      commit
    }, key) {
      try {
        commit(SET_API_KEY, key)
      } catch (error) {
        throw new Error(error)
      }
    },
    async setSubID({
      commit
    }, sub_id) {
      console.log("SetSubID", sub_id)
      try {
        commit(SET_SUB_ID, sub_id)
      } catch (error) {
        throw new Error(error)
      }
    },
     getSubID({
      rootGetters
    }) {
      try {
        return rootGetters['TheCatAPI/subID']
      } catch (error) {
        throw new Error(error)
      }
    },

    async searchImages({
      rootGetters,
      commit
    }, query) {
      try {
           // add x-api-key as header
        axios.defaults.headers.common['x-api-key'] = rootGetters['TheCatAPI/apiKey']
        let response =  await axios.get('/v1/images/search',{
            params: applySubID(rootGetters['TheCatAPI/subID'], query)
          }
        );
        commit(SET_IMAGES,response.data)
        return response;
      } catch (error) {
        throw new Error(error)
      }
    },

    async getImage({
      rootGetters
    }, query) {
      try {
          // add x-api-key as header
        axios.defaults.headers.common['x-api-key'] = rootGetters['TheCatAPI/apiKey']
        let response = await axios.get('/v1/images/'+query.image_id, {
            params: applySubID(rootGetters['TheCatAPI/subID'], query)
          });
        
        return response;
      } catch (error) {
        throw new Error(error.response.data.message)
      }
    },
    async getCategories({
      commit
    }) {
      try {
        let response = await axios.get('/v1/categories/');
        commit(SET_CATEGORIES,response.data)
        return response;
      } catch (error) {
        throw new Error(error.response.data.message)
      }
    },
    async getUploads({
      rootGetters
    }, query) {
      try {
          // add x-api-key as header
        axios.defaults.headers.common['x-api-key'] = rootGetters['TheCatAPI/apiKey']
        let response = await axios.get('/v1/images/', {
            params: applySubID(rootGetters['TheCatAPI/subID'], query)
          });
        
        return response;
      } catch (error) {
        throw new Error(error.response.data.message)
      }
    },
    async voteImage({
      rootGetters
    }, params) {
      try {
          // add x-api-key as header

        axios.defaults.headers.common['x-api-key'] = rootGetters['TheCatAPI/apiKey']
        let response = await axios.post('/v1/votes/', 
             applySubID(rootGetters['TheCatAPI/subID'], params)
          );
        
        return response;
      } catch (error) {
        throw new Error(error.response.data.message)
      }
    },
    async uploadImage({
      rootGetters
    }, params) {
      try {
          // add x-api-key as header
        axios.defaults.headers.common['x-api-key'] = rootGetters['TheCatAPI/apiKey']
          params = applySubID(rootGetters['TheCatAPI/subID'], params)
          let dataForm =  createDataForm(params);
          let response = await axios.post('/v1/images/upload',dataForm,{
            headers: {
              'Content-Type':'multipart/form-data'
            }
          });
          return response;

        } catch (error) {
          throw new Error(error.response.data.message)
        }

    },
    async getFavourites({
      rootGetters,
      commit
    }, query) {
      try {
           // add x-api-key as header
        axios.defaults.headers.common['x-api-key'] = rootGetters['TheCatAPI/apiKey']
        let response =  await axios.get('/v1/favourites',{
            params: applySubID(rootGetters['TheCatAPI/subID'], query)
          }
        );
        commit(SET_FAVOURITES,response.data)
        return response;
      } catch (error) {
        throw new Error(error)
      }
    },
    async favouriteImage({
      rootGetters,
      commit
    }, params) {
      try {
          // add x-api-key as header

        axios.defaults.headers.common['x-api-key'] = rootGetters['TheCatAPI/apiKey']
        let response = await axios.post('/v1/favourites/', 
             applySubID(rootGetters['TheCatAPI/subID'], params)
          );
        commit(SET_LAST_FAVOURITED, params.image_id)
        
        return response;
      } catch (error) {
        throw new Error(error.response.data.message)
      }
    },
    async unFavouriteImage({
      rootGetters,
      commit
    }, params) {
      try {
          // add x-api-key as header
        axios.defaults.headers.common['x-api-key'] = rootGetters['TheCatAPI/apiKey']
        let response = await axios.delete('/v1/favourites/'+params.favourite_id
        );
        
        commit(SET_LAST_FAVOURITED, params.image_id)
        return response;
      } catch (error) {
        throw new Error(error)
      }
    },
    // eslint-disable-next-line
    async signup({
    }, params) {
      try {
        // this is rate limited on the server and uses a dynamic env var to prevent being spammed so it probably won't work well/ if at all outisde of theCatAPI.com / theDogAPI.com
        let response = await axios.post('/v1/user/passwordlesssignup',  params);
        
        return response;
      } catch (error) {
        throw new Error(error.response.data.message)
      }
    },

    async getBreeds({
      rootGetters,
      commit
    }, query) {
      try {
           // add x-api-key as header
        axios.defaults.headers.common['x-api-key'] = rootGetters['TheCatAPI/apiKey']
        let response =  await axios.get('/v1/breeds', {params: query});
        commit(SET_BREEDS,response.data)
        return response;
      } catch (error) {
        throw new Error(error)
      }
    },
    
  }
}

export default dataStore