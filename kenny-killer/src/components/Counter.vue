<template>
    <div class="counter-zone">
        <h1 class="count">{{ totalCookies }}</h1> <br>
        <img src="../assets/KennyAlive.png" alt="kenny" id="kennyAlive" @click="increment">
        <img src="../assets/KennyDead.png" alt="kenny" id="kennyDead" @click="increment">
    </div>
</template>

<script>
// import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'Counter',
  data () {
    return {
      interval: ''
    }
  },
  computed: {
    // ...mapGetters["count"],
    totalCookies: function () {
      return this.$store.state.countTotal
    }
  },
  methods: {
    increment () {
      this.$store.commit('ClickKenny')
      // Change the image
      document.getElementById('kennyAlive').style.display = 'none'
      document.getElementById('kennyDead').style.display = 'initial'
      setTimeout(function(){
        document.getElementById('kennyAlive').style.display = 'initial'
        document.getElementById('kennyDead').style.display = 'none'
      }, 150)
    },
    autoClick: function () {
      this.interval = setInterval(() => {
        this.$store.commit('AutoKill')
        console.log('tick')
        console.log(this.$store.state.killPerSecond)
      }, 1000)
    }
  },
  mounted: function () {
    this.autoClick()
  },
  beforeDestroy () {
    clearInterval(this.interval)
  }
  // Pour envoyer un "commit" au store : this.$store.commit('NOMDUCOMMIT', value)
}
</script>

<style>
    .count {
        color: darkred;
    }
    .counter-zone {
        width:100%;
        height:100%;
        justify-content: center;
    }
    #kennyDead {
        display: none;
    }
</style>
