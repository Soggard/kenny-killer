<template>
    <div>
        <h1 class="count">{{ totalCookies }}</h1> <br>
        <img src="../assets/Kenny.png" alt="kenny" @click="increment">
    </div>
</template>


<script>
  import { mapActions, mapGetters, mapState } from "vuex";
  //import App from './App'
  //import { store } from '../store.js';

  export default {
      name: 'Counter',
      data() {
        return {
          interval:''
        }
      },
      computed: {
          //...mapGetters["count"],
          totalCookies: function () {
              return this.$store.state.countTotal;
          }
      },
      methods: {
        //...mapActions["incrementCount"],
        increment() {
          //this.count++;
          this.$store.commit('ClickKenny');
          //console.log(this.$store.);
        },
        autoClick: function(){
            this.interval = setInterval(() => {
                this.$store.commit('AutoKill');
                console.log('tick');
                console.log(this.$store.state.killPerSecond);
            }, 1000);
        }
      },
      mounted : function(){
          this.autoClick();
      },
      beforeDestroy () {
          clearInterval(this.interval)
      },
      // Pour envoyer un "commit" au store : this.$store.commit('NOMDUCOMMIT', value)
  }
</script>

<style>
    .count {
        color: darkred;
    }
</style>