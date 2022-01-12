<template>
  <div class="div">
    <div v-show="test" class="counter">{{this.$store.state.count}}</div>
    <button @click="increment()">+</button>
    <button @click="decrement()">-</button>

      <Test/>
  </div>

</template>

<script>

import Test from './test.vue'
export default {
  name: 'HelloWorld',
  data(){
    return{
      test:true

    }
  },
  components:{
    Test
  },
  computed: {
  },
  created(){
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
    }
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
</style>
