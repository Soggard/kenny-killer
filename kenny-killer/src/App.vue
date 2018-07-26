<template>

  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'
Vue.use(BootstrapVue)
Vue.use(Vuex)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App'
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    background-image: url("./assets/South_park.png");
    background-size: cover;
    background-repeat: no-repeat;
  }
  html, body, #app {
    height:100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
</style>
