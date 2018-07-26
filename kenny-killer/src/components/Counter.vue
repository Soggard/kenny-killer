<template>
    <div class="counter-zone">
        <h1 class="count">{{ totalKills }}</h1> <br>
        <img src="../assets/KennyAlive.png" alt="kenny" id="kennyAlive" @click="increment">
        <img src="../assets/KennyDead.png" alt="kenny" id="kennyDead" @click="increment">
    </div>
</template>

<script>
export default {
  name: 'Counter',
  data () {
    return {
      interval: ''
    }
  },
  computed: {
    totalKills: function () {
      return this.$store.state.countTotal
    }
  },
  methods: {
    increment () {
      // Lorsqu'on clique sur Kenny
      this.$store.commit('ClickKenny')
      // Change temporairement l'image
      this.$el.querySelector('#kennyAlive').style.display = 'none'
      this.$el.querySelector('#kennyDead').style.display = 'initial'
      const context = this
      setTimeout(function () {
        context.$el.querySelector('#kennyAlive').style.display = 'initial'
        context.$el.querySelector('#kennyDead').style.display = 'none'
      }, 150)
    },
    autoClick: function () {
      // Clics générés par les améliorations toutes les secondes
      this.interval = setInterval(() => {
        this.$store.commit('AutoKill')
      }, 1000)
    }
  },
  mounted: function () {
    // Déclenche le setInterval d'autoclick
    this.autoClick()
  },
  beforeDestroy () {
    clearInterval(this.interval)
  }
}
</script>

<style>
    .count {
        color: #fc5c0e;
    }
    .counter-zone {
        width:100%;
        height:100%;
        justify-content: center;
    }
    #kennyDead {
        display: none;
    }
    #kennyAlive, #kennyDead {
        cursor: pointer;
    }
</style>
