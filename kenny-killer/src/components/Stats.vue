<template>
    <div id="stats">
        <p>Points par seconde : {{ killPerSecond }}</p>
        <p>Points par clic : {{ killPerClick }}</p>

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
