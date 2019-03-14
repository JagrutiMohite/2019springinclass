<template>
    <div class="container">
      <Nav/>
  <div id="main" />
    <router-view />
     </div>
</template>

<script>
import Nav from "@/components/Nav";
export default {
  components: {
    Nav
  }
}
</script>

<style lang="scss">

</style>
