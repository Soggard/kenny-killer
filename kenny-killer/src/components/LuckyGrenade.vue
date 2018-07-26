<template>
    <div id="grenadable-zone">
        <div><img src="../assets/grenade.png" class="grenade" id="grenade" @click="kaboom"></div>
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
  },
  methods: {
    popGrenade () {
      // La grenade apparaît à une position aléatoire sur l'écran
      let grenade = document.getElementById('grenade')
      grenade.style.display = 'inline-block'
      let posx = (Math.random() * (window.innerWidth)).toFixed()
      let posy = (Math.random() * (window.innerHeight)).toFixed()
      grenade.style.top = posy + 'px'
      grenade.style.left = posx + 'px'
      setTimeout(function () {
        grenade.style.display = 'none'
      }, 8000)
    },
    grenadeTimer: function () {
      this.interval = setInterval(() => {
        if (Math.random() > 0.8) {
          // A chaque appel, la grenade a 20% de chance d'apparaître
          this.popGrenade()
        }
      }, 10000)
    },
    kaboom () {
      // Lorsqu'on explose la grenade
      document.getElementById('grenade').style.display = 'none'
      this.$store.commit('GrenadeExplosion')
    }
  },
  mounted: function () {
    // Déclenche le setInterval de contrôle d'apparition de la grenade
    this.grenadeTimer()
  },
  beforeDestroy () {
    clearInterval(this.interval)
  }
}
</script>

<style>
    #grenadable-zone {
        // width: 90%;
        // height: 90%;
        position: absolute;
        top: 0;
        left: 0;
    }

    @-webkit-keyframes rotating {
        from{
            -webkit-transform: rotate(0deg);
        }
        to{
            -webkit-transform: rotate(360deg);
        }
    }

    #grenadable-zone .grenade {
        position: absolute;
        height: 60px;
        -webkit-animation: rotating 3s linear infinite;
        display: none;
        z-index: 0;
        cursor: pointer;
    }

</style>
