import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex);
export default new Vuex.Store({


  state: {
      count: 0
  },



  mutations: {
    increment (state) {
      state.count++
  },
    decrement (state) {
      state.count--
  }
  },

})

  

	// async loadItems ({commit}, payload) {
      //       axios
      //           .get('https://futuramaapi.herokuapp.com/api/v2/characters')
      //           .then(response => response.data)
      //           .then(items => {
      //               console.log(items);
	// 		  console.log(context);
	// 		  console.log(commit);

 

