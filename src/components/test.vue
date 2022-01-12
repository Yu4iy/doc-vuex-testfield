<template>
  <div class="test">
    <h2>NEW COMPONENT</h2>
    <div>{{this.$store.state.counts}}</div>
    <button @click=" ModalTest()" >SHOW MODAL</button>
  </div>
</template>

<script>

export default {

  data(){
    return{
    }
  },
  computed: {

  },
  created(){
  },
  mounted () {
  },
  methods:{
   ModalTest() {
      this.$store.commit('modalTogle')
      
    },
  }

}
</script>


<style scoped lang="scss">
button{
  padding: 10px 20px;
  background: transparent;
  color: red;
  border: 6px solid rgb(255, 0, 0);
  font-weight: 900;
  transition: linear 0.2s;
  cursor: pointer;
  &:hover{
    background: red;
    color: #fff;

  }

}
</style>
