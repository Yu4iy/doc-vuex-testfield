<template>
  <div class="div">
    <div v-show="test" class="counter">{{count}} INPUT:{{this.$store.state.testInput}}</div>
    <button @click="increment()">+</button>
    <button @click="decrement()">-</button>

    <div class="modal" v-show="this.$store.state.showModal">
      <h2>TEST MODAL TO SHOW</h2>
      <span>Lorem, ipsum dolor sit amet consectetur quia eusperiores ducimus odit aperiam id aliquam qui eos unde corrupti!</span>

    </div>
      <input :value="seachValueTest" @keydown.enter ="updateMessage" type="text">
      <Test/>
  </div>

</template>

<script>

import Test from './test.vue'
export default {
  name: 'HelloWorld',
  data(){
    return{
      test:true,
      seachValueTest:''
    }
  },
  components:{
    Test
  },
  computed: {
    count() {
      return this.$store.state.count;
    },





  },
  created(){
    this.decrement()
  },
  mounted () {
  },

  methods:{
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    },
    decrement(){
      this.$store.commit('decrement')
      console.log(this.$store.state.count)
      this.$store.dispatch('GetValue', this.seachValueTest)
    },
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
    updateMessage (e) {
      this.$store.commit('updateMessage', e.target.value)
    }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

  }

}
</script>


<style scoped lang="scss">
.counter{
  text-align: center;
  font-size: 65px;
}

button{
  padding: 10px 10px;
  background: transparent;
  color: red;
  border: 6px solid rgb(255, 0, 0);
  font-weight: 900;
  transition: linear 0.2s;
  cursor: pointer;
  border-radius: 20%;
  margin: 5px;

  &:hover{
    background: red;
    color: #fff;

  }

}
  .modal{
    background: rgba(65, 105, 225, 0.616);
    width: 200px;
    height: 200px;
    position: fixed;
    right:42.8%;
    top: 7%;
    padding: 10px;
  }
</style>
