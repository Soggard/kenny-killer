<template>
    <div id="stats">
        <p>Points par seconde : <span id="kps">{{ killPerSecond }}</span></p>
        <p>Points par clic : <span id="kpc">{{ killPerClick }}</span></p>

    </div>
</template>

<script>

export default {
  name: 'KennyKiller',
  data () {
    return {
    }
  },
  computed: {
    killPerSecond: function () {
      return this.$store.state.killPerSecond
    },
    killPerClick: function () {
      return this.$store.state.killPerClick
    }
  }
}
</script>

<style scoped>
    #stats {
        color: white;
        font-weight: bold;
        position: absolute;
        left: 10px;
        top: 10px;
        text-align: left;
    }
</style>
