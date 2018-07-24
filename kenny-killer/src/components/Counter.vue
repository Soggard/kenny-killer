<template>
    <div>
        <h1 class="count">{{count}}</h1> <br>
        <img src="../assets/Kenny.png" alt="kenny" @click="increment">
    </div>
</template>


<script>
  import { mapActions, mapGetters } from "vuex"

  export default {
    name: 'Counter',
      data() {
        return {
          count: 0
        }
      },
      computed: {
        ...mapGetters["count"]
      },
      methods: {
        ...mapActions["incrementCount"],
        increment() {
          this.count++;
          console.log(mapGetters["count"]);
        }
      }
      // Pour envoyer un "commit" au store : this.$store.commit('NOMDUCOMMIT', value)
  }
</script>

<style>
    .count {
        color: darkred;
    }
</style>