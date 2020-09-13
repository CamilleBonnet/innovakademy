<template>
  <div id="app">
    <Navbar />
    <p>{{message}}</p>
  </div>
</template>

<script>
import Navbar from './shared/navbar'
export default {
  components: { Navbar },
  data() {
    return {
      message: "fl;dkhgj",
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  color: blue;
}
</style>
