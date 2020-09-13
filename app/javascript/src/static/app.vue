<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <p>{{message}}</p>
  </div>
</template>

<script>
import Navbar from './shared/Navbar'
export default {
  components: { Navbar },
  data() {
    return {
      message: "Betty's website",
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  color: blue;
}
</style>
