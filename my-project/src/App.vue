<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{ count }}
    <p class="text">123</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      a: ''
    }
  },
  methods: {
    increment () {
      console.log(this)
      this.$store.commit('increment')
      var a = '1'
      console.log(a)
    },
    decrement () {
      this.$store.dispatch({
        type: 'increment',
        amount: 100
      })
      //  this.$store.commit('decrement')
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{color: red}
.text{color: seagreen;}
</style>
<style>
  @import "assets/style.css";
</style>
