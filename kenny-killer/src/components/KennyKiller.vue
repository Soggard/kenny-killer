<template>
  <div class="main">
    <stats></stats>
    <shop></shop>
    <lucky-grenade></lucky-grenade>
    <counter></counter>
  </div>
</template>

<script>
import Counter from './Counter'
import Shop from './Shop'
import Stats from './Stats'
import LuckyGrenade from './LuckyGrenade'

export default {
  name: 'KennyKiller',
  data () {
    return {
    }
  },
  components: {
    Counter,
    Shop,
    Stats,
    LuckyGrenade
  }
}
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .main {
    width: 75%;
  }
</style>
