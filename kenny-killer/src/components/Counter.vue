<template>
    <div>
        <h1 class="count">{{count}}</h1> <br>
        <img src="../assets/Kenny.png" alt="kenny" @click="increment">
    </div>
</template>


<script>
  export default {
    name: 'Counter',
      data() {
        return {
          count: 0
        }
      },
      methods: {
        increment() {
          this.count++;
        }
      }
  }
</script>

<style>
    .count {
        color: darkred;
    }
</style>